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
<div>
  <img src="/img/imagen1.png" alt="Zoom Imagen" className="w-full" />
</div>
      


    
    </>
  );
};

export default Dashboard;
