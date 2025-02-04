import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import UpScreen from "../upscreen/UpScreen";
import ClientCarousel from "../clientCarousel/ClientCarousel";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CompanyInfo = () => {

  const navigate = useNavigate()
  const { t } = useTranslation();

  const buttonContactHandler = () => {
    navigate("/contact");
  }

  return (
    <>
      <>
        <UpScreen
          pathImage={"../../../public/imagenes-de-fondo/imagen-la-empresa.jpg"}
          title={t("company.companyInfo.title")}
          paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
        <div className="flex justify-start bg-sky-600 h-auto my-2.5 flex-col items-center pt-4 pb-4 px-4 sm:px-8 relative">
          <div className="text-white text-4xl font-bold whitespace-nowrap">
            {t("company.companyInfo.activityTitle")}
          </div>
          <div className="h-1 bg-white w-full mt-4"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-x-16 mt-6 w-full max-w-6xl mx-auto">

            <button className="bg-sky-600 border-hidden cursor-default transform transition-transform duration-300 hover:shadow-lg hover:scale-110">
              <div className="flex items-center justify-start">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-white text-4xl mr-4"
                />
                <p className="text-white mt-2">
                  {t("company.companyInfo.activityItems.0")}
                </p>
              </div>
            </button>

            <button className="bg-sky-600 border-hidden transform transition-transform duration-300 hover:shadow-lg hover:scale-110">
              <div className="flex  items-center justify-end">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-white text-4xl mr-4"
                />
                <p className="text-white mt-2">
                {t("company.companyInfo.activityItems.1")}
                </p>
              </div>
            </button>

            <button className="bg-sky-600 border-hidden transform transition-transform duration-300 hover:shadow-lg hover:scale-110">
              <div className="flex  items-center justify-start">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-white text-4xl mr-4"
                />
                <p className="text-white mt-2">
                {t("company.companyInfo.activityItems.2")}
                </p>
              </div>
            </button>

            <button className="bg-sky-600 border-hidden transform transition-transform duration-300 hover:shadow-lg hover:scale-110">
              <div className="flex items-center"> {/* Flexbox para alinear icono y texto */}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-white text-4xl mr-4" // Margen a la derecha del icono
                />
                <p className="text-white mt-2 flex-1"> {/* flex-1 para que el texto ocupe el espacio restante */}
                {t("company.companyInfo.activityItems.3")}
                </p>
              </div>
            </button>

          </div>

        </div>


        <div className="px-6 py-20 sm:px-16 md:px-32 lg:px-48 xl:px-72 text-left">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
              {t("company.companyInfo.objectivesTitle")}
              <span className="block w-16 h-1 bg-sky-600 mt-1"></span>
            </h2>
            <p className="mt-4 text-justify text-gray-700 leading-relaxed">
              {t("company.companyInfo.objectivesParagraphs.0")}
            </p>
            <p className="mt-4 text-justify text-gray-700 leading-relaxed">
              {t("company.companyInfo.objectivesParagraphs.1")}
            </p>
          </div>

          <hr className="mt-16"/>

          <div className="mt-3">
            <ClientCarousel/>
          </div>
        </div>

        <div className="h-32 w-full bg-gradient-to-t  from-sky-900 to-sky-600 py-4">
        <div className="flex flex-row justify-around items-center">
          <div className="flex flex-col">
            <h1 className=" text-white text-2xl md:text-4xl font-bold mt-0 md:mt-3 ml-2 ">
              {" "}
              {t("company.companyInfo.contactSection.title")}
            </h1>
            <p className="text-white ml-2">
              {" "}
              {t("company.companyInfo.contactSection.text")}
            </p>
          </div>
          <button 
            className=" bg-white text-sky-600 rounded-full border-hidden py-2 px-4 mt-0 md:mt-10 scale-75 md:scale-125 transform transition-transform duration-300 hover:scale-150"
            onClick={buttonContactHandler}
          >
            {t("company.companyInfo.contactSection.button")}
          </button>
        </div>
      </div>
      </>
    </>
  );
};

export default CompanyInfo;
