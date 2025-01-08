import { useState, useEffect } from "react";
import Video from "../video/Video";

const Dashboard = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [indice, setIndice] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('right');

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
  });  // -------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> QUIZAS NECESITE BORRAR EL ARREGLO DE DEPENDENCIA

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
    setDirection('left'); // El nuevo texto se desliza desde la izquierda
    setIndice((prevIndice) => (prevIndice + 1) % textos.length);  
  };  

  const prevText = () => { 
    setAnimating(true);
    setDirection('right'); // El nuevo texto se desliza desde la derecha
    setIndice((prevIndice) => (prevIndice - 1 + textos.length) % textos.length);  
  };

  // ------------------------------------------------------------------------------------------------


  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <>
      <div className="dashboard-container relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-screen">  
    {/* Imagen de fondo para pantallas de teléfono */}  
    <div className="absolute inset-0 block sm:hidden bg-cover bg-center brightness-50"   
         style={{ backgroundImage: `url('../../../public/imagenes-de-fondo/imagen-dashboard-telefono.jpg')` }}> {/* Cambia la ruta de la imagen */}  
    </div>  
    
    {/* Video para pantallas grandes */}  
    <div className="absolute inset-0 hidden sm:block">  
        <Video className="w-full h-full object-cover" />
    </div>  

    <div className="flex flex-col">

        <div className="absolute top-[35%] sm:top-[30%] lg:top-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
        <button id="left-button" onClick={prevText} className="bg-gray-100 bg-opacity-30 ms-5 border-hidden transform transition-transform duration-300 hover:scale-125 hover:bg-opacity-70">  
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

        <h1 className={`absolute top-[35%] sm:top-[30%] lg:top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs sm:text-sm md:text-lg lg:text-4xl xl:text-5xl z-10 font-medium flex flex-col items-center space-y-1 text-center transition-transform duration-300 
                  ${  
                    animating ? 
                      direction === 'left' ? 
                        '-translate-x-full transition-transform duration-300 opacity-0' : 
                        'translate-x-full transition-transform duration-300 opacity-0' : '-translate-x-1/2 -translate-y-1/2 transition-transform duration-300 opacity-100'
                    }`}>  
            {textos[indice]}  
        </h1>

        <div className="absolute top-[35%] sm:top-[30%] lg:top-[50%] left-full transform -translate-x-1/2 -translate-y-1/2 z-10">
          <button id="right-button" onClick={nextText} className="bg-gray-100 bg-opacity-40 me-5 border-hidden transform transition-transform duration-300 hover:scale-125 hover:bg-opacity-70">
            <svg  
              xmlns="http://www.w3.org/2000/svg"  
              className="h-6 w-6 inline-block"  
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
