"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from "./locales/en.json";
import hiJson from "./locales/hi.json";
import mrJson from "./locales/mr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: enJson,
    hi: hiJson,
    mr: mrJson,
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
