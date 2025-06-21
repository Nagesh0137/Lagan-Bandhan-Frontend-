import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/common/Footer';
import useRazorpay from '../hooks/useRazorpay';
import { showToast } from '../utils/ErrorToast';
import { CreditCardIcon, ShieldCheckIcon, LockClosedIcon } from '@heroicons/react/24/outline';

interface PaymentLocationState {
  userId?: string;
  mobileNumber?: string;
  message?: string;
}

const PaymentScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { handleCreateOrder, loading } = useRazorpay();
  const [isProcessing, setIsProcessing] = useState(false);

  // Get user details from navigation state with proper typing
  const state = location.state as PaymentLocationState;
  const { userId, mobileNumber, message } = state || {};

  useEffect(() => {
    // If no user details in state, redirect to auth
    if (!userId || !mobileNumber) {
      showToast('Please login to access payment page', 'error');
      navigate('/auth', { replace: true });
    }
  }, [userId, mobileNumber, navigate]);

  const handlePaymentClick = async () => {
    if (!userId) {
      showToast('User information missing. Please try again.', 'error');
      return;
    }

    setIsProcessing(true);
    try {
      // Create payment order for ₹701 (70100 paise)
      await handleCreateOrder(25100, 'INR', userId);
    } catch (error) {
      showToast('Failed to initiate payment. Please try again.', 'error');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleBackToLogin = () => {
    navigate('/auth', { replace: true });
  };

  return (
    <>
      <Header isUserFullyOnboarded={false} />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-orange-900 dark:to-red-900 py-16 lg:py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-orange-100 dark:bg-orange-800 rounded-full">
                <CreditCardIcon className="w-12 h-12 text-orange-600 dark:text-orange-300" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-Onest">
              Complete Your Payment.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-Onest">
              Unlock premium matrimony features with a one-time payment
            </p>
          </div>

          {/* Message Alert */}
          {message && (
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg mr-3">
                  <ShieldCheckIcon className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                </div>
                <p className="text-blue-800 dark:text-blue-200 font-Onest">
                  {message}
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Payment Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-rose-600 px-8 py-6">
                <h2 className="text-2xl font-bold text-white font-Onest">
                  Premium Membership
                </h2>
                <p className="text-white/90 font-Onest">
                  Mobile: {mobileNumber}
                </p>
              </div>

              <div className="p-8">
                {/* Price */}
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-gray-900 dark:text-white font-Onest">
                    ₹251
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 font-Onest">
                    One-time payment • Lifetime access
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-Onest">Unlimited profile viewing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-Onest">Direct contact access</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-Onest">Advanced search filters</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-Onest">Priority customer support</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-Onest">Profile verification badge</span>
                  </div>
                </div>

                {/* Payment Button */}
                <button
                  onClick={handlePaymentClick}
                  disabled={loading || isProcessing}
                  className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white py-4 px-6 rounded-lg font-semibold font-Onest transition-all duration-200 hover:from-red-600 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] text-lg"
                >
                  {loading || isProcessing ? (
                    <div className="flex items-center justify-center space-x-2">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    <span className="flex items-center justify-center">
                      <CreditCardIcon className="w-5 h-5 mr-2" />
                      Pay ₹251 Now
                    </span>
                  )}
                </button>

                {/* Back to Login */}
                <button
                  onClick={handleBackToLogin}
                  className="w-full mt-4 text-gray-600 dark:text-gray-300 py-2 px-4 rounded-lg font-Onest transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Back to Login
                </button>
              </div>
            </div>

            {/* Security Information */}
            <div className="space-y-6">
              
              {/* Security Features */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
                <div className="flex items-center mb-4">
                  <LockClosedIcon className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-Onest">
                    Secure Payment
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm font-Onest">256-bit SSL encryption</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm font-Onest">PCI DSS compliant</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm font-Onest">Razorpay secured</span>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-Onest mb-4">
                  Accepted Payment Methods
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="text-gray-600 dark:text-gray-300 font-Onest">• Credit Cards</div>
                  <div className="text-gray-600 dark:text-gray-300 font-Onest">• Debit Cards</div>
                  <div className="text-gray-600 dark:text-gray-300 font-Onest">• UPI</div>
                  <div className="text-gray-600 dark:text-gray-300 font-Onest">• Net Banking</div>
                  <div className="text-gray-600 dark:text-gray-300 font-Onest">• Digital Wallets</div>
                  <div className="text-gray-600 dark:text-gray-300 font-Onest">• EMI Options</div>
                </div>
              </div>

              {/* Money Back Guarantee */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-700">
                <div className="flex items-center mb-3">
                  <ShieldCheckIcon className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 font-Onest">
                    100% Secure & Trusted
                  </h3>
                </div>
                <p className="text-green-700 dark:text-green-200 text-sm font-Onest">
                  Your payment information is fully encrypted and secure. Trusted by thousands of users.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PaymentScreen;
