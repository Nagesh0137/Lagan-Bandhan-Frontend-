import moment from 'moment';

export const calculateAge = (dob: any) => {
  const birthDate = moment(dob, 'YYYY-MM-DD');
  const currentDate = moment();
  return currentDate.diff(birthDate, 'years').toString();
};

export const suport = {
  mobile: '9637979931',
  email: 'runanubandhvishwavivah@gmail.com',
};

export const Info = {
  text: `Runanubandh Vishwavivah  📞 ${suport.mobile} / ✉️ ${suport.email}`,
};

export const skipPayment = false;
export const subscriptionAmount = 1;
export const currency = 'INR';
