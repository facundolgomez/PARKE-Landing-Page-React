import { useState, useEffect } from "react";
import Video from "../video/Video";
import ClientCarousel from "../clientCarousel/ClientCarousel";

const Dashboard = () => {
  const [indice, setIndice] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("right");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const textos = [
    "SOLUCIONES PARA EMBOLSADO, PALETIZADO, ENVOLTURA y TRANSPORTE",
    "TODA LA EXPERIENCIA AL SERVICIO DE NUESTROS CLIENTES",
    "DESARROLLO DE SOLUCIONES ESPECIALES SOBRE REQUERIMIENTOS ESPECÍFICOS",
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

  // ------------------------------------------------------------------------------------------------

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
            NUESTROS PRODUCTOS
          </button>
          <button
            onClick={() => window.open("https://wa.me/3413708391", "_blank")}
            className="bg-[#1fb154] w-[120px] sm:w-[120px] md:w-[250px] lg:w-[300px] border-hidden text-xs sm:text-xs lg:text-sm h-[45px] text-white font-bold transform transition-transform duration-300 hover:scale-110 hover:bg-[#27dd6a]"
          >
            WHATSAPP
          </button>
        </div>
      </div>
      <div className="flex h-100 bg-gradient-to-t from-sky-300 to-sky-600">
        <div className="flex-1 ml-2 p-4 sm:p-6 lg:p-8">
          <h1 className="text-center font-bold mb-4 text-xl sm:text-lg lg:text-xl text-white">
            Soluciones por industria
          </h1>
          <ul className="text-center space-y-5 font-extrabold text-lg sm:text-2xl lg:text-2xl">
            <li className="text-black flex items-center justify-center">
              <button className="mb-2 block w-full rounded bg-sky-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong ">
                INDUSTRIA 1
              </button>
            </li>
            <li className="text-black flex items-center justify-center">
              <button className="mb-2 block w-full rounded bg-sky-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                INDUSTRIA 2
              </button>
            </li>
            <li className="text-black flex items-center justify-center">
              <button className="mb-2 block w-full rounded bg-sky-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                INDUSTRIA 3
              </button>
            </li>
            <li className="text-black flex items-center justify-center">
              <button className="mb-2 block w-full rounded bg-sky-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                INDUSTRIA 4
              </button>
            </li>
          </ul>
        </div>

        <div className="h-96 w-0.5 bg-gradient-to-t from-sky-500 to-white rounded-full opacity-50"></div>
        <div className="flex-1 bg-gradient-to-t  from-sky-300 to-sky-600 p-4 sm:p-6 lg:p-8">
          <h1 className="text-center font-bold mb-4 text-xl sm:text-lg lg:text-xl text-white">
            Soluciones por tipo de máquina
          </h1>
          <ul className="text-center space-y-5 font-extrabold text-lg sm:text-2xl lg:text-2xl">
            <li className="text-black flex items-center justify-center">
              <button className="mb-2 block w-full rounded bg-sky-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                MAQUINA 1
              </button>
            </li>
            <li className="text-black flex items-center justify-center">
              <button className="mb-2 block w-full rounded bg-sky-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                MAQUINA 2
              </button>
            </li>
            <li className="text-black flex items-center justify-center">
              <button className="mb-2 block w-full rounded bg-sky-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                MAQUINA 3
              </button>
            </li>
            <li className="text-black flex items-center justify-center">
              <button className="mb-2 block w-full rounded bg-sky-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                MAQUINA 4
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-32 w-full bg-gradient-to-t  from-white to-sky-300 ">
        <div className="flex flex-row justify-around items-center">
          <div className="flex flex-col">
            <h1 className=" text-slate-800 text-2xl md:text-4xl font-bold mt-0 md:mt-3 ml-2 ">
              {" "}
              Soluciones a medida
            </h1>
            <p className="text-slate-700 ml-2">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis, dignissimos cum? Si
            </p>
          </div>
          <button className=" bg-white text-sky-600 rounded-full py-2 px-4 mt-0 md:mt-10 scale-75 md:scale-125 ">
            COTIZÁ GRATIS
          </button>
        </div>
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
      </div>
      
      <div>
        <ClientCarousel/>
      </div>
    </>
  );
};

export default Dashboard;
