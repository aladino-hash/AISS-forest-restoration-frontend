import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          title: "Global Forest Overview",
          subtitle: "Worldwide tree cover loss trends and deforestation statistics",
          map: "World Map"
        }
      },
      es: {
        translation: {
          title: "Resumen Forestal Global",
          subtitle: "Tendencias mundiales de pérdida de cobertura arbórea",
          map: "Mapa Mundial"
        }
      },
      pt: {
        translation: {
          title: "Visão Global das Florestas",
          subtitle: "Tendências globais de perda de cobertura florestal",
          map: "Mapa Mundial"
        }
      }
    },

    lng: "en", // default language
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;