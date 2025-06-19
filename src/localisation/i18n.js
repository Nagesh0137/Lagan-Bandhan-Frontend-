"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from "./locales/en.json";
import hiJson from "./locales/hi.json";
import mrJson from "./locales/mr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enJson.translation
    },
    hi: {
      translation: hiJson.translation
    },
    mr: {
      translation: mrJson.translation
    }
  },
  lng: "en",
  fallbackLng: "en",
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
