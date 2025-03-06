import { useParams } from "react-router-dom";
import UpScreen from "../upscreen/UpScreen";
import { solutionsByMachineType } from "../data/solutionsByMachineType/SolutionsByMachineType";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Navigation } from "swiper/modules";

const SolutionsByMachineTypePage = () => {
  const { machine, type } = useParams();

  const [swiperInstance, setSwiperInstance] = useState(null);

  // Verificamos si los datos existen

  const machineData = solutionsByMachineType[machine]?.[type];

  if (!machineData) {
    return (
      <h1 className="text-center text-red-600 text-xl">
        No se encontró información
      </h1>
    );
  }
  console.log("MachineData:", machineData);
  console.log("Entries de MachineData:", Object.entries(machineData));

  return (
    <>
      {/* Título */}
      <div>
        <h1 className="p-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 tracking-wide text-center relative pb-2">
          {type} Machines
          <span className="absolute left-0 bottom-0 w-full h-1 bg-sky-600 rounded"></span>
        </h1>
      </div>

      {/* Sección superior */}
      <UpScreen
        pathImage={"/img/imagen1.jpg"}
        title="Choose your Machine Model"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      {/* Carrusel centrado y flechas manuales */}
      <div className="flex justify-center p-6">
        <div className="relative max-w-7xl w-full">
          {/* Flechas de navegación manuales - arriba del carrusel */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 py-3 z-10 transform -translate-y-1/2">
            <button
              className="swiper-button-prev bg-sky-600 text-white p-4 rounded-full shadow-lg transform hover:bg-sky-700 transition duration-300"
              style={{ left: "-60px" }} // Alejamos más la flecha de la izquierda
            >
              &lt;
            </button>
            <button
              className="swiper-button-next bg-sky-600 text-white p-4 rounded-full shadow-lg transform hover:bg-sky-700 transition duration-300"
              style={{ right: "-60px" }} // Alejamos más la flecha de la derecha
            >
              &gt;
            </button>
          </div>

          {/* Swiper con 4 columnas */}
          <Swiper
            onSwiper={setSwiperInstance}
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={4}
            loop={true}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="relative"
          >
            {Object.entries(machineData)
              .filter(([key]) => key !== "titles") // 🔹 Ignora la entrada "titles"
              .map(([key, machine], index) => (
                <SwiperSlide
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
                >
                  {/* Contenedor de imagen con centrado */}
                  <div className="relative flex justify-center">
                    <img
                      src={machine.image}
                      alt={machine.title}
                      className="w-full h-80 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-gray-800">
                    {machine.title}
                  </h2>
                  <p className="mt-2 text-md text-gray-600">
                    {machine.description}
                  </p>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SolutionsByMachineTypePage;
