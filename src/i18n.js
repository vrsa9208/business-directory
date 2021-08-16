import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translation_en from "./i18n/translation_en.json";
import translation_es from "./i18n/translation_en.json"; // TODO: Change by translation_es.json file

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translation_en,
      },
      es: {
        translation: translation_es,
      },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
