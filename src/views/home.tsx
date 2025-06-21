import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  EyeIcon,
  HeartIcon,
  ShieldCheckIcon,
  SwatchIcon,
  PlayIcon,
} from '@heroicons/react/20/solid';
import Footer from '../components/common/Footer';
import './home.css';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex min-h-screen items-center flex-col bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center flex-col relative overflow-hidden">
        <div className="flex-1 w-full flex relative items-center flex-col">
          {/* Background Video/Image */}
          <div className="w-full h-full flex overflow-hidden absolute items-center flex-col justify-center">
            <video
              src=""
              poster="https://whitethread.s3.ap-south-1.amazonaws.com/matrimony/bKlO2JL9SrCt2UTdTl5nSA.jpeg"
              className="w-full h-full object-cover scale-105 transition-transform duration-700"></video>
            <div className="top-0 left-0 right-0 bottom-0 w-full h-full m-auto flex absolute items-center flex-col bg-gradient-to-b from-black/50 via-black/60 to-black/70"></div>
          </div>

          {/* Content */}
          <div className="flex-1 w-full flex items-center flex-col relative z-10">
            {/* Header */}
            <header className="w-full flex relative items-center py-4 sm:py-8 px-4 sm:px-8 lg:px-20 justify-between">
              <img alt="logo" src="/Jeevan Sobati.png" style={{backgroundColor:'white', borderRadius:'8px', objectFit:'contain'}} className="h-12 sm:h-16 lg:h-20 transition-all duration-300 img-thumbnail" />
              <div className="hidden md:flex items-center space-x-6">
              {/* <button className="text-white/80 hover:text-white transition-colors duration-300 font-medium">About</button> */}
              {/* <button className="text-white/80 hover:text-white transition-colors duration-300 font-medium">Features</button> */}
              {/* <button className="text-white/80 hover:text-white transition-colors duration-300 font-medium">Contact</button> */}
              </div>
            </header>

            {/* Hero Content */}
            <div className="flex-1 w-full flex items-center justify-center px-4 sm:px-8 lg:px-20">
              <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
                <div className="space-y-4">
                  <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight font-Onest">
                    Your Journey to
                    <span className="block text-red-400 mt-2">Love Begins Here</span>
                  </h1>
                  <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-Onest">
                    Join our trusted matrimony platform to find your perfect match.
                    Experience love, compatibility, and lifelong happiness.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
                  <button
                    onClick={() => navigate('/auth')}
                    className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-8 sm:px-12 rounded-full font-Onest text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Start Your Journey
                  </button>
                  {/* <button className="w-full sm:w-auto flex items-center justify-center space-x-2 text-white border-2 border-white/30 hover:border-white/60 py-4 px-8 sm:px-12 rounded-full font-Onest text-lg transition-all duration-300 hover:bg-white/10">
                    <PlayIcon className="h-5 w-5" />
                    <span>Watch Demo</span>
                  </button> */}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 pt-8 border-t border-white/20">
                  {/* <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-Onest">50K+</div>
                    <div className="text-white/80 text-sm sm:text-base font-Onest">Happy Couples</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-Onest">1M+</div>
                    <div className="text-white/80 text-sm sm:text-base font-Onest">Verified Profiles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-Onest">95%</div>
                    <div className="text-white/80 text-sm sm:text-base font-Onest">Success Rate</div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full bg-gradient-to-r from-red-500 to-red-600 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-white/20 rounded-xl p-3">
                    <HeartIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl font-bold font-Onest">
                    Smart Matching
                  </h3>
                </div>
                <p className="text-white/90 text-base sm:text-lg font-Onest leading-relaxed">
                  Advanced AI-powered algorithm that analyzes compatibility factors to suggest the most suitable matches based on your preferences.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-white/20 rounded-xl p-3">
                    <ShieldCheckIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl font-bold font-Onest">
                    Verified Profiles
                  </h3>
                </div>
                <p className="text-white/90 text-base sm:text-lg font-Onest leading-relaxed">
                  Multi-step verification process ensures authentic profiles, creating a secure and trustworthy environment for genuine connections.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-white/20 rounded-xl p-3">
                    <SwatchIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl font-bold font-Onest">
                    Advanced Filters
                  </h3>
                </div>
                <p className="text-white/90 text-base sm:text-lg font-Onest leading-relaxed">
                  Comprehensive search options with detailed filters for age, profession, location, interests, and lifestyle preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="w-full py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Safety & Security */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 sm:mb-32">
            <div className="order-2 lg:order-1">
              <img
                alt="Safety and Security"
                src="https://images.unsplash.com/photo-1587271315307-eaebc181c749?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-block bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
                Safety First
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-Onest leading-tight">
                Safety & Security
              </h2>
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed font-Onest">
                Your safety is our top priority. We employ cutting-edge security measures,
                comprehensive profile verification, and continuous monitoring to ensure a
                secure and trustworthy environment for meaningful connections.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700 font-medium">24/7 Profile Monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700 font-medium">ID & Document Verification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700 font-medium">Privacy Protection</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-20 sm:mb-32">
            <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></div>
          </div>

          {/* Our Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                Our Purpose
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-Onest leading-tight">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed font-Onest">
                We're dedicated to creating genuine, lasting connections. Our mission is to
                help individuals find true love and companionship through innovative technology,
                personalized matching, and a commitment to authentic relationships.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-red-600 font-Onest">01+</div>
                  <div className="text-gray-600 text-sm font-medium">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-red-600 font-Onest">100+</div>
                  <div className="text-gray-600 text-sm font-medium">City</div>
                </div>
              </div>
            </div>
            <div>
              <img
                alt="Our Mission"
                src="https://images.unsplash.com/photo-1613665667184-81bb9b8605e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-red-500 to-red-600 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-Onest mb-6">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-white/90 text-lg sm:text-xl mb-8 font-Onest">
            Join thousands of happy couples who found love through our platform.
          </p>
          <button
            onClick={() => navigate('/auth')}
            className="bg-white text-red-600 font-bold py-4 px-8 sm:px-12 rounded-full font-Onest text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
