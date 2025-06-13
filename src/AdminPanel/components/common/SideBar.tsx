import { 
  UserIcon, 
  UserPlusIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  ArrowRightOnRectangleIcon,
  BellIcon,
  HomeIcon
} from '@heroicons/react/24/outline';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial size
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  // Navigation items configuration
  const navigationItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: HomeIcon,
      path: '/admin/home',
      badge: null,
      color: 'blue'
    },
    {
      id: 'users',
      label: 'All Users',
      icon: UserIcon,
      path: '/admin/userList',
      badge: null,
      color: 'green'
    },
    {
      id: 'pending',
      label: 'Pending Users',
      icon: UserPlusIcon,
      path: '/admin/pendingUsers',
      badge: { count: 5, type: 'warning' },
      color: 'orange'
    }
  ];

  const quickActions = [
    {
      id: 'analytics',
      label: 'Analytics',
      icon: ChartBarIcon,
      path: '/admin/analytics',
      color: 'purple'
    },
    {
      id: 'docs',
      label: 'Documentation',
      icon: DocumentTextIcon,
      path: '/admin/docs',
      color: 'indigo'
    },
    {
      id: 'help',
      label: 'Help & Support',
      icon: QuestionMarkCircleIcon,
      path: '/admin/help',
      color: 'cyan'
    }
  ];

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen pt-16 sm:pt-20 transition-all duration-300 ease-in-out 
                 ${isCollapsed ? 'w-16' : 'w-72'} 
                 bg-white/95 backdrop-blur-md border-r border-gray-200 
                 dark:bg-gray-900/95 dark:border-gray-700 
                 shadow-xl -translate-x-full md:translate-x-0`}
      aria-label="Admin Navigation Sidebar"
      id="admin-sidebar">
      
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        {!isCollapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <HomeIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Admin Panel</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Management Console</p>
            </div>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 hidden md:block">
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${isCollapsed ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="overflow-y-auto h-full px-3 py-4 space-y-6">
        
        {/* Search Bar */}
        {!isCollapsed && (
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl 
                       bg-gray-50/50 backdrop-blur-sm
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       dark:bg-gray-800/50 dark:border-gray-600 dark:text-white 
                       dark:focus:ring-blue-400 dark:focus:border-blue-400
                       transition-all duration-200"
              placeholder="Search menu..."
            />
          </div>
        )}

        {/* Main Navigation */}
        <nav className="space-y-2">
          <div className={`${isCollapsed ? 'text-center' : ''}`}>
            {!isCollapsed && (
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
                Main Menu
              </h3>
            )}
            
            <ul className="space-y-1">
              {navigationItems.map((item) => {
                const isActive = isActiveRoute(item.path);
                const IconComponent = item.icon;
                
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className={`w-full group flex items-center justify-start p-3 rounded-xl 
                               transition-all duration-200 text-sm font-medium
                               ${isActive 
                                 ? `bg-gradient-to-r from-${item.color}-50 to-${item.color}-100 
                                    text-${item.color}-700 border border-${item.color}-200
                                    dark:from-${item.color}-900/20 dark:to-${item.color}-800/20 
                                    dark:text-${item.color}-300 dark:border-${item.color}-700` 
                                 : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                               } 
                               ${isCollapsed ? 'justify-center px-2' : 'justify-start px-3'}
                               active:scale-95`}>
                      
                      <div className="flex items-center">
                        <IconComponent 
                          className={`w-5 h-5 transition-colors duration-200 
                                   ${isActive ? `text-${item.color}-600 dark:text-${item.color}-400` : 'text-gray-500 dark:text-gray-400'}
                                   ${isCollapsed ? '' : 'mr-3'}`} 
                        />
                        
                        {!isCollapsed && (
                          <span className="truncate">{item.label}</span>
                        )}
                      </div>
                      
                      {!isCollapsed && item.badge && (
                        <span className={`ml-auto inline-flex items-center justify-center px-2 py-1 text-xs font-bold rounded-full
                                       ${item.badge.type === 'warning' 
                                         ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300' 
                                         : 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300'}`}>
                          {item.badge.count}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* Quick Actions */}
        <div className={`${isCollapsed ? 'text-center' : ''}`}>
          {!isCollapsed && (
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
              Quick Actions
            </h3>
          )}
          
          <ul className="space-y-1">
            {quickActions.map((item) => {
              const IconComponent = item.icon;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className={`w-full group flex items-center p-3 rounded-xl 
                             transition-all duration-200 text-sm font-medium
                             text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800
                             ${isCollapsed ? 'justify-center px-2' : 'justify-start px-3'}
                             active:scale-95`}>
                    
                    <IconComponent 
                      className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-colors duration-200
                               ${isCollapsed ? '' : 'mr-3'}`} 
                    />
                    
                    {!isCollapsed && (
                      <span className="truncate">{item.label}</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Settings Section */}
        <div className={`pt-4 border-t border-gray-200 dark:border-gray-700 ${isCollapsed ? 'text-center' : ''}`}>
          {!isCollapsed && (
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
              System
            </h3>
          )}
          
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => handleNavigation('/admin/settings')}
                className={`w-full group flex items-center p-3 rounded-xl 
                         transition-all duration-200 text-sm font-medium
                         text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800
                         ${isCollapsed ? 'justify-center px-2' : 'justify-start px-3'}
                         active:scale-95`}>
                
                <CogIcon 
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-colors duration-200
                           ${isCollapsed ? '' : 'mr-3'}`} 
                />
                
                {!isCollapsed && (
                  <span className="truncate">Settings</span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Sidebar Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700 
                    bg-white/95 backdrop-blur-md dark:bg-gray-900/95">
        {!isCollapsed ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">A</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  Administrator
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  admin@matrimony.com
                </p>
              </div>
            </div>
            <button
              onClick={() => handleNavigation('/admin/logout')}
              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg 
                       dark:hover:bg-red-900/20 transition-all duration-200"
              title="Sign out">
              <ArrowRightOnRectangleIcon className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <button
              onClick={() => handleNavigation('/admin/logout')}
              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg 
                       dark:hover:bg-red-900/20 transition-all duration-200"
              title="Sign out">
              <ArrowRightOnRectangleIcon className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default SideBar;
