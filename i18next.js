//ARCHIVO PARA LA CONFIGURACIÓN DE IDIOMAS
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Configuración con React
  .init({
    resources: {
      en: {
        translation: {
          home: {
            homeHeader: {
              solutions: "SOLUTIONS",
              news: "NEWS",
              company: "COMPANY",
              contact: "CONTACT",
              services: "SERVICES",
              quote: "GET A FREE QUOTE",
            },
            homeCarousel: {
              text1:
                "SOLUTIONS FOR BAGGING, PALLETIZING, WRAPPING, AND TRANSPORT",
              text2: "ALL THE EXPERIENCE AT THE SERVICE OF OUR CLIENTS",
              text3:
                "DEVELOPMENT OF SPECIAL SOLUTIONS BASED ON SPECIFIC REQUIREMENTS",
              ourProductsButton: "OUR PRODUCTS",
              whatsappButton: "WHATSAPP",
            },
            customSolutions: {
              customSolutionsText: "Custom solutions",
              subtitleOfCustomSolutionsText:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, dignissimos cum? Si",
              freeQuoteButton: "GET A FREE QUOTE",
              typeOfSolution: {
                solutionsByIndustry: {
                  title: "Solutions by Industry",
                  items: [
                    "Industry 1",
                    "Industry 2",
                    "Industry 3",
                    "Industry 4",
                  ],
                },
                solutionsByMachineType: {
                  title: "Solutions by machine type",
                  items: ["Machine 1", "Machine 2", "Machine 3", "Machine 4"],
                },
              },
              textAboutSomeOfOurClients: "SOME OF OUR CLIENTS",
            },
            footer: {
              titles: {
                moreAboutUs: "More about us",
                contact: "Contact",
              },
              sections: {
                moreAboutUs: ["The company", "News"],
                contact: {
                  address: "Route AO12 Km 47.6, Roldán | Santa Fe | Argentina",
                  phone: "+54 3416456481",
                  email: "info@parke.com.ar",
                  hours: "Monday to Friday, 8:00 AM to 5:00 PM",
                },
              },
              copyright: {
                text: "All rights reserved.",
                website: "https://parke.com/",
              },
              developer: {
                text: "Developed by FGA Software",
              },
            },
            fixedButton: "Do you have any questions? Contact us.",
          },
        },
      },
      es: {
        translation: {
          home: {
            homeHeader: {
              solutions: "SOLUCIONES",
              news: "NOTICIAS",
              company: "LA EMPRESA",
              contact: "CONTACTO",
              services: "SERVICIOS",
              quote: "COTIZÁ GRATIS",
            },
            homeCarousel: {
              text1:
                "SOLUCIONES PARA EMBOLSADO, PALETIZADO, ENVOLTURA y TRANSPORTE",
              text2: "TODA LA EXPERIENCIA AL SERVICIO DE NUESTROS CLIENTES",
              text3:
                "DESARROLLO DE SOLUCIONES ESPECIALES SOBRE REQUERIMIENTOS ESPECÍFICOS",
              ourProductsButton: "NUESTROS PRODUCTOS",
              whatsappButton: "WHATSAPP",
            },
            customSolutions: {
              customSolutionsText: "Soluciones a medida",
              subtitleOfCustomSolutionsText:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, dignissimos cum? Si",
              freeQuoteButton: "COTIZÁ GRATIS",
              typeOfSolution: {
                solutionsByIndustry: {
                  title: "Soluciones por industria",
                  items: [
                    "Industria 1",
                    "Industria 2",
                    "Industria 3",
                    "Industria 4",
                  ],
                },
                solutionsByMachineType: {
                  title: "Soluciones por tipo de máquina",
                  items: ["Máquina 1", "Máquina 2", "Máquina 3", "Máquina 4"],
                },
              },
              textAboutSomeOfOurClients: "ALGUNOS DE NUESTROS CLIENTES",
            },
            footer: {
              titles: {
                moreAboutUs: "Más sobre nosotros",
                contact: "Contacto",
              },
              sections: {
                moreAboutUs: ["La empresa", "Noticias"],
                contact: {
                  address: "Ruta AO12 Km 47.6, Roldán | Santa Fe | Argentina",
                  phone: "+54 3416456481",
                  email: "info@parke.com.ar",
                  hours: "Lunes a Viernes, 8:00 AM to 5:00 PM",
                },
              },
              copyright: {
                text: "Todos los derechos reservados.",
                website: "https://parke.com/",
              },
              developer: {
                text: "Desarrollado por FGA Software",
              },
            },
            fixedButton: "¿Tiene consultas? Contactenos",
          },
        },
      },
      pt: {
        translation: {
          home: {
            homeHeader: {
              solutions: "SOLUÇÕES",
              news: "NOTÍCIAS",
              company: "EMPRESA",
              contact: "CONTATO",
              services: "SERVIÇOS",
              quote: "ORÇAMENTO GRATUITO",
            },
            homeCarousel: {
              text1:
                "SOLUÇÕES PARA EMBALAGEM, PALETIZAÇÃO, EMBALAGEM E TRANSPORTE",
              text2: "TODA A EXPERIÊNCIA A SERVIÇO DOS NOSSOS CLIENTES",
              text3:
                "DESENVOLVIMENTO DE SOLUÇÕES ESPECIAIS COM BASE EM REQUISITOS ESPECÍFICOS",
              ourProductsButton: "NOSSOS PRODUTOS",
              whatsappButton: "WHATSAPP",
            },
            customSolutions: {
              customSolutionsText: "Soluções sob medida",
              subtitleOfCustomSolutionsText:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, dignissimos cum? Si",
              freeQuoteButton: "ORÇAMENTO GRATUITO",
              typeOfSolution: {
                solutionsByIndustry: {
                  title: "Soluções por indústria",
                  items: [
                    "Indústria 1",
                    "Indústria 2",
                    "Indústria 3",
                    "Indústria 4",
                  ],
                },
                solutionsByMachineType: {
                  title: "Soluções por tipo de máquina",
                  items: ["Máquina 1", "Máquina 2", "Máquina 3", "Máquina 4"],
                },
              },
              textAboutSomeOfOurClients: "ALGUNS DOS NOSSOS CLIENTES",
            },
            footer: {
              titles: {
                moreAboutUs: "Mais sobre nós",
                contact: "Contato",
              },
              sections: {
                moreAboutUs: ["A empresa", "Notícias"],
                contact: {
                  address: "Rota AO12 Km 47.6, Roldán | Santa Fe | Argentina",
                  phone: "+54 3416456481",
                  email: "info@parke.com.ar",
                  hours: "Segunda a sexta, 8:00 às 17:00",
                },
              },
              copyright: {
                text: "Todos os direitos reservados.",
                website: "https://parke.com/",
              },
              developer: {
                text: "Desenvolvido por FGA Software",
              },
            },
            fixedButton: "Tem dúvidas? Entre em contato conosco.",
          },
        },
      },
    },
    fallbackLng: "en", // Idioma por defecto si no encuentra otro
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
