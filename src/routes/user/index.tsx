import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../../screens/ProtectedRoute';
import Register from '../../components/RegisterDetails/Register';
import Home from '../../views/home';
import ValidateScreen from '../../screens/ValidateScreen';
import UserDetails from '../../components/UserDetails/UserDetails';
import HomeScreen from '../../screens/HomeScreen';
import ProfileDetailsCard from '../../components/ProfileDetails/ProfileDetailsCard';
import PhotoUpload from '../../components/PhotoUpload/PhotoUpload';
import ChangePassword from '../../components/RegisterDetails/ChangePassword';
import FavoriteScreen from '../../screens/FavoriteScreen';
import UpdateProfile from '../../components/UserDetails/UpdateProfile';
import UpdatePhotoUpload from '../../components/PhotoUpload/UpdatePhotoUpload';
import ContactScreen from '../../screens/ContactScreen';
import AboutScreen from '../../screens/AboutScreen';
import EmailVerificationScreen from '../../screens/EmailVerificationScreen';
import OTPVerificationScreen from '../../screens/OTPVerificationScreen';
import { PasswordVerificationSchema } from '../../utils/PasswordVerificationSchema';
import PasswordChangeVerification from '../../screens/PasswordChangeVerification';
import TermsConditionScreen from '../../screens/TermsConditionScreen';
import PrivacyPolicyScreen from '../../screens/PrivacyPolicyScreen';
import RefundAndReturnPolicy from '../../screens/RefundAndReturnPolicy';
import FAQScreen from '../../screens/FAQScreen';
import HelpCenterScreen from '../../screens/HelpCenterScreen';

export const UserRoute = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/validate" element={<ValidateScreen />} />
      <Route path="/emailVerification" element={<EmailVerificationScreen />} />
      <Route path="/OTPVerification" element={<OTPVerificationScreen />} />
      <Route
        path="/PassWordVerification"
        element={<PasswordChangeVerification />}
      />

      <Route element={<ProtectedRoute />}>
        <Route path="/userdetails" element={<UserDetails />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/details" element={<ProfileDetailsCard />} />
        <Route path="/photoUpload" element={<PhotoUpload />} />
        <Route path="/change" element={<ChangePassword />} />
        <Route path="/favorite" element={<FavoriteScreen />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
        <Route path="/updatePhoto" element={<UpdatePhotoUpload />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Route>
      <Route path="/terms" element={<TermsConditionScreen />} />
      <Route path="/privacy_policy" element={<PrivacyPolicyScreen />} />
      <Route path="/refund_policy" element={<RefundAndReturnPolicy />} />
      <Route path="/faq" element={<FAQScreen />} />
      <Route path="/help" element={<HelpCenterScreen />} />
      <Route path="*" element={<h1>not found</h1>} />
    </Routes>
  );
};
