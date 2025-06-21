import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src={require('../../assets/Jeevan Sobati.png')}
                  className="h-16 w-auto"
                  alt="Jeevan Sobati Logo"
                />
              </Link>
              <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 font-Onest">
                Jeevan Sobati
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-Onest">
                Your trusted partner in finding the perfect life companion. We connect hearts and create beautiful relationships for a lifetime of happiness.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.148-1.297L17.17 3.823c.806.7 1.297 1.851 1.297 3.148 0 4.255-3.446 7.701-7.701 7.701l-.317.316z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white font-Onest">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/about" 
                    className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 font-Onest text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 font-Onest text-sm"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/success-stories" 
                    className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 font-Onest text-sm"
                  >
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/membership" 
                    className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 font-Onest text-sm"
                  >
                    Membership Plans
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 font-Onest text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Support */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white font-Onest">
                Legal & Support
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/privacy_policy" 
                    className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 font-Onest text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/terms" 
                    className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 font-Onest text-sm"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/refund_policy" 
                    className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 font-Onest text-sm"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/faq" 
                    className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 font-Onest text-sm"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/help" 
                    className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 font-Onest text-sm"
                  >
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white font-Onest">
                Stay Connected
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm font-Onest">
                Subscribe to our newsletter for matrimony tips, success stories, and special offers.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 font-Onest text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 font-Onest text-sm"
                >
                  Subscribe Now
                </button>
              </form>

              {/* Contact Info */}
              <div className="pt-4 space-y-2">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span className="text-sm font-Onest">support@jeevansobati.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span className="text-sm font-Onest">+91 1234567890</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-600 dark:text-gray-300 text-sm font-Onest">
                  © 2025 <span className="font-semibold text-pink-600 dark:text-pink-400">Jeevan Sobati</span>. All Rights Reserved.
                </p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-600 dark:text-gray-300 text-sm font-Onest">
                  Designed with ❤️ by{' '}
                  <a 
                    href="https://a2zithub.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 font-semibold transition-colors duration-300"
                  >
                    A2Z IT HUB
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
