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
          map: "World Map",

          onboarding: {
            label: "FYNOS AI Activation",
            title: "How would you like to participate?",
            description:
              "Choose your mission. We'll personalize the platform based on your goals.",
            missions: {
              intelligence: {
                title: "Explore Intelligence",
                description:
                  "Analyze forests, compare countries, simulate restoration strategies, and generate AI-powered insights."
              },
              restoreLand: {
                title: "Restore Land",
                description:
                  "Receive AI-assisted restoration plans, monitor your land, and connect with restoration experts through WhatsApp."
              },
              services: {
                title: "Offer Services",
                description:
                  "Join restoration projects, offer your expertise, and help bring agroforestry and restoration plans to life."
              }
            }
          }
        }
      },
      es: {
        translation: {
          title: "Resumen Forestal Global",
          subtitle: "Tendencias mundiales de pérdida de cobertura arbórea",
          map: "Mapa Mundial",

          onboarding: {
            label: "Activación FYNOS AI",
            title: "¿Cómo te gustaría participar?",
            description:
              "Elige tu misión. Personalizaremos la plataforma según tus objetivos."
          }
        }
      },
      pt: {
        translation: {
          title: "Visão Global das Florestas",
          subtitle: "Tendências globais de perda de cobertura florestal",
          map: "Mapa Mundial",

          onboarding: {
            label: "Ativação FYNOS AI",
            title: "Como você gostaria de participar?",
            description:
              "Escolha sua missão. Personalizaremos a plataforma de acordo com seus objetivos."
          }
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