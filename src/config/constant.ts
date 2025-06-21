import moment from 'moment';

export const calculateAge = (dob: any) => {
  const birthDate = moment(dob, 'YYYY-MM-DD');
  const currentDate = moment();
  return currentDate.diff(birthDate, 'years').toString();
};

export const suport = {
  mobile: '9637979931',
  email: 'jeevansobati@gmail.com',
};

export const Info = {
  text: `Jeevan Sobati 📞 ${suport.mobile} / ✉️ ${suport.email}`,
};

export const skipPayment = false;
export const subscriptionAmount = 251;
export const currency = 'INR';
