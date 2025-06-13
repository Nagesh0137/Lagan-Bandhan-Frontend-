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
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
      <button onClick={() => i18n.changeLanguage('hi')}>Hindi</button>
      <button onClick={() => i18n.changeLanguage('mr')}>Marathi</button>
    </div>
  );
}
