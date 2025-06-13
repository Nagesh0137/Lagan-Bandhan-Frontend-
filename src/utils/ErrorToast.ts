import { Slide, toast } from 'react-toastify';

export const showToast = (msg: string, type: 'error' | 'success') => {
  if (type === 'error') {
    return toast.error(msg, {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Slide,
    });
  }
  if (type === 'success') {
    return toast.success(msg, {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Slide,
    });
  }
};
