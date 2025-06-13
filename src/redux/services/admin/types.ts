import { AxiosResponse } from 'axios';

export type AdminRequestType = {
  password: string;
  mobileNumber: string;
};

export type AdminResponseType = {
  success: number;
  data: {
    token: string;
    id: string;
  };
} & AxiosResponse;
