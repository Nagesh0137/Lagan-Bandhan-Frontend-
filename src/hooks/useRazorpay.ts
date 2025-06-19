// @ts-nocheck
import { useRef, useState } from 'react';
import axios from 'axios';
import { Razorpay, baseUrl } from '../config/api';
import { useNavigate } from 'react-router-dom';
import crypto from 'crypto-js';
import { showToast } from '../utils/ErrorToast';

interface OrderDetails {
  orderId: string;
  currency: string;
  amount: number;
}

const useRazorpay = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [displayRazorpay, setDisplayRazorpay] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const paymentId = useRef(null);
  const paymentMethod = useRef(null);

  const loadScript = (src: string) =>
    new Promise(resolve => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });

  const handleCreateOrder = async (
    amount: number,
    currency: string,
    userId: string,
  ) => {
    setLoading(true);
    const data = JSON.stringify({
      amount,
      currency,
      payment_capture: 1,
      id: userId,
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: baseUrl + '/pay/order',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };

    try {
      const response = await axios.request(config);
      setLoading(false);
      if (response?.data) {
        setOrderDetails({
          orderId: response.data.order_id,
          currency: response.data.currency,
          amount: response.data.amount,
        });
        openRazorpayModal(response.data.order_id, response.data.amount, response?.data?.id);
        setDisplayRazorpay(true);
      } else {
        showToast('Something went wrong', 'error');
      }
    } catch (error) {
      setLoading(false);
      showToast('Something went wrong', 'error');
    }
  };

  const openRazorpayModal = async (
    orderId: string,
    amount: number,
    id: number,
  ) => {
    // we will be filling this object in next step.
    const options = {
      key: Razorpay.keyId, // key id from props
      amount, // Amount in lowest denomination from props
      currency: 'INR', // Currency from props.
      name: 'Lagan Bandhan', // Title for your organization to display in checkout modal
      // image, // custom logo  url
      order_id: orderId, // order id from props
      // This handler menthod is always executed in case of succeeded payment
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: 'User', //your customer's name
        email: 'user@example.com',
        contact: '9000000000', //Provide the customer's phone number for better conversion rates
      },
      handler: (response: {
        razorpay_payment_id: null;
        razorpay_signature: string;
      }) => {
        paymentId.current = response.razorpay_payment_id;

        // Most important step to capture and authorize the payment. This can be done of Backend server.
        const succeeded =
          crypto
            .HmacSHA256(
              `${orderId}|${response.razorpay_payment_id}`,
              Razorpay.keySecreat,
            )
            .toString() === response.razorpay_signature;

        // If successfully authorized. Then we can consider the payment as successful.
        if (succeeded) {
          handlePayment(
            'succeeded',
            {
              orderId,
              paymentId,
              signature: response.razorpay_signature,
            },
            id,
          );
        } else {
          handlePayment(
            'failed',
            {
              orderId,
              paymentId: response.razorpay_payment_id,
            },
            id,
          );
        }
      },
      modal: {
        confirm_close: true, // this is set to true, if we want confirmation when clicked on cross button.
        // This function is executed when checkout modal is closed
        // There can be 3 reasons when this modal is closed.
        ondismiss: async (reason: string | undefined) => {
          const {
            reason: paymentReason,
            field,
            step,
            code,
          } = reason && reason.error ? reason.error : {};
          // Reason 1 - when payment is cancelled. It can happend when we click cross icon or cancel any payment explicitly.
          if (reason === undefined) {
            handlePayment('cancelled');
          }
          // Reason 2 - When modal is auto closed because of time out
          else if (reason === 'timeout') {
            handlePayment('timedout');
          }
          // Reason 3 - When payment gets failed.
          else {
            handlePayment('failed', {
              orderId,
              paymentReason,
              field,
              step,
              code,
            });
          }
        },
      },
      // This property allows to enble/disable retries.
      // This is enabled true by default.
      retry: {
        enabled: false,
      },
      timeout: 900, // Time limit in Seconds
      theme: {
        color: '#EF4444', // Custom color for your checkout modal.
      },
    };

    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js',
    );

    if (!res) {
      return;
    }
    // All information is loaded in options which we will discuss later.
    const rzp1 = new window.Razorpay(options);

    // If you want to retreive the chosen payment method.
    rzp1.on('payment.submit', response => {
      paymentMethod.current = response.method;
    });

    // To get payment id in case of failed transaction.
    rzp1.on('payment.failed', response => {
      paymentId.current = response.error.metadata.payment_id;
    });

    // to open razorpay checkout modal.
    rzp1.open();
  };

  // informing server about payment
  const handlePayment = async (
    status: string,
    orderDetails = {},
    id: number,
  ) => {
    if (status === 'cancelled') {
      return;
    }

    const res = await axios.post(`${baseUrl}/pay/payment`, {
      status,
      orderDetails,
      id,
    });
    if (res?.data?.redirect) {
      navigate(res?.data?.redirect, { replace: true });
    }
  };

  return {
    orderDetails,
    displayRazorpay,
    handleCreateOrder,
    loading,
    setDisplayRazorpay,
  };
};

export default useRazorpay;
