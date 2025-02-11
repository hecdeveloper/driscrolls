import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // ENGLISH
        }
      },
      es: {
        translation: {
          // SPANISH
        }
      }
    },
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;