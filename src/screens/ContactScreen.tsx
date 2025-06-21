import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/common/Footer';
import { suport } from '../config/constant';
import MarqueeSider from '../components/common/MarqueeSider';

const ContactScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    message: '',
    subject: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      gender: '',
      message: '',
      subject: ''
    });
  };

  return (
    <>
      <Header isUserFullyOnboarded={true} />
      {/* <MarqueeSider /> */}
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900 py-20">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 font-Onest">
              Connect with Jeevan Sobati
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-Onest">
              Your journey to finding the perfect life partner starts here. We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white to-pink-50 dark:from-gray-800 dark:to-purple-900 rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 font-Onest">
                  Start Your Matrimony Journey
                </h2>
                <p className="text-gray-600 dark:text-gray-300 font-Onest">
                  Fill out the form below and our matrimony experts will get in touch with you to help find your perfect match.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-Onest">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 font-Onest"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-Onest">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 font-Onest"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-Onest">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 font-Onest"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-Onest">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 font-Onest"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-Onest">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 font-Onest"
                  >
                    <option value="">Select a topic</option>
                    <option value="profile-creation">Profile Creation Help</option>
                    <option value="membership-plans">Membership Plans</option>
                    <option value="match-preferences">Match Preferences</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-Onest">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 font-Onest resize-none"
                    placeholder="Tell us how we can help you find your perfect match..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 font-Onest text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 font-Onest">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white font-Onest">Email Address</h4>
                      <p className="text-gray-600 dark:text-gray-300 font-Onest">{suport.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white font-Onest">Phone Number</h4>
                      <p className="text-gray-600 dark:text-gray-300 font-Onest">{suport.mobile}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white font-Onest">Office Address</h4>
                      <p className="text-gray-600 dark:text-gray-300 font-Onest">Mumbai, Maharashtra, India</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white font-Onest">Office Hours</h4>
                      <p className="text-gray-600 dark:text-gray-300 font-Onest">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Section */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 font-Onest">
                  Our Services
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-Onest">Male & Female Profile Creation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-Onest">Advanced Match Finding</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-Onest">Verified Profiles</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-Onest">Privacy Protection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-Onest">24/7 Customer Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-Onest">Wedding Planning Assistance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Gallery */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50 dark:from-gray-800 dark:to-purple-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 font-Onest">
              Happy Couples Gallery
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-Onest">
              Celebrating the beautiful unions we've helped create
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Happy Couple 1"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold font-Onest">Raj & Priya</h3>
                    <p className="text-sm font-Onest">Married 2024</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Happy Couple 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold font-Onest">Amit & Sneha</h3>
                    <p className="text-sm font-Onest">Married 2024</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-square">
                <img
                  src="https://media.istockphoto.com/id/635831548/photo/kanyadaan-ritual-in-a-maharashtrian-wedding-in-india.jpg?s=2048x2048&w=is&k=20&c=_noGYUve9qP0W2zUuiRy92e38Oj6MLD_R0S5WgXKlII="
                  alt="Traditional Wedding"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold font-Onest">Traditional Ceremony</h3>
                    <p className="text-sm font-Onest">Sacred Rituals</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Happy Couple 3"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold font-Onest">Vikash & Anita</h3>
                    <p className="text-sm font-Onest">Married 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default ContactScreen;
