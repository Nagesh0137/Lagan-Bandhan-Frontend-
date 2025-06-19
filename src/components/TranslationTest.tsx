import React from 'react';
import { useTranslation } from 'react-i18next';
import ChangeLanguage from './common/ChangeLanguage/ChangeLanguage';

const TranslationTest: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Translation Test</h1>
          <ChangeLanguage />
        </div>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="font-semibold text-blue-800 mb-2">Current Language:</h2>
            <p className="text-blue-600">{i18n.language}</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h2 className="font-semibold text-green-800 mb-2">Welcome Message:</h2>
            <p className="text-green-600">{t('welocome')}</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h2 className="font-semibold text-purple-800 mb-2">Personal Info Title:</h2>
            <p className="text-purple-600">{t('userDetails.personalInfo.title')}</p>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h2 className="font-semibold text-orange-800 mb-2">First Name Field:</h2>
            <p className="text-orange-600">{t('userDetails.personalInfo.fields.firstName')}</p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <h2 className="font-semibold text-red-800 mb-2">Gender Field:</h2>
            <p className="text-red-600">{t('userDetails.personalInfo.fields.gender')}</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="font-semibold text-gray-800 mb-2">Debug Info:</h2>
            <div className="text-sm text-gray-600 space-y-1">
              <p>i18n ready: {i18n.isInitialized ? 'Yes' : 'No'}</p>
              <p>Available languages: {i18n.languages.join(', ')}</p>
              <p>Resource loaded: {i18n.hasResourceBundle(i18n.language, 'translation') ? 'Yes' : 'No'}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
          <h3 className="font-semibold text-yellow-800 mb-2">Quick Language Test:</h3>
          <div className="flex gap-2">
            <button 
              onClick={() => i18n.changeLanguage('en')}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              English
            </button>
            <button 
              onClick={() => i18n.changeLanguage('hi')}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Hindi
            </button>
            <button 
              onClick={() => i18n.changeLanguage('mr')}
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              Marathi
            </button>
          </div>
        </div>      </div>
    </div>
  );
};

export default TranslationTest;
