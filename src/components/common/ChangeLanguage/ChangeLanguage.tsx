import { Dropdown } from 'flowbite-react';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function ChangeLanguage() {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  // Update current language when i18n language changes
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const handleLanguageChange = async (languageCode: string) => {
    try {
      await i18n.changeLanguage(languageCode);
      setCurrentLanguage(languageCode);
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  return (
    <div>
      <Dropdown
        arrowIcon={false}
        inline
        label={
          <div className="font-Onest border border-gray-300 border-s px-4 py-2 rounded-2xl text-xs flex flex-row gap-2">
            {currentLanguage.toUpperCase()}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-4">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        }>
        <Dropdown.Item
          onClick={() => {
            handleLanguageChange('en');
          }}
          className="font-Onest">
          English
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleLanguageChange('hi');
          }}
          className="font-Onest">
          Hindi
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            handleLanguageChange('mr');
          }}
          className="font-Onest">
          marathi
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}
