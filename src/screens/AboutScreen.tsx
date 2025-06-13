import React from 'react';
import Header from '../components/Header';
import Footer from '../components/common/Footer';

function AboutScreen() {
  return (
    <>
      <Header isUserFullyOnboarded={true} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="lg:flex items-center justify-between gap-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold font-Onest mb-6 leading-tight">
                Welcome to
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 block"> Lagan Bandhan</span>
              </h1>
              <p className="text-gray-700 text-lg font-Onest mb-8 leading-relaxed">
                India's most trusted matrimonial platform where sacred bonds are formed. We bring together hearts and families to create beautiful relationships that last a lifetime.
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-md">
                <div className="bg-white rounded-xl px-4 py-3 shadow-lg border border-rose-100">
                  <span className="text-2xl font-bold text-rose-600 block">5M+</span>
                  <p className="text-sm text-gray-600">Happy Marriages</p>
                </div>
                <div className="bg-white rounded-xl px-4 py-3 shadow-lg border border-purple-100">
                  <span className="text-2xl font-bold text-purple-600 block">25M+</span>
                  <p className="text-sm text-gray-600">Trusted Profiles</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                  alt="Indian Wedding Couple"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl p-4 text-white shadow-lg">
                  <p className="font-bold text-sm">✨ Since 2010</p>
                  <p className="text-xs opacity-90">Trusted by Millions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold font-Onest mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">Sacred Mission</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              To unite souls and create eternal bonds through trust, tradition, and technology. We believe every heart deserves its perfect match.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-rose-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="text-2xl font-bold font-Onest mb-4 text-rose-700">Verified Profiles</h3>
              <p className="text-gray-600 leading-relaxed">Every profile is thoroughly verified to ensure authenticity and build trust in your matrimonial journey.</p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold font-Onest mb-4 text-purple-700">Privacy & Security</h3>
              <p className="text-gray-600 leading-relaxed">Advanced security measures protect your personal information while you search for your life partner.</p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold font-Onest mb-4 text-pink-700">Perfect Matching</h3>
              <p className="text-gray-600 leading-relaxed">AI-powered compatibility matching based on values, preferences, and family traditions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  className="rounded-2xl shadow-lg h-64 object-cover"
                  alt="Indian Wedding Ceremony"
                />
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
                  className="rounded-2xl shadow-lg h-64 object-cover mt-8"
                  alt="Happy Couple"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-5xl font-bold font-Onest mb-8">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">Lagan Bandhan?</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl font-Onest text-gray-800 mb-2">Cultural Diversity</h3>
                    <p className="text-gray-600 leading-relaxed">Connect across all communities, castes, and religions with respect for traditions and values.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl font-Onest text-gray-800 mb-2">Family Involvement</h3>
                    <p className="text-gray-600 leading-relaxed">Features designed for family participation in the sacred journey of finding the right match.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl font-Onest text-gray-800 mb-2">Success Stories</h3>
                    <p className="text-gray-600 leading-relaxed">Thousands of successful marriages and blessed families created through our platform.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-20 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold font-Onest mb-6 text-white">
              Our Blessed Journey
            </h2>
            <p className="text-rose-100 text-lg max-w-3xl mx-auto">
              Numbers that reflect our commitment to creating sacred bonds and blessed marriages.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-bold text-white mb-3">25M+</div>
              <p className="text-rose-100 text-lg">Registered Profiles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-bold text-white mb-3">5M+</div>
              <p className="text-rose-100 text-lg">Successful Marriages</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-bold text-white mb-3">500+</div>
              <p className="text-rose-100 text-lg">Communities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-bold text-white mb-3">14+</div>
              <p className="text-rose-100 text-lg">Years of Trust</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AboutScreen;
