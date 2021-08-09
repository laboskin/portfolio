import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en';
import ruTranslation from './locales/ru';

const resources = {
    en: {
        translation: enTranslation
    },
    ru: {
        translation: ruTranslation
    }
}

i18n.on('languageChanged', () => {
    document.title = i18n.t('documentTitle');
    document.documentElement.lang = i18n.language;
});
i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            lookupLocalStorage: 'i18nextLng',
            caches: ['localStorage'],
        }
    });

export default i18n