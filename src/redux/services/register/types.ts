import { AxiosResponse } from 'axios';

export type RegisterRequestType = {
  email?: string;
  password: string;
  mobileNumber?: string;
};

export type RegisterResponseType = {
  success: number;
  data: {
    token: string;
    id: string;
    message: string;
  };
} & AxiosResponse;

export type CheckEmailRequestType = {
  email: string;
};
export type VerifyOtpRequestType = {
  email: string;
  otp: number;
};
export type forgetPasswordRequestType = {
  password: string;
  email: string;
};
