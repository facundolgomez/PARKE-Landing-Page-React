import { useState } from "react";
import Video from "../video/Video";

const Dashboard = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <>
      <div className="dashboard-container relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-screen">
        <h1 className="absolute top-[25%] sm:top-[30%] lg:top-[50%] sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs sm:text-sm md:text-lg lg:text-4xl xl:text-5xl z-10 font-medium flex flex-col items-center space-y-1 text-center">
          <span>SOLUCIONES PARA EMBOLSADO,</span>
          <span>PALETIZADO, ENVOLTURA y TRANSPORTE</span>
        </h1>

        <div className="flex flex-col sm:flex-row justify-center items-center absolute top-[30%] sm:top-[40%] lg:top-[65%] w-full z-10 space-y-2 sm:space-y-0 sm:space-x-4">
          <button className="bg-sky-600 w-[80px] sm:w-[120px] md:w-[250px] lg:w-[300px] text-[5px] sm:text-xs lg:text-sm h-[20px] sm:h-[30px] lg:h-[45px] text-white font-bold">
            NUESTROS PRODUCTOS
          </button>
          <button
            onClick={() => window.open("https://wa.me/3413708391", "_blank")}
            className="bg-[#25D366] w-[80px] sm:w-[120px] md:w-[250px] lg:w-[300px] text-[5px] sm:text-xs lg:text-sm h-[20px] sm:h-[30px] lg:h-[45px] text-white font-bold"
          >
            WHATSAPP
          </button>
        </div>

        <Video className="w-full h-full object-cover" />
      </div>

      <div
        className="relative w-full h-[300px] sm:h-[500px] overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <img
          src="/img/imagen1.png"
          alt="Imagen con zoom estilo lupa"
          className="w-full h-auto object-cover"
        />
        <div
          className="absolute border-4 border-white rounded-full"
          style={{
            width: "300px", // Tamaño de la lupa
            height: "300px", // Tamaño de la lupa
            top: `calc(${position.y}% - 50px)`, // Centrar lupa verticalmente
            left: `calc(${position.x}% - 50px)`, // Centrar lupa horizontalmente
            backgroundImage: "url('/img/imagen1.png')", // Imagen dentro de la lupa
            backgroundSize: "300% 300%", // Tamaño de zoom de la imagen dentro de la lupa
            backgroundPosition: `${position.x}% ${position.y}%`, // Ubicación de la lupa
            pointerEvents: "none", // Evitar que el cursor interfiera con el movimiento
            "@media (max-width: 680px)": {
              width: "50px", // Reducir tamaño de la lupa en pantallas móviles
              height: "50px",
            },
          }}
        />
      </div>
      {/* Sección de "Soluciones" con lista */}
      <div className="py-8 px-4 sm:px-8 bg-gray-100">
        <h2 className="text-2xl sm:text-2xl text-center mb-6">SOLUCIONES</h2>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-6 items-center">
          {/* Industrias */}
          <div>
            <h3 className="text-xl font-bold text-center mb-4">Industrias</h3>
            <ul className="space-y-4">
              <li className="text-lg text-gray-700 flex items-center space-x-3">
                <i className="fas fa-check-circle text-blue-500 ml-36"></i>
                <span>Industria Alimentaria</span>
              </li>
              <li className="text-lg text-gray-700 flex items-center space-x-3">
                <i className="fas fa-check-circle text-blue-500 ml-36"></i>
                <span>Industria Farmacéutica</span>
              </li>
              <li className="text-lg text-gray-700 flex items-center space-x-3">
                <i className="fas fa-check-circle text-blue-500 ml-36"></i>
                <span>Industria Química</span>
              </li>
              <li className="text-lg text-gray-700 flex items-center space-x-3">
                <i className="fas fa-check-circle text-blue-500 ml-36"></i>
                <span>Industria Cosmética</span>
              </li>
            </ul>
          </div>

          {/* Separador */}
          <div className="bg-gray-300 w-[2px] h-full mx-auto sm:my-0"></div>

          {/* Máquinas */}
          <div>
            <h3 className="text-xl font-bold text-center mb-4">
              Tipo de Máquina
            </h3>
            <ul className="space-y-4">
              <li className="text-lg text-gray-700 flex items-center space-x-3 ml-36">
                <i className="fas fa"></i>
                <span>Máquinas de Embolsado</span>
              </li>
              <li className="text-lg text-gray-700 flex items-center space-x-3 ml-36">
                <i className="fas fa"></i>
                <span>Máquinas de Paletizado</span>
              </li>
              <li className="text-lg text-gray-700 flex items-center space-x-3 ml-36">
                <i className="fas fa"></i>
                <span>Máquinas de Envoltura</span>
              </li>
              <li className="text-lg text-gray-700 flex items-center space-x-3 ml-36">
                <i className="fas fa"></i>
                <span>Máquinas de Transporte</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative mt-8">
        <img
          src="/img/industria.webp"
          alt="Imagen de fondo"
          className="absolute inset-0 w-full h-full object-cover opacity-40" // Ajusta la opacidad aquí
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center"></div>
      </div>
    </>
  );
};

export default Dashboard;
