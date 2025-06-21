import React, { useState } from 'react';
import { Avatar, Button, Dropdown, Modal, Navbar } from 'flowbite-react';
import ChangeLanguage from './common/ChangeLanguage/ChangeLanguage';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  useDeleteUserProfileMutation,
  userInfo,
} from '../redux/services/userInfo/api';
import { useDispatch } from 'react-redux';
import { HiOutlineExclamationCircle, HiHeart, HiUsers, HiSparkles, HiPhone, HiInformationCircle } from 'react-icons/hi';
import { showToast } from '../utils/ErrorToast';
import './Header.css';
interface propState {
  isUserFullyOnboarded?: boolean;
}

const Header = ({ isUserFullyOnboarded = false, ...props }: propState) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteProfile, { isLoading }] = useDeleteUserProfileMutation();
  const { t } = useTranslation();
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const photo = localStorage.getItem('photo');
  const [openModal, setOpenModal] = useState(false);

  const handleLogout = () => {
    dispatch(userInfo.util.resetApiState());
    localStorage.clear();
    navigate('/', { replace: true });
  };

  const changePassword = () => {
    navigate('/change');
  };

  const UpdateProfile = () => {
    navigate('/updateProfile');
  };
  const UpdatePhoto = () => {
    navigate('/updatePhoto');
  };

  const AboutUs = () => {
    navigate('/about');
  };

  const ContactUs = () => {
    navigate('/contact');
  };

  const selectedTab = window.location.pathname.split('/');

  const handleDeleteAccount = () => {
    deleteProfile({})
      .then(res => {
        showToast('Account Deleted Successfully', 'success');
        setOpenModal(false);
        handleLogout();
      })
      .catch(error => {
        console.log({ error });
        showToast('Something went wrong', 'error');
      });
  };

  const openDeleteAccountModal = () => {
    setOpenModal(true);
  };

  return (
    <Navbar 
      fluid 
      className="matrimony-navbar sticky top-0 z-50 shadow-lg border-b border-pink-100 backdrop-blur-sm"
      style={{ listStyle: 'none', margin: 0, padding: 0 }}
    >
      <div className="w-full px-2 sm:px-3 lg:px-4">
        <div className="flex items-center justify-between py-1">
          {/* Brand Logo */}
          <Navbar.Brand
        className="brand-container cursor-pointer group transition-all duration-300 hover:scale-105"
        onClick={() => isUserFullyOnboarded && navigate('/home')}
        style={{ listStyle: 'none', margin: 0, padding: 0 }}
          >
        <div className="flex items-center space-x-2">
          <div className="relative">
            <img
          src={require('../assets/Jeevan Sobati.png')}
          className="brand-logo h-8 sm:h-10 lg:h-12 w-auto transition-all duration-300"
          alt="Jeevan Sobati - Where Hearts Unite"
            />
          </div>
        </div>
          </Navbar.Brand>

          {/* Centered Navigation Links */}
          {isUserFullyOnboarded && (
        <div className="hidden lg:flex flex-1 justify-center">
          <div className="flex flex-row space-x-3 xl:space-x-4" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <Navbar.Link
          className={`
            nav-link font-semibold transition-all duration-300 px-2 py-1.5 rounded-lg cursor-pointer text-center text-sm
            ${window.location.pathname.includes('/home') 
              ? 'text-pink-600 bg-gradient-to-r from-pink-100 to-rose-100 border-b-2 border-pink-600 shadow-md' 
              : 'text-gray-700 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:shadow-md'
            }
          `}
          onClick={() => navigate('/home')}
          style={{ listStyle: 'none', margin: 0, padding: '6px 8px' }}
            >
          {t('navigation.home')}
            </Navbar.Link>

            <Navbar.Link
          className={`
            nav-link font-semibold transition-all duration-300 px-2 py-1.5 rounded-lg cursor-pointer text-center text-sm
            ${window.location.pathname.includes('/about') 
              ? 'text-pink-600 bg-gradient-to-r from-pink-100 to-rose-100 border-b-2 border-pink-600 shadow-md' 
              : 'text-gray-700 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:shadow-md'
            }
          `}
          onClick={AboutUs}
          style={{ listStyle: 'none', margin: 0, padding: '6px 8px' }}
            >
          {t('navigation.about')}
            </Navbar.Link>

            <Navbar.Link
          className={`
            nav-link font-semibold transition-all duration-300 px-2 py-1.5 rounded-lg cursor-pointer text-center text-sm
            ${window.location.pathname.includes('/favorite') 
              ? 'text-pink-600 bg-gradient-to-r from-pink-100 to-rose-100 border-b-2 border-pink-600 shadow-md' 
              : 'text-gray-700 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:shadow-md'
            }
          `}
          onClick={() => navigate('/favorite')}
          style={{ listStyle: 'none', margin: 0, padding: '6px 8px' }}
            >
          {t('navigation.favorites')}
            </Navbar.Link>

            <Navbar.Link            className={`
            nav-link font-semibold transition-all duration-300 px-2 py-1.5 rounded-lg cursor-pointer text-center text-sm
            ${window.location.pathname.includes('/contact') 
              ? 'text-pink-600 bg-gradient-to-r from-pink-100 to-rose-100 border-b-2 border-pink-600 shadow-md' 
              : 'text-gray-700 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:shadow-md'
            }
          `}
          onClick={ContactUs}
          style={{ listStyle: 'none', margin: 0, padding: '6px 8px' }}
            >
          {t('navigation.contact')}
            </Navbar.Link>
          </div>
        </div>
          )}

          {/* Right Side - User Menu & Language */}
          <div className="flex items-center space-x-1 lg:space-x-2" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        <ChangeLanguage />

        {isUserFullyOnboarded && (
          <>
            {/* User Avatar Dropdown */}
            <Dropdown
          arrowIcon={false}
          inline
          label={
            <div className="user-avatar-container relative group">
              <div className="relative">
            <Avatar
              img={
                photo ??
                'https://bmd.gov.bd/file/img/nwp/notfound.png'
              }
              rounded
              className="border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 ring-2 ring-pink-100 hover:ring-pink-200 pulse-pink"
              size="md"
            />
            {/* Status indicators removed */}
              </div>
            </div>
          }
            >
          <Dropdown.Header className="bg-gradient-to-r from-pink-50 via-white to-rose-50 border-b border-pink-100">
            <div className="flex items-center space-x-3 p-3">
              <div className="relative">
            <Avatar
              img={photo ?? 'https://bmd.gov.bd/file/img/nwp/notfound.png'}
              rounded
              size="sm"
              className="ring-2 ring-pink-200"
            />
            {/* Status indicator removed */}
              </div>
              <div className="flex-1">
            <span className="block text-sm font-bold text-gray-900 truncate">{name}</span>
            <span className="block truncate text-xs text-gray-600 font-medium">
              {email}
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
              Active
            </span>
              </div>
            </div>
          </Dropdown.Header>
          
          <div className="py-1">
            <Dropdown.Item 
              className="dropdown-item font-medium text-gray-700 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-700 transition-all duration-200"
              onClick={changePassword}
            >
              {t('navigation.changePassword')}
            </Dropdown.Item>
            
            <Dropdown.Item 
              className="dropdown-item font-medium text-gray-700 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-700 transition-all duration-200"
              onClick={UpdateProfile}
            >
              {t('navigation.updateProfile')}
            </Dropdown.Item>
            
            <Dropdown.Item 
              className="dropdown-item font-medium text-gray-700 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-700 transition-all duration-200"
              onClick={UpdatePhoto}
            >
              {t('navigation.updatePhoto')}
            </Dropdown.Item>
          </div>
          
          <Dropdown.Divider className="border-pink-200" />
          
          <Dropdown.Item 
            className="dropdown-item font-medium text-red-600 hover:bg-red-50 transition-all duration-200"
            onClick={openDeleteAccountModal}
          >
            {t('navigation.deleteAccount')}
          </Dropdown.Item>
          
          <Dropdown.Divider className="border-gray-200" />
          
          <Dropdown.Item 
            className="dropdown-item font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200"
            onClick={handleLogout}
          >
            {t('navigation.logout')}
          </Dropdown.Item>
            </Dropdown>

            {/* Mobile Menu Toggle */}
            <Navbar.Toggle className="text-pink-600 hover:bg-pink-50 focus:ring-pink-300 border-pink-200" />
          </>
        )}
          </div>
        </div>

        {/* Navigation Links for mobile */}
        {isUserFullyOnboarded && (
          <div className="mobile-menu-overlay lg:hidden" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        <Navbar.Collapse className="mt-1 lg:mt-0" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <div className="flex flex-col lg:flex-row lg:space-x-3 xl:space-x-4 space-y-1 lg:space-y-0 pb-2 lg:pb-0" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <Navbar.Link
          className={`
            nav-link font-semibold transition-all duration-300 px-2 py-1.5 rounded-lg cursor-pointer text-center lg:text-left text-sm
            ${window.location.pathname.includes('/home') 
              ? 'text-pink-600 bg-gradient-to-r from-pink-100 to-rose-100 border-l-4 lg:border-l-0 lg:border-b-2 border-pink-600 shadow-md' 
              : 'text-gray-700 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:shadow-md'
            }
          `}
          onClick={() => navigate('/home')}
          style={{ listStyle: 'none', margin: 0, padding: '6px 8px' }}
            >
          Home
            </Navbar.Link>

            <Navbar.Link
          className={`
            nav-link font-semibold transition-all duration-300 px-2 py-1.5 rounded-lg cursor-pointer text-center lg:text-left text-sm
            ${window.location.pathname.includes('/about') 
              ? 'text-pink-600 bg-gradient-to-r from-pink-100 to-rose-100 border-l-4 lg:border-l-0 lg:border-b-2 border-pink-600 shadow-md' 
              : 'text-gray-700 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:shadow-md'
            }
          `}
          onClick={AboutUs}
          style={{ listStyle: 'none', margin: 0, padding: '6px 8px' }}
            >
          About Us
            </Navbar.Link>

            <Navbar.Link
          className={`
            nav-link font-semibold transition-all duration-300 px-2 py-1.5 rounded-lg cursor-pointer text-center lg:text-left text-sm
            ${window.location.pathname.includes('/favorite') 
              ? 'text-pink-600 bg-gradient-to-r from-pink-100 to-rose-100 border-l-4 lg:border-l-0 lg:border-b-2 border-pink-600 shadow-md' 
              : 'text-gray-700 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:shadow-md'
            }
          `}
          onClick={() => navigate('/favorite')}
          style={{ listStyle: 'none', margin: 0, padding: '6px 8px' }}
            >
          Favorites
            </Navbar.Link>

            <Navbar.Link
          className={`
            nav-link font-semibold transition-all duration-300 px-2 py-1.5 rounded-lg cursor-pointer text-center lg:text-left text-sm
            ${window.location.pathname.includes('/contact') 
              ? 'text-pink-600 bg-gradient-to-r from-pink-100 to-rose-100 border-l-4 lg:border-l-0 lg:border-b-2 border-pink-600 shadow-md' 
              : 'text-gray-700 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:shadow-md'
            }
          `}
          onClick={ContactUs}
          style={{ listStyle: 'none', margin: 0, padding: '6px 8px' }}
            >
          {t('navigation.contact')}
            </Navbar.Link>
          </div>
        </Navbar.Collapse>
          </div>
        )}
      </div>

      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
        className="backdrop-blur-sm"
      >
        <Modal.Header className="bg-gradient-to-r from-red-50 to-pink-50 border-b border-red-200" />
        <Modal.Body className="bg-white">
          <div className="text-center p-6">
            <div className="mx-auto mb-6 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <HiOutlineExclamationCircle className="w-8 h-8 text-red-500" />
            </div>
            
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              {t('modal.deleteAccount.title')}
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('modal.deleteAccount.description')}
            </p>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-red-700 font-medium">
                {t('modal.deleteAccount.warningTitle')}
              </p>
              <ul className="text-xs text-red-600 mt-2 space-y-1">
                <li>{t('modal.deleteAccount.warningItems.0')}</li>
                <li>{t('modal.deleteAccount.warningItems.1')}</li>
                <li>{t('modal.deleteAccount.warningItems.2')}</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button
                className="bg-red-500 hover:bg-red-600 focus:ring-red-300 font-semibold px-6 py-2 transition-all duration-200"
                onClick={handleDeleteAccount}
                disabled={isLoading}
              >
                {isLoading ? t('modal.deleteAccount.deletingButton') : t('modal.deleteAccount.confirmButton')}
              </Button>
              <Button
                color="gray"
                className="font-semibold px-6 py-2 border-gray-300 hover:bg-gray-50 transition-all duration-200"
                onClick={() => setOpenModal(false)}
              >
                {t('modal.deleteAccount.cancelButton')}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
};

export default Header;
