import React from 'react';
import { useTranslation } from 'react-i18next';

export default function TestTranslation() {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
      <h2>Translation Test</h2>
      <p>Current Language: {i18n.language}</p>
      <p>Welcome Message: {t('welocome')}</p>
      <p>Personal Info Title: {t('userDetails.personalInfo.title')}</p>
      
      <h3>HomeScreen Translations:</h3>
      <p>Hero Title: {t('homeScreen.hero.findYourPerfect')} {t('homeScreen.hero.lifePartner')}</p>
      <p>Hero Description: {t('homeScreen.hero.description')}</p>
      <p>Search Placeholder: {t('homeScreen.hero.searchPlaceholder')}</p>
      <p>Search Button: {t('homeScreen.hero.searchButton')}</p>
      <p>Active Filters: {t('homeScreen.filters.activeFilters')}</p>
      <p>Discover Profiles: {t('homeScreen.results.discoverProfiles')}</p>
      <p>Trusted by Thousands: {t('homeScreen.statistics.trustedByThousands')}</p>
      
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => i18n.changeLanguage('en')} style={{ margin: '5px', padding: '10px' }}>English</button>
        <button onClick={() => i18n.changeLanguage('hi')} style={{ margin: '5px', padding: '10px' }}>Hindi</button>
        <button onClick={() => i18n.changeLanguage('mr')} style={{ margin: '5px', padding: '10px' }}>Marathi</button>
      </div>
    </div>
  );
}
