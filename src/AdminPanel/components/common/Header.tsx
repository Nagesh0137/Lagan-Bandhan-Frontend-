import {
  Avatar,
  Drawer,
  Dropdown,
  Navbar,
  Sidebar,
  TextInput,
} from 'flowbite-react';
import { useState, useEffect } from 'react';
import { 
  HiChartPie, 
  HiSearch, 
  HiShoppingBag, 
  HiUsers, 
  HiMenuAlt3,
  HiX,
  HiLogout,
  HiUserCircle
} from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = () => setIsOpen(false);

  const navigateToUserList = () => {
    handleClose();
    navigate('/admin/userList');
  };

  const navigateToPendingUserList = () => {
    handleClose();
    navigate('/admin/pendingUsers');
  };

  const navigateHome = () => {
    handleClose();
    navigate('/admin/home');
  };
  return (
    <>
      <nav className={`bg-white/95 backdrop-blur-md border-b transition-all duration-300 px-4 sm:px-6 py-3 fixed left-0 right-0 top-0 z-50 ${
        isScrolled 
          ? 'border-gray-200 shadow-lg dark:bg-gray-900/95 dark:border-gray-700' 
          : 'border-gray-100 dark:bg-gray-800/95 dark:border-gray-700'
      }`}>
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left section - Menu button and Logo */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsOpen(prev => !prev)}
              className="p-2 text-gray-600 rounded-xl hover:text-gray-900 hover:bg-gray-100 
                       focus:bg-gray-100 focus:ring-2 focus:ring-blue-500 transition-all duration-200
                       dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
                       dark:focus:bg-gray-700 active:scale-95">
              {isOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
            
            <Link
              to="/admin/home"
              className="flex items-center group">
              <img
                src={require('../../../assets/logo2.png')}
                className="h-10 sm:h-12 transition-transform duration-200 group-hover:scale-105"
                alt="Admin Portal"
              />
              <div className="hidden sm:block ml-3">
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">Admin Portal</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Management Dashboard</p>
              </div>
            </Link>
          </div>

          {/* Right section - User menu */}
          <div className="flex items-center space-x-3">
            {/* Notification badge (optional) */}
            <div className="hidden sm:flex items-center space-x-2">
              <div className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium dark:bg-blue-900 dark:text-blue-300">
                Admin
              </div>
            </div>
            
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <div className="flex items-center space-x-2 p-1 rounded-xl hover:bg-gray-100 
                             dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer">
                  <Avatar
                    alt="Admin Profile"
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded
                    size="sm"
                    className="ring-2 ring-blue-500"
                  />
                  <div className="hidden sm:block text-left">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Admin</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Administrator</p>
                  </div>
                </div>
              }>
              <Dropdown.Header>
                <div className="flex items-center space-x-3 py-2">
                  <HiUserCircle className="w-8 h-8 text-gray-400" />
                  <div>
                    <span className="block text-sm font-semibold text-gray-900 dark:text-white">Administrator</span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400">admin@matrimony.com</span>
                  </div>
                </div>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item icon={HiLogout} className="text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20">
                <Link to="/admin">Sign out</Link>
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Drawer */}
      <Drawer 
        open={isOpen}
        onClose={handleClose} 
        className={`transition-all duration-300 ${isOpen ? 'mt-16 sm:mt-20' : 'mt-14'}`}
        position="left"
      >
        <Drawer.Header 
          
          titleIcon={() => (
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <HiChartPie className="w-5 h-5 text-white" />
            </div>
          )}
          className="border-b border-gray-200 dark:border-gray-700 pb-4"
        />
        <Drawer.Items className="p-0">
          <Sidebar
            aria-label="Admin navigation sidebar"
            className="[&>div]:bg-transparent [&>div]:p-0 h-full">
            <div className="flex h-full flex-col justify-between font-medium">
              <div className="space-y-2 p-4">
                <Sidebar.Items>
                  <Sidebar.ItemGroup className="space-y-1">
                    <Sidebar.Item 
                      onClick={navigateHome} 
                      icon={HiChartPie}
                      className="group cursor-pointer rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 
                               dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-200 
                               border border-transparent hover:border-blue-200 dark:hover:border-blue-700
                               active:scale-98 p-3">
                      <span className="text-gray-700 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                        Dashboard
                      </span>
                    </Sidebar.Item>
                    
                    <Sidebar.Item
                      onClick={navigateToUserList}
                      icon={HiUsers}
                      className="group cursor-pointer rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 
                               dark:hover:from-green-900/20 dark:hover:to-emerald-900/20 transition-all duration-200 
                               border border-transparent hover:border-green-200 dark:hover:border-green-700
                               active:scale-98 p-3">
                      <span className="text-gray-700 dark:text-gray-200 group-hover:text-green-700 dark:group-hover:text-green-300">
                        All Users
                      </span>
                    </Sidebar.Item>
                    
                    <Sidebar.Item
                      onClick={navigateToPendingUserList}
                      icon={HiShoppingBag}
                      className="group cursor-pointer rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 
                               dark:hover:from-orange-900/20 dark:hover:to-amber-900/20 transition-all duration-200 
                               border border-transparent hover:border-orange-200 dark:hover:border-orange-700
                               active:scale-98 p-3">
                      <span className="text-gray-700 dark:text-gray-200 group-hover:text-orange-700 dark:group-hover:text-orange-300">
                        Pending Users
                      </span>
                      <span className="ml-auto bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full 
                                     dark:bg-orange-900 dark:text-orange-300">
                        New
                      </span>
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
              
              {/* Drawer Footer */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar
                      size="sm"
                      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      rounded
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Admin</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Administrator</p>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg 
                                   dark:hover:bg-red-900/20 transition-all duration-200">
                    <HiLogout className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}

export default Header;
