export type ProfileCardProps = {
  name: string;
  photo: string;
  dob: string;
  city: string;
  occupation: string;
  caste?: string;
  handleAddToFevorite?: () => void;
  handleRemoveFromFavorite?: () => void;
  onClick: () => void;
};
