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
          <button className="bg-[#6cdcf3] w-[150px] h-[35px] text-sm sm:w-[200px] sm:h-[40px] sm:text-base lg:w-[250px] lg:h-[50px] lg:text-lg text-white font-bold whitespace-nowrap">
            NUESTROS PRODUCTOS
          </button>
          <button
            onClick={() => window.open("https://wa.me/3413708391", "_blank")}
            className="bg-[#25D366] w-[180px] sm:w-[200px] h-[40px] sm:h-[50px] text-white font-bold"
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
          className="w-full h-full object-cover"
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
          }}
        />
      </div>
    </>
  );
};

export default Dashboard;
