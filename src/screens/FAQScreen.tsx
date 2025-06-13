import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/common/Footer';
import { HiPlus, HiMinus, HiQuestionMarkCircle, HiHeart, HiShieldCheck, HiSupport } from 'react-icons/hi';

interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const FAQScreen = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const faqData: FAQItem[] = [
    // Account & Registration
    {
      id: 1,
      category: 'Account & Registration',
      question: 'How do I create an account on Lagan Bandhan?',
      answer: 'Creating an account is simple! Click on the "Register" button, provide your basic information like name, email, mobile number, and create a password. You will receive an OTP for verification, and once verified, you can complete your profile with additional details.'
    },
    {
      id: 2,
      category: 'Account & Registration',
      question: 'What information do I need to provide during registration?',
      answer: 'You need to provide basic information including your full name, email address, mobile number, date of birth, gender, and marital status. Additional profile details like education, profession, family background, and preferences can be added later.'
    },
    {
      id: 3,
      category: 'Account & Registration',
      question: 'Is my personal information safe and secure?',
      answer: 'Yes, absolutely! We use industry-standard encryption and security measures to protect your personal information. Your data is stored securely and is never shared with third parties without your consent. Please refer to our Privacy Policy for detailed information.'
    },
    {
      id: 4,
      category: 'Account & Registration',
      question: 'Can I delete my account?',
      answer: 'Yes, you can delete your account at any time. Go to your profile settings and select "Delete Account". Please note that this action is permanent and cannot be undone. All your data will be permanently removed from our servers.'
    },

    // Profile & Matching
    {
      id: 5,
      category: 'Profile & Matching',
      question: 'How does the matching algorithm work?',
      answer: 'Our advanced matching algorithm considers multiple factors including age, location, education, profession, family background, interests, and your specified preferences. The system suggests profiles that have the highest compatibility based on these criteria.'
    },
    {
      id: 6,
      category: 'Profile & Matching',
      question: 'How can I make my profile more attractive?',
      answer: 'Complete your profile with accurate information, upload high-quality recent photos, write a compelling bio, specify your preferences clearly, and keep your profile updated. A complete profile with genuine photos gets 5x more responses!'
    },
    {
      id: 7,
      category: 'Profile & Matching',
      question: 'Why am I not getting matches?',
      answer: 'This could be due to very specific preferences, incomplete profile, or limited activity. Try broadening your search criteria, completing all profile sections, uploading clear photos, and staying active on the platform.'
    },
    {
      id: 8,
      category: 'Profile & Matching',
      question: 'Can I search for profiles outside my location?',
      answer: 'Yes! You can search for profiles across different cities, states, and even countries. Use our advanced search filters to specify your preferred location range and find matches based on your requirements.'
    },

    // Communication & Safety
    {
      id: 9,
      category: 'Communication & Safety',
      question: 'How can I communicate with other members?',
      answer: 'You can express interest by liking profiles, send personalized messages through our secure messaging system, and share contact information once mutual interest is established. Premium members get additional communication features.'
    },
    {
      id: 10,
      category: 'Communication & Safety',
      question: 'What should I do if I encounter fake profiles or inappropriate behavior?',
      answer: 'Report any suspicious profiles or inappropriate behavior immediately using the "Report" button on profiles or in conversations. Our moderation team reviews all reports within 24 hours and takes appropriate action.'
    },
    {
      id: 11,
      category: 'Communication & Safety',
      question: 'Are all profiles verified?',
      answer: 'We have a multi-step verification process including mobile number verification, email verification, and photo verification. However, we encourage users to exercise caution and verify important details before meeting in person.'
    },
    {
      id: 12,
      category: 'Communication & Safety',
      question: 'Is it safe to share personal contact information?',
      answer: 'We recommend getting to know someone through our platform first before sharing personal contact information. When you do decide to share details, ensure you feel comfortable and have established trust through conversations.'
    },

    // Membership & Payments
    {
      id: 13,
      category: 'Membership & Payments',
      question: 'What are the different membership plans available?',
      answer: 'We offer Free basic membership with limited features, Premium monthly/quarterly/yearly plans with enhanced features like unlimited messaging, advanced search filters, and priority support. Check our Membership Plans page for detailed features and pricing.'
    },
    {
      id: 14,
      category: 'Membership & Payments',
      question: 'How do I upgrade to a premium membership?',
      answer: 'Click on "Upgrade" in your account menu, choose your preferred plan, and proceed with secure payment via credit/debit card, UPI, or net banking. Your premium features will be activated immediately after successful payment.'
    },
    {
      id: 15,
      category: 'Membership & Payments',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit/debit cards (Visa, MasterCard, RuPay), UPI payments, net banking, and digital wallets. All payments are processed through secure payment gateways with 256-bit SSL encryption.'
    },
    {
      id: 16,
      category: 'Membership & Payments',
      question: 'Can I get a refund if I am not satisfied?',
      answer: 'All payments are non-refundable as per our Refund Policy. However, if you face technical issues or billing errors, please contact our support team, and we will resolve the matter promptly.'
    },

    // Technical Support
    {
      id: 17,
      category: 'Technical Support',
      question: 'I am having trouble logging into my account. What should I do?',
      answer: 'First, ensure you are using the correct mobile number and password. If you forgot your password, use "Forgot Password" to reset it. Clear your browser cache or try a different browser. If issues persist, contact our support team.'
    },
    {
      id: 18,
      category: 'Technical Support',
      question: 'Why are my photos not uploading?',
      answer: 'Ensure your photos are in JPG, PNG, or GIF format, under 5MB in size, and have good resolution. Check your internet connection and try uploading one photo at a time. If problems continue, try a different browser or device.'
    },
    {
      id: 19,
      category: 'Technical Support',
      question: 'The website is running slow. How can I fix this?',
      answer: 'Try clearing your browser cache and cookies, disable browser extensions temporarily, check your internet connection, or try accessing the site from a different browser or device. Contact support if the issue persists.'
    },
    {
      id: 20,
      category: 'Technical Support',
      question: 'Is there a mobile app available?',
      answer: 'Currently, we offer a fully responsive mobile-optimized website that works seamlessly on all devices. A dedicated mobile app is in development and will be available soon on both Android and iOS platforms.'
    },

    // Success Stories & General
    {
      id: 21,
      category: 'General',
      question: 'What makes Lagan Bandhan different from other matrimony sites?',
      answer: 'We focus on authentic profiles, advanced AI-powered matching, personalized support, strict verification processes, and a user-friendly experience. Our success rate of over 85% in successful marriages speaks for our commitment to helping you find your perfect life partner.'
    },
    {
      id: 22,
      category: 'General',
      question: 'How long does it typically take to find a match?',
      answer: 'This varies based on individual preferences, profile completeness, and activity level. On average, our active users with complete profiles find meaningful connections within 2-3 months. Premium members typically see faster results due to enhanced features.'
    },
    {
      id: 23,
      category: 'General',
      question: 'Do you provide personalized matchmaking services?',
      answer: 'Yes! Our premium members get access to dedicated relationship managers who provide personalized assistance, profile optimization tips, and curated match suggestions based on detailed preferences and requirements.'
    },
    {
      id: 24,
      category: 'General',
      question: 'Can I get help with writing my profile?',
      answer: 'Absolutely! Our customer support team can provide profile writing tips, and premium members get personalized profile optimization assistance. We also have comprehensive guides available in our Help Center.'
    }
  ];

  const categories = ['All', 'Account & Registration', 'Profile & Matching', 'Communication & Safety', 'Membership & Payments', 'Technical Support', 'General'];

  const filteredFAQs = selectedCategory === 'All' 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory);

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Account & Registration':
        return <HiShieldCheck className="w-5 h-5" />;
      case 'Profile & Matching':
        return <HiHeart className="w-5 h-5" />;
      case 'Communication & Safety':
        return <HiShieldCheck className="w-5 h-5" />;
      case 'Membership & Payments':
        return <HiSupport className="w-5 h-5" />;
      case 'Technical Support':
        return <HiSupport className="w-5 h-5" />;
      default:
        return <HiQuestionMarkCircle className="w-5 h-5" />;
    }
  };

  return (
    <>
      <Header isUserFullyOnboarded={false} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-pink-100 dark:bg-pink-800 rounded-full">
              <HiQuestionMarkCircle className="w-12 h-12 text-pink-600 dark:text-pink-300" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-Onest">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-Onest">
            Find answers to the most commonly asked questions about Lagan Bandhan. 
            If you can't find what you're looking for, feel free to contact our support team.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center font-Onest">
            Browse by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 font-Onest ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-pink-300 hover:text-pink-600 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredFAQs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Category Badge */}
              <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 border-b border-gray-100 dark:border-gray-600">
                {getCategoryIcon(faq.category)}
                <span className="text-sm font-medium text-pink-600 dark:text-pink-300 font-Onest">
                  {faq.category}
                </span>
              </div>

              {/* Question */}
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4 font-Onest">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openAccordion === faq.id ? (
                    <HiMinus className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  ) : (
                    <HiPlus className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  )}
                </div>
              </button>

              {/* Answer */}
              {openAccordion === faq.id && (
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-gray-100 dark:border-gray-600">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-Onest">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-Onest">
                Still Have Questions?
              </h2>
              <p className="text-xl text-pink-100 mb-8 font-Onest">
                Our friendly support team is here to help you 24/7. Don't hesitate to reach out!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-Onest"
                >
                  <HiSupport className="w-5 h-5 mr-2" />
                  Contact Support
                </a>
                <a
                  href="mailto:support@laganbandhan.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:scale-105 font-Onest"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FAQScreen;
