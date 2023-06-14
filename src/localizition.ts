import i18n, { i18n as i18nType } from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './constants/translations/en.json';
import rus from './constants/translations/rus.json';

const i18nInstance: i18nType = i18n.createInstance();

i18nInstance.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        rus: {
            translation: rus,
        },
    },
    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18nInstance;