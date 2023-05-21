import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, ru } from './locales';

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

i18n.on('languageChanged', () => {
  document.title = i18n.t('documentTitle');
  document.documentElement.lang = i18n.language;
});
i18n
  .use(initReactI18next)
  // .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    // detection: {
    //   order: ['localStorage', 'navigator', 'htmlTag'],
    //   lookupLocalStorage: 'i18nextLng',
    //   caches: ['localStorage'],
    // },
  });

export default i18n;
