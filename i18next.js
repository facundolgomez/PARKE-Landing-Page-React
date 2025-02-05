import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
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
              solutionsBySectorButton: "Solutions by sector",
              solutionsByMachineTypeButton: "Solutions by machine type",
              typeOfSolution: {
                solutionsByIndustry: {
                  title: "Solutions by sector",
                  items: ["Agriculture", "Balanced Feed", "Mining and Chemicals"],
                },
                solutionsByMachineType: {
                  title: "Solutions by machine type",
                  items: ["Bagging Machines", "Palletizers", "Stretch Wrappers", "Weighing Equipment"],
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
            fixedButton: {
              text: "Do you have any questions? Contact us.",
              modal: {
                title: "¡Contact us!",
                subtitle: "Choose a means of contact.",
                contactFormButton: "Contact form",
                whatsappButton: "Whatsapp",
              },
            },
          },
          company: {
            companyInfo: {
              title: "THE COMPANY",
              activityTitle: "OUR ACTIVITY",
              objectivesTitle: "OUR OBJECTIVE",
              activityItems: [
                "Develop, manufacture, and commission machines for bagging, palletizing, wrapping, transport, and accessories.",
                "Commission and provide technical support for all weighing equipment as requested, in addition to standard equipment production.",
                "Develop, manufacture, and commission special designs based on customer needs, differentiating ourselves and providing specific market solutions.",
                "Meet all customer needs while continuously improving our production processes.",
              ],
              objectivesParagraphs: [
                "Our commitment is to be fully engaged with the needs of our customers regarding technology requirements for load control, unloading, automatic weighing processes, automatic bagging, special weighing systems, palletizing, wrapping, and transport of bags and pallets, as well as complementary processes requiring specialized machinery. To this end, PARKE has trained technical personnel responsible for advising and resolving various situations so that customers benefit from over 20 years of market experience, installing the most suitable equipment and meeting assigned objectives in the shortest possible time.",
                "PARKE designs, develops, and manufactures all the equipment it offers in its industrial plant and sources pneumatic, hydraulic, actuator, PLC, and PC components from top brands or those suggested by the customer. This is done under quality standards required not only for the local market but also for the international market.",
              ],
              contactSection: {
                title: "If you have any questions...",
                text: "We are available for you! Click the button and fill out the contact form.",
                button: "CONTACT US",
              },
            },
          },
          contact: {
            title: "Contact",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            letsTalk: "Let's Talk",
            contactUs: "Contact Us!",
            availabilityText:
              "We are available to answer all your questions, inquiries, or issues that contribute to providing you with better technical and professional advice.",
            formInstructions: "Please fill out the form with your inquiry.",
            responseTime: "We will contact you shortly.",
            locationTitle: "Our Location",
            location: "Route AO12 Km 47.6 Roldán, Santa Fe, Argentina",
            phoneTitle: "Phone",
            phone: "+54 3416456481",
            emailTitle: "Email",
            email: "info@parke.com.ar",
            form: [
              "Full Name",
              "Company",
              "Phone",
              "Email",
              "Subject",
              "Message",
              "Please validate the captcha to send your inquiry.",
              "Send Inquiry",
            ],
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
              solutionsBySectorButton: "Soluciones por sectores",
              solutionsByMachineTypeButton: "Soluciones por tipo de máquina",
              typeOfSolution: {
                solutionsBySectors: {
                  title: "Soluciones por sectores",
                  items: ["Agricultura", "Alimentos balanceados", "Minería y Química"],
                },
                solutionsByMachineType: {
                  title: "Soluciones por tipo de máquina",
                  items: ["Embolsadoras", "Paletizadoras", "Envolvedoras ", "Equipos de pesaje"],
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
            fixedButton: {
              text: "¿Tiene consultas? Contactenos",
              modal: {
                title: "¡Contáctanos!",
                subtitle: "Elija un medio de contacto.",
                contactFormButton: "Formulario de contacto",
                whatsappButton: "Whatsapp",
              },
            },
          },
          company: {
            companyInfo: {
              title: "LA EMPRESA",
              activityTitle: "NUESTRA ACTIVIDAD",
              objectivesTitle: "NUESTRO OBJETIVO",
              activityItems: [
                "Desarrollar, fabricar y poner en servicio, máquinas para embolsado, paletizado, envoltura, transporte y accesorios.",
                "Poner en servicio y prestar atención técnica de todos los equipos de pesaje que se nos soliciten, además de una producción de equipamiento estándar.",
                "Desarrollar, fabricar y poner en servicio, diseños especiales conforme a la necesidad del cliente, diferenciándonos y aportando así, soluciones específicas al mercado.",
                "Satisfacer todas las necesidades de cada uno de nuestros clientes, como así también sostener la continua mejora de nuestros procesos productivos.",
              ],
              objectivesParagraphs: [
                "Es nuestro compromiso, estar absolutamente compenetrados de las necesidades de nuestros clientes en cuanto al requerimiento de tecnología para control de cargas, descargas, procesos de pesaje automático, embolsado automático, sistemas de pesaje especiales, paletizado, envoltura y transporte de bolsas y palets, y procesos complementarios a éstos que necesiten maquinaria adecuada de desarrollo especial. Para tales cuestiones, PARKE ha capacitado al personal técnico encargado de asesorar y resolver situaciones de las más variadas, para que el cliente sea beneficiado con la experiencia adquirida a través de más de 20 años en el mercado, instalando el equipamiento más adecuado y cumpliendo con el objetivo asignado en el menor tiempo posible.",
                "PARKE diseña, desarrolla y produce en su planta industrial todos los equipamientos que ofrece, y se provee de elementos de neumática, hidráulica, actuadores, PLC’s, PC’s, de primera marca o marcas sugeridas por nuestro cliente interesado en el producto, todo ello bajo normas de calidad exigidas no solo para el mercado local sino también para el internacional.",
              ],
              contactSection: {
                title: "Ante cualquier duda o consulta...",
                text: "¡Estamos disponibles para usted! Presione el botón y rellene el formulario de contacto.",
                button: "CONTÁCTANOS",
              },
            },
          },
          contact: {
            title: "Contacto",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            letsTalk: "Hablemos",
            contactUs: "¡Póngase en contacto con nostros!",
            availabilityText:
              "Estamos disponibles para responder todas tus preguntas, consultas o problemas que contribuyan a brindarte una mejor asesoría técnica y profesional.",
            formInstructions:
              "Por favor, complete el formulario con tu consulta.",
            responseTime: "Nos pondremos en contacto contigo en breve.",
            locationTitle: "Nuestra Ubicación",
            location: "Ruta AO12 Km 47.6 Roldán, Santa Fe, Argentina",
            phoneTitle: "Teléfono",
            phone: "+54 3416456481",
            emailTitle: "Correo Electrónico",
            email: "info@parke.com.ar",
            form: [
              "Nombre Completo",
              "Empresa",
              "Teléfono",
              "Correo Electrónico",
              "Asunto",
              "Mensaje",
              "Por favor, valida el captcha para enviar tu consulta.",
              "Enviar Consulta",
            ],
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
              solutionsBySectorButton: "Soluções por setor",
              solutionsByMachineTypeButton: "Soluções por tipo de máquina",
              typeOfSolution: {
                solutionsByIndustry: {
                  title: "Soluções por setores",
                  items: ["Agricultura", "Alimentos balanceados", "Mineração e Química"],
                },
                solutionsByMachineType: {
                  title: "Soluções por tipo de máquina",
                  items: ["Embaladoras", "Paletizadoras", "Envolvendedoras", "Equipamentos de pesagem"],
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
            fixedButton: {
              text: "Tem dúvidas? Entre em contato conosco.",
              modal: {
                title: "Entre em contato!",
                subtitle: "Escolha um meio de contato.",
                contactFormButton: "Formulário de contato",
                whatsappButton: "Whatsapp",
              },
            },
          },
          company: {
            companyInfo: {
              title: "A EMPRESA",
              activityTitle: "NOSSA ATIVIDADE",
              objectivesTitle: "NOSSO OBJETIVO",
              activityItems: [
                "Desenvolver, fabricar e colocar em serviço máquinas para ensacamento, paletização, embalagem, transporte e acessórios.",
                "Colocar em serviço e prestar atendimento técnico para todos os equipamentos de pesagem solicitados, além da produção de equipamentos padrão.",
                "Desenvolver, fabricar e colocar em serviço projetos especiais de acordo com as necessidades do cliente, diferenciando-nos e oferecendo soluções específicas para o mercado.",
                "Atender a todas as necessidades de nossos clientes e manter a melhoria contínua de nossos processos produtivos.",
              ],
              objectivesParagraphs: [
                "Nosso compromisso é estar totalmente envolvidos com as necessidades de nossos clientes em relação à tecnologia para controle de cargas, descargas, processos de pesagem automática, ensacamento automático, sistemas de pesagem especiais, paletização, embalagem e transporte de sacos e paletes, bem como processos complementares que requerem máquinas especializadas. Para isso, a PARKE capacitou pessoal técnico responsável por aconselhar e resolver as mais diversas situações, para que o cliente se beneficie da experiência adquirida ao longo de mais de 20 anos no mercado, instalando os equipamentos mais adequados e cumprindo os objetivos no menor tempo possível.",
                "A PARKE projeta, desenvolve e fabrica em sua planta industrial todos os equipamentos que oferece e adquire componentes pneumáticos, hidráulicos, atuadores, PLCs e PCs de marcas líderes ou conforme a sugestão do cliente. Tudo isso sob normas de qualidade exigidas não apenas para o mercado local, mas também para o internacional.",
              ],
              contactSection: {
                title: "Se tiver dúvidas...",
                text: "Estamos disponíveis para você! Clique no botão e preencha o formulário de contato.",
                button: "CONTATE-NOS",
              },
            },
          },
          contact: {
            title: "Contato",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            letsTalk: "Vamos Conversar",
            contactUs: "Entre em Contato!",
            availabilityText:
              "Estamos disponíveis para responder todas as suas perguntas, consultas ou problemas que contribuam para fornecer um melhor aconselhamento técnico e profissional.",
            formInstructions:
              "Por favor, preencha o formulário com sua consulta.",
            responseTime: "Entraremos em contato com você em breve.",
            locationTitle: "Nossa Localização",
            location: "Rota AO12 Km 47.6 Roldán, Santa Fe, Argentina",
            phoneTitle: "Telefone",
            phone: "+54 3416456481",
            emailTitle: "E-mail",
            email: "info@parke.com.ar",
            form: [
              "Nome Completo",
              "Empresa",
              "Telefone",
              "E-mail",
              "Assunto",
              "Mensagem",
              "Por favor, valide o captcha para enviar sua consulta.",
              "Enviar Consulta",
            ],
          },
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
