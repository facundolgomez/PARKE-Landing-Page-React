import { useParams, useNavigate } from "react-router-dom";
import UpScreen from "../upscreen/UpScreen";
import { solutionsByMachineType } from "../data/solutionsByMachineType/SolutionsByMachineType";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SolutionsByMachineTypePage = () => {
  const { machine, type } = useParams();
  const [swiperInstance, setSwiperInstance] = useState(null);
  const navigate = useNavigate();

  const machineData = solutionsByMachineType[machine]?.[type];

  if (!machineData) {
    return (
      <h1 className="text-center text-red-600 text-xl mt-10">
        No se encontró información
      </h1>
    );
  }

  const truncateText = (text, limit = 100) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "[...]";
    }
    return text;
  };
  const handlerVerMasClick = (machineTitle) => {
    
    navigate(`/detalles/${machineTitle}`);
  };

  return (
    <>
      {/* Título */}
      <div className="px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 tracking-wide relative pb-2">
          {type} Machines
          <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-32 h-1 bg-sky-600 rounded"></span>
        </h1>
      </div>

      {/* Sección superior */}
      <UpScreen
        pathImage="/img/imagen1.jpg"
        title="Choose your Machine Model"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      {/* Características */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          {machineData.title}
        </h2>
        <ul className="list-disc list-inside text-gray-600 text-center sm:text-left">
          {machineData.characteristics?.map((char, index) => (
            <li key={index} className="mb-2">{char}</li>
          ))}
        </ul>
      </div>

      {/* Carrusel */}
      <div className="flex justify-center p-6">
        <div className="relative max-w-7xl w-full">
          <Swiper
            onSwiper={setSwiperInstance}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={15}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="relative"
          >
            {Object.entries(machineData)
              .filter(([key, item]) => key !== "title" && key !== "characteristics" && typeof item === "object" && item.image)
              .map(([key, machine], index) => (
                <SwiperSlide key={index} className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg h-[500px] mb-4"> {/* Definimos altura fija */}
                  <div className="relative w-full max-w-xs h-64"> {/* Se asegura que las imágenes sean del mismo tamaño */}
                    <img
                      src={machine.image}
                      alt={machine.title}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <h2 className="mt-4 text-lg sm:text-xl font-bold text-gray-800">{machine.title}</h2>
                  <p className="mt-2 text-sm sm:text-md text-gray-600 flex-grow">
                    {truncateText(machine.description, 100)} {/* Recorta el texto */}
                  </p>
                  <div className="mt-auto pt-2">
                    <button className="px-4 py-2 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 transition duration-300"
                    onClick={() => handlerVerMasClick(machine.title)} >
                      Ver más
                    </button>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SolutionsByMachineTypePage;
