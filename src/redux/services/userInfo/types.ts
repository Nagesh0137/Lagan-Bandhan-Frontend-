import { AxiosResponse } from 'axios';

export type UserInfoResponseType = {
  username?: string;
  email?: string;
  password: string;
  mobileNumber: string;
  userDetails: UserDetails;
  paymentInfo?: PaymentInfo;
  orderInfo?: orderInfo;
  photoDetails: PhotoDetails;
  subscriptionStartDate: string;
  subscriptionEndDate: string;
  redirectTo: 'userDetails' | 'photoUpload' | null;
  token: string;
} & AxiosResponse;

export type UserDetails = {
  personalDetails: PersonalDetails;
  basicDetails: BasicDetails;
  familyDetails: FamilyDetails;
  addressDetails: AddressDetails;
  partnerpreferences:PartnerPreferences;
};

export type UserDetailsRequest = {
  age?: string;
  userDetails?: UserDetails;
  photoDetails?: PhotoDetails;
};

interface PhotoDetails {
  adharCard?: string;
  profilePhoto: string;
}
interface PersonalDetails {
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  timeOfBirth: string;
  marriageStatus: string;
  bornPlace: string;
  gender: string;
  religion: string;
  caste: string;
  subCaste: string;
  bloodGroup: string;
  farm?: string;
  fullName?: string;
}

interface BasicDetails {
  education: string;
  occupation: string;
  income: string;
  height: string;
  weight?: string;
  skinColor: string;
  rashi:string;
  nakshatra:string;
}

interface FamilyDetails {
  motherName: string;
  motherMobileNumber: string;
  fatherName: string;
  fatherMobileNumber: string;
  numOfBrothers: string;
  numOfSisters: string;
}

interface AddressDetails {
  address: string;
  pincode: string;
  city: string;
  taluka: string;
  district: string;
  state: string;
  tempAddress: string;
}

interface PartnerPreferences{
  PPAnnualIncome:string,
  PPCaste:string
  PPEducation:string
  PPResidingCountry:string
  PPResidingState:string
  PPResidingCity:string
  PPHeight:string
  PPWeight:string
  PPSkinColor:string
}

export type PaymentInfo = {
  status: string;
  orderDetails?: {
    orderId: string;
    paymentId: { current: string };
    signature: string;
  };
};

export type orderInfo = {
  orderId: string;
  currency: string;
  amount: number | string;
};

enum MarriageStatus {
  Single = 'Single',
  Married = 'Married',
  Widowed = 'Widowed',
  Divorced = 'Divorced',
  Separated = 'Separated',
}

export type JWTResponse = {
  userId: string;
};

export type ImageRequest = {
  file: any;
  type: 'profilePhoto' | 'document';
};
