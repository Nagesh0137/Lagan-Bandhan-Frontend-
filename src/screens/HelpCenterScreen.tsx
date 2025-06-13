import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/common/Footer';
import { 
  HiSupport, 
  HiPhone, 
  HiMail, 
  HiChat, 
  HiDocumentText, 
  HiLightBulb,
  HiQuestionMarkCircle,
  HiBookOpen,
  HiVideoCamera,
  HiDownload,
  HiSearch,
  HiClock,
  HiCheckCircle,
  HiExclamationCircle
} from 'react-icons/hi';

const HelpCenterScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const helpCategories = [
    {
      icon: <HiBookOpen className="w-8 h-8" />,
      title: 'Getting Started',
      description: 'Learn the basics of using Lagan Bandhan',
      articles: [
        'How to create your first profile',
        'Setting up your preferences',
        'Uploading photos and documents',
        'Understanding profile verification'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <HiSupport className="w-8 h-8" />,
      title: 'Account Management',
      description: 'Manage your account settings and preferences',
      articles: [
        'Updating your profile information',
        'Privacy and security settings',
        'Managing notifications',
        'Deactivating or deleting account'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <HiChat className="w-8 h-8" />,
      title: 'Communication & Matching',
      description: 'How to connect and communicate with matches',
      articles: [
        'Understanding the matching algorithm',
        'Sending messages and expressing interest',
        'Video calling and chat features',
        'Managing your match preferences'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <HiDocumentText className="w-8 h-8" />,
      title: 'Membership & Billing',
      description: 'Information about plans and payments',
      articles: [
        'Choosing the right membership plan',
        'Payment methods and billing',
        'Upgrading or downgrading plans',
        'Understanding refund policies'
      ],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: <HiLightBulb className="w-8 h-8" />,
      title: 'Tips & Best Practices',
      description: 'Expert advice for matrimony success',
      articles: [
        'Creating an attractive profile',
        'Writing compelling messages',
        'Safety tips for online dating',
        'Preparing for first meetings'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <HiExclamationCircle className="w-8 h-8" />,
      title: 'Troubleshooting',
      description: 'Solutions to common technical issues',
      articles: [
        'Login and password issues',
        'Photo upload problems',
        'App performance issues',
        'Browser compatibility'
      ],
      color: 'from-red-500 to-red-600'
    }
  ];

  const quickActions = [
    {
      icon: <HiQuestionMarkCircle className="w-6 h-6" />,
      title: 'FAQ',
      description: 'Most common questions answered',
      link: '/faq',
      color: 'bg-blue-500'
    },
    {
      icon: <HiChat className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Chat with our support team',
      link: '#',
      color: 'bg-green-500'
    },
    {
      icon: <HiPhone className="w-6 h-6" />,
      title: 'Call Support',
      description: 'Talk to our experts',
      link: 'tel:+911234567890',
      color: 'bg-purple-500'
    },
    {
      icon: <HiMail className="w-6 h-6" />,
      title: 'Email Support',
      description: 'Send us your queries',
      link: 'mailto:support@laganbandhan.com',
      color: 'bg-pink-500'
    }
  ];

  const supportTiers = [
    {
      title: 'Basic Support',
      subtitle: 'For Free Members',
      features: [
        'Email support (48-72 hours response)',
        'FAQ and Help articles',
        'Community forums access',
        'Basic troubleshooting guides'
      ],
      icon: <HiSupport className="w-8 h-8" />,
      color: 'border-gray-300'
    },
    {
      title: 'Priority Support',
      subtitle: 'For Premium Members',
      features: [
        'Priority email support (24 hours response)',
        'Live chat support',
        'Phone support during business hours',
        'Personalized profile assistance'
      ],
      icon: <HiCheckCircle className="w-8 h-8" />,
      color: 'border-pink-400',
      popular: true
    },
    {
      title: 'VIP Support',
      subtitle: 'For Elite Members',
      features: [
        'Dedicated relationship manager',
        '24/7 phone and chat support',
        'Video consultation sessions',
        'Priority feature requests'
      ],
      icon: <HiVideoCamera className="w-8 h-8" />,
      color: 'border-purple-400'
    }
  ];

  return (
    <>
      <Header isUserFullyOnboarded={false} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-indigo-100 dark:bg-indigo-800 rounded-full">
              <HiSupport className="w-12 h-12 text-indigo-600 dark:text-indigo-300" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-Onest">
            Help Center
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 font-Onest">
            Find answers, get support, and learn how to make the most of your Lagan Bandhan experience
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <HiSearch className="h-6 w-6 text-gray-400" />
              </div>
              <input
                type="search"
                placeholder="Search for help articles, guides, or FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 text-lg font-Onest text-gray-900 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <a
              key={index}
              href={action.link}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className={`${action.color} p-3 rounded-xl text-white mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                {action.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 font-Onest">
                {action.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm font-Onest">
                {action.description}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Help Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-Onest">
            Browse Help Topics
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-Onest">
            Find detailed guides and tutorials for every aspect of your matrimony journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helpCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center mb-3">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold ml-3 font-Onest">
                    {category.title}
                  </h3>
                </div>
                <p className="text-white/90 font-Onest">
                  {category.description}
                </p>
              </div>

              {/* Articles */}
              <div className="p-6">
                <ul className="space-y-3">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 font-Onest hover:underline"
                      >
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a
                    href="#"
                    className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline font-Onest"
                  >
                    View All Articles →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support Tiers */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-Onest">
              Support Levels
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-Onest">
              Different levels of support based on your membership
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 ${tier.color} overflow-hidden ${
                  tier.popular ? 'transform scale-105' : ''
                } hover:shadow-xl transition-all duration-300`}
              >
                {tier.popular && (
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-2 font-semibold font-Onest">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-3 rounded-full ${tier.popular ? 'bg-pink-100 text-pink-600' : 'bg-gray-100 text-gray-600'}`}>
                      {tier.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2 font-Onest">
                    {tier.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-6 font-Onest">
                    {tier.subtitle}
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <HiCheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 font-Onest">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <HiClock className="w-12 h-12 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-Onest">
              24/7 Support Available
            </h2>
            <p className="text-xl text-indigo-100 mb-8 font-Onest">
              Our dedicated support team is always here to help you. Reach out anytime!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-Onest"
              >
                <HiMail className="w-5 h-5 mr-2" />
                Contact Support
              </a>
              <a
                href="tel:+911234567890"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105 font-Onest"
              >
                <HiPhone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HelpCenterScreen;
