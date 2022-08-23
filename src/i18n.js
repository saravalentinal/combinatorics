import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';


i18n
  .use(Backend)

  .use(LanguageDetector)

  .use(initReactI18next)

  .use(HttpApi)

  .init({
/*     transSupportBasicHtmlNodes: true, */
    supportedLngs: ['en', 'es'],
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['path', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales//{{lng}}/translation.json'
    }
  });

                              
export default i18n;