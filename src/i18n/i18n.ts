import i18n from 'i18next';
import ICU from "i18next-icu";
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
    .use(ICU)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],

            // keys or params to lookup language from
            lookupCookie: 'i18next',
            lookupLocalStorage: 'i18nextLng',

            // cache user language on
            caches: ['localStorage', 'cookie'],
            excludeCacheFor: ['cimode'],

            cookieMinutes: 24*60,
            cookieOptions: { path: '/', sameSite: 'strict' }
        }
    });

export default i18n