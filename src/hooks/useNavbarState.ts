import { useState, useEffect } from 'react';

interface NavbarState {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  activeRoute: string;
  userOnlineStatus: 'online' | 'away' | 'offline';
}

export const useNavbarState = () => {
  const [state, setState] = useState<NavbarState>({
    isScrolled: false,
    isMobileMenuOpen: false,
    activeRoute: window.location.pathname,
    userOnlineStatus: 'online'
  });

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setState(prev => ({
        ...prev,
        isScrolled: scrollTop > 10
      }));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setState(prev => ({
        ...prev,
        activeRoute: window.location.pathname,
        isMobileMenuOpen: false // Close mobile menu on route change
      }));
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  // Handle user activity for online status
  useEffect(() => {
    let activityTimeout: NodeJS.Timeout;

    const resetActivityTimeout = () => {
      clearTimeout(activityTimeout);
      setState(prev => ({ ...prev, userOnlineStatus: 'online' }));
      
      activityTimeout = setTimeout(() => {
        setState(prev => ({ ...prev, userOnlineStatus: 'away' }));
      }, 5 * 60 * 1000); // 5 minutes
    };

    const handleActivity = () => resetActivityTimeout();

    // Track user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    resetActivityTimeout();

    return () => {
      clearTimeout(activityTimeout);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, []);

  const toggleMobileMenu = () => {
    setState(prev => ({
      ...prev,
      isMobileMenuOpen: !prev.isMobileMenuOpen
    }));
  };

  const closeMobileMenu = () => {
    setState(prev => ({
      ...prev,
      isMobileMenuOpen: false
    }));
  };

  return {
    ...state,
    toggleMobileMenu,
    closeMobileMenu
  };
};

// Helper function to get matrimony-themed status colors
export const getStatusColor = (status: 'online' | 'away' | 'offline') => {
  switch (status) {
    case 'online':
      return 'bg-gradient-to-r from-green-400 to-emerald-500';
    case 'away':
      return 'bg-gradient-to-r from-yellow-400 to-orange-500';
    case 'offline':
      return 'bg-gradient-to-r from-gray-400 to-gray-500';
    default:
      return 'bg-gradient-to-r from-gray-400 to-gray-500';
  }
};

// Helper function to check if route is active
export const isRouteActive = (currentPath: string, targetPath: string): boolean => {
  if (targetPath === '/home') {
    return currentPath === '/home' || currentPath === '/';
  }
  return currentPath.includes(targetPath);
};

// Matrimony-themed navigation items
export const navigationItems = [
  {
    path: '/home',
    label: 'Home',
    icon: 'HiSparkles',
    description: 'Browse profiles and find your perfect match'
  },
  {
    path: '/about',
    label: 'About Us',
    icon: 'HiInformationCircle',
    description: 'Learn about our matrimony services'
  },
  {
    path: '/favorite',
    label: 'Favorites',
    icon: 'HiHeart',
    description: 'View your saved and liked profiles'
  },
  {
    path: '/contact',
    label: 'Contact Us',
    icon: 'HiPhone',
    description: 'Get in touch with our support team'
  }
];

// User menu items with matrimony context
export const userMenuItems = [
  {
    action: 'changePassword',
    label: 'Change Password',
    icon: 'HiSparkles',
    color: 'blue',
    description: 'Update your account security'
  },
  {
    action: 'updateProfile',
    label: 'Update Profile',
    icon: 'HiUsers',
    color: 'purple',
    description: 'Edit your matrimony profile'
  },
  {
    action: 'updatePhoto',
    label: 'Update Photo',
    icon: 'HiSparkles',
    color: 'orange',
    description: 'Change your profile pictures'
  },
  {
    action: 'deleteAccount',
    label: 'Delete Account',
    icon: 'HiOutlineExclamationCircle',
    color: 'red',
    description: 'Permanently remove your account'
  }
];
