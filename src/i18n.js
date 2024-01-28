import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HTTPApi from 'i18next-http-backend'

import en_EN from './locales/en/translation.json'
import pl_PL from './locales/pl/translation.json'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HTTPApi)
  .init({
    fallbackLng: 'en',
    interpolation: {escapeValue: false},
    resources: {
      en: {
        translation: en_EN,
      },
      pl: {
        translation: pl_PL,
      },
    },
  })

export default i18n
