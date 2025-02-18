import { useState, useEffect } from "react";
import Video from "../video/Video";
import ClientCarousel from "../clientCarousel/ClientCarousel";
import { useTranslation } from "react-i18next";
import SectorCard from "../sectorCard/SectorCard";
import MachineCard from "../machineCard/MachineCard";
import { solutionsByMachineType } from "../data/solutionsByMachineType/SolutionsByMachineType";

const Dashboard = () => {
  const [indice, setIndice] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("right");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activePopup, setActivePopup] = useState(null);
  const [activeTab, setActiveTab] = useState("sectores");
  const { t } = useTranslation();
  const machineTypes = Object.keys(solutionsByMachineType);
  const textos = [
    t("home.homeCarousel.text1"),
    t("home.homeCarousel.text2"),
    t("home.homeCarousel.text3"),
  ];

  const imgSectors = [
    { image: "/img/sector1.jpg" },
    { image: "/img/sector2.jpg" },
    { image: "/img/sector3.jpg" },
    { image: "/img/sector5.jpg" },
    { image: "/img/sector4.jpg" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextText(); // Cambia automáticamente el texto
    }, 5000); // CAMBIA EL TEXTO CADA 5 SEGUNDOS

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }); // -------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> QUIZAS NECESITE BORRAR EL ARREGLO DE DEPENDENCIA

  useEffect(() => {
    // Detener la animación después de un breve tiempo
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 300); // Duración de la animación

    return () => clearTimeout(timer);
  }, [indice]);

  // ------------------------- BOTONES PARA AVANZAR Y RETROCEDER LOS TEXTOS -------------------------

  const nextText = () => {
    setAnimating(true);
    setDirection("left"); // El nuevo texto se desliza desde la izquierda
    setIndice((prevIndice) => (prevIndice + 1) % textos.length);
  };

  const prevText = () => {
    setAnimating(true);
    setDirection("right"); // El nuevo texto se desliza desde la derecha
    setIndice((prevIndice) => (prevIndice - 1 + textos.length) % textos.length);
  };
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  const togglePopup = (id) => {
    setActivePopup((prev) => (prev === id ? null : id));
  };
  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  // ------------------------------------------------------------------------------------------------
  const sectors = t(
    "home.customSolutions.typeOfSolution.solutionsBySectors.items",
    { returnObjects: true }
  );
  const machines = t(
    "home.customSolutions.typeOfSolution.solutionsByMachineType.items",
    { returnObjects: true }
  );
  return (
    <>
      <div className="dashboard-container relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-screen">
        {/* Imagen de fondo para pantallas de teléfono */}
        <div
          className="absolute inset-0 block sm:hidden bg-cover bg-center brightness-50"
          style={{
            backgroundImage: `url('../../../public/imagenes-de-fondo/imagen-dashboard-telefono.jpg')`,
          }}
        >
          {" "}
          {/* Cambia la ruta de la imagen */}
        </div>

        {/* Video para pantallas grandes */}
        <div className="absolute inset-0 hidden sm:block">
          <Video className="w-full h-full object-cover" />

          {/* Carrusel de textos */}
        </div>

        <div className="flex flex-col">
          <div className="absolute top-[35%] sm:top-[30%] lg:top-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
            <button
              id="left-button"
              onClick={prevText}
              className="bg-gray-100 scale-50 sm:scale-100 bg-opacity-30 ms-5 border-hidden transform transition-transform duration-300 hover:scale-125 hover:bg-opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block" // `mr-1` añade un margen a la derecha del icono
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>

          <h1
            className={`absolute top-[35%] sm:top-[30%] lg:top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs sm:text-sm md:text-lg lg:text-4xl xl:text-5xl z-10 font-medium flex flex-col items-center space-y-1 text-center transition-transform duration-300 
                  ${
                    animating
                      ? direction === "left"
                        ? "-translate-x-full transition-transform duration-300 opacity-0"
                        : "translate-x-full transition-transform duration-300 opacity-0"
                      : "-translate-x-1/2 -translate-y-1/2 transition-transform duration-300 opacity-100"
                  }`}
          >
            {textos[indice]}
          </h1>

          <div className="absolute top-[35%] sm:top-[30%] lg:top-[50%] left-full transform -translate-x-full -translate-y-1/2 z-10">
            <button
              id="right-button"
              onClick={nextText}
              className="bg-gray-100 scale-50 sm:scale-100 bg-opacity-40 border-hidden transform transition-transform duration-300 hover:scale-125 hover:bg-opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center absolute top-[45%] sm:top-[40%] lg:top-[65%] w-full z-10 space-y-2 sm:space-y-0 sm:space-x-8">
          <button className="bg-sky-600 w-[120px] sm:w-[120px] md:w-[250px] lg:w-[300px] border-hidden text-xs sm:text-xs lg:text-sm h-[45px] text-white font-bold transform transition-transform duration-300 hover:scale-110 hover:bg-sky-400">
            {t("home.homeCarousel.ourProductsButton")}
          </button>
          <button
            onClick={() => window.open("https://wa.me/3413708391", "_blank")}
            className="bg-[#1fb154] w-[120px] sm:w-[120px] md:w-[250px] lg:w-[300px] border-hidden text-xs sm:text-xs lg:text-sm h-[45px] text-white font-bold transform transition-transform duration-300 hover:scale-110 hover:bg-[#27dd6a]"
          >
            {t("home.homeCarousel.whatsappButton")}
          </button>
        </div>
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
      <div>
        {/* Botones */}
        <div className="w-full h-20 flex justify-center gap-1 mt-4">
          <button
            className={`h-12 w-80 sm:w-80 md:w-80 lg:w-96 text-sm sm:text-2x1 md:text-2x1 lg:text-2x1 p-2 ${
              activeTab === "sectores"
                ? "bg-sky-600 text-white"
                : "bg-white text-sky-600 border-sky-600"
            }`}
            onClick={() => handleClick("sectores")}
          >
            {t("home.customSolutions.solutionsBySectorButton")}
          </button>
          <button
            className={`h-12 w-80 sm:w-96 md:w-96 lg:w-96 text-sm sm:text-2x1 md:text-2x1 lg:text-2x1 p-2 ${
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
          <div className="grid grid-cols-1 gap-2 h-auto p-10 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5">
            {sectors.map((sector, index) => (
              <SectorCard
                key={index}
                sector={sector.toLowerCase()}
                image={imgSectors[index].image}
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-4 h-auto p-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {machineTypes.map((machineType, index) => {
              return (
                <MachineCard
                  key={index}
                  machine={machineType}
                  data={solutionsByMachineType[machineType]}
                />
              );
            })}
          </div>
        )}
      </div>

      <div
        className="relative w-full h-full overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Imagen desenfocada */}
        <img
          src="/img/imagen1.jpg"
          alt="Image Blur"
          className="w-full h-full object-cover md:filter md:blur-sm"
        />

        {/* Máscara del círculo */}
        <div
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, transparent, rgba(0, 0, 0, 0))`,
          }}
        ></div>

        {/* Imagen revelada */}
        <img
          src="/img/imagen1.jpg"
          alt="Image Revealed"
          className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
          style={{
            clipPath: `circle(150px at ${mousePosition.x}px ${mousePosition.y}px)`,
          }}
        />

        {/* Botón 1 */}
        <button
          onClick={() => togglePopup(1)}
          className="absolute bg-sky-600 text-white w-12 h-12 flex items-center justify-center animate-pulse rounded-full hover:scale-110"
          style={{
            top: "30%", // Ajusta la posición vertical
            left: "25%", // Ajusta la posición horizontal
          }}
        ></button>
        {activePopup === 1 && (
          <div
            className="absolute bg-white border border-gray-300 rounded-lg shadow-lg p-4"
            style={{
              top: "30%", // Mismo valor que el botón
              left: "30%", // Posición al lado del botón
            }}
          >
            <p>Ventana emergente</p>
            <button
              onClick={() => togglePopup(1)}
              className="mt-2 px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cerrar
            </button>
          </div>
        )}

        {/* Botón 2 */}
        <button
          onClick={() => togglePopup(2)}
          className="absolute bg-sky-600 text-white w-12 h-12 flex items-center justify-center animate-pulse rounded-full hover:scale-110"
          style={{
            top: "40%", // Ajusta la posición vertical
            left: "75%", // Ajusta la posición horizontal
          }}
        ></button>
        {activePopup === 2 && (
          <div
            className="absolute bg-white border border-gray-300 rounded-lg shadow-lg p-4"
            style={{
              top: "40%", // Mismo valor que el botón
              left: "80%", // Posición al lado del botón
            }}
          >
            <p>Ventana emergente</p>
            <button
              onClick={() => togglePopup(2)}
              className="mt-2 px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cerrar
            </button>
          </div>
        )}

        {/* Botón 3 */}
        <button
          onClick={() => togglePopup(3)}
          className="absolute bg-sky-600 text-white w-12 h-12 flex items-center justify-center animate-pulse rounded-full hover:scale-110"
          style={{
            top: "50%", // Ajusta la posición vertical
            left: "50%", // Ajusta la posición horizontal
          }}
        ></button>
        {activePopup === 3 && (
          <div
            className="absolute bg-white border border-gray-300 rounded-lg shadow-lg p-4"
            style={{
              top: "50%", // Mismo valor que el botón
              left: "55%", // Posición al lado del botón
            }}
          >
            <p>Ventana emergente</p>
            <button
              onClick={() => togglePopup(3)}
              className="mt-2 px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>

      <div>
        <ClientCarousel />
      </div>
    </>
  );
};

export default Dashboard;
