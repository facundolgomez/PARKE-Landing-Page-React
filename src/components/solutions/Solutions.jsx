import UpScreen from "../upscreen/UpScreen";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Solutions = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("sectores");

  const imgSectors = [
    { image: "/img/sector1.jpg" },
    { image: "/img/sector2.jpg" },
    { image: "/img/sector3.jpg" },
  ];
  const sectors = t(
    "home.customSolutions.typeOfSolution.solutionsBySectors.items",
    { returnObjects: true }
  );
  const machines = t(
    "home.customSolutions.typeOfSolution.solutionsByMachineType.items",
    { returnObjects: true }
  );

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <UpScreen
        pathImage={"../../../public/imagenes-de-fondo/imagen-novedades.jpg"}
        title={"Soluciones"}
        paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
      <div>
        {/* Botones */}
        <div className="w-full h-20 flex justify-center gap-1 mt-4">
          <button
            className={`h-12 w-80 sm:w-80 md:w-80 lg:w-96 text-lg sm:text-xl md:text-2xl lg:text-3xl p-1 ${
              activeTab === "sectores"
                ? "bg-sky-600 text-white"
                : "bg-white text-sky-600 border-sky-600"
            }`}
            onClick={() => handleClick("sectores")}
          >
            {t("home.customSolutions.solutionsBySectorButton")}
          </button>
          <button
            className={`h-12 w-80 sm:w-96 md:w-96 lg:w-96 text-lg sm:text-xl md:text-xl lg:text-2xl p-1 ${
              activeTab === "maquinas"
                ? "bg-sky-600 text-white"
                : "bg-white text-sky-600 border-sky-600"
            }`}
            onClick={() => handleClick("maquinas")}
          >
            {t("home.customSolutions.solutionsByMachineTypeButton")}
          </button>
        </div>

        {/* Condicionalmente renderiza los grids según el estado */}
        {activeTab === "sectores" ? (
          <div className="grid grid-cols-1 gap-2 h-auto p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-blue-300 text-center w-full relative"
              >
                <img
                  src={imgSectors[index].image}
                  alt={`Sector ${index + 1}`}
                  className="object-cover w-full h-72 brightness-50"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-white text-2xl font-bold">
                  {sector}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 h-auto p-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {machines.map((machine, index) => (
              <div
                key={index}
                className="bg-blue-300 text-center w-full relative"
              >
                <img
                  src="/img/imagen1.jpg"
                  alt=""
                  className="object-cover w-full h-72 brightness-50"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-white text-2xl font-bold">
                  {machine}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-full bg-gray-100 p-4 flex justify-center items-center h-30">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl">
          {/* Contenido de texto */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-slate-800 text-2xl md:text-4xl font-bold mb-2 md:mb-3">
              {t("home.customSolutions.customSolutionsText")}
            </h1>
            <p className="text-slate-700 text-sm md:text-base">
              {t("home.customSolutions.subtitleOfCustomSolutionsText")}
            </p>
          </div>

          {/* Botón */}
          <button className="mt-6 md:mt-0 bg-sky-600 text-white rounded-full py-2 px-6 text-sm md:text-base scale-100 md:scale-125 hover:bg-sky-500 transform transition-transform duration-300 hover:scale-110">
            {t("home.customSolutions.freeQuoteButton")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
