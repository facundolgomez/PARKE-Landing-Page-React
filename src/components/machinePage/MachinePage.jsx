import { useState } from "react";
import { useParams } from "react-router-dom";
import { solutionsByMachineType } from "../data/solutionsByMachineType/SolutionsByMachineType";

const MachinePage = () => {
  // Obtener los parámetros de la URL
  const { machineTitle } = useParams();
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("descripcion");

  const machineData = Object.values(solutionsByMachineType)
    .flatMap((types) => Object.values(types))
    .find((type) =>
      Object.values(type).some(
        (machine) =>
          machine.title &&
          machine.title.toLowerCase() ===
            decodeURIComponent(machineTitle).toLowerCase()
      )
    );

  const machine = machineData
    ? Object.values(machineData).find(
        (m) =>
          m.title &&
          m.title.toLowerCase() ===
            decodeURIComponent(machineTitle).toLowerCase()
      )
    : null;

  // Asegurarnos de que la máquina existe antes de continuar
  if (!machine) {
    return <h1>No se encontró la máquina</h1>;
  }

  // Listado de imágenes (de la data de la máquina)
  const images = machine.image
    ? Array.isArray(machine.image)
      ? machine.image
      : [machine.image]
    : [];

  console.log("Machine data:", machineData);
  console.log("Machine:", machine);
  console.log("Images:", images);

  // Función para abrir el modal
  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setImageModalOpen(true);
  };

  // Función para cerrar el modal
  const closeImageModal = () => setImageModalOpen(false);

  // Función para ir a la siguiente imagen
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para ir a la imagen anterior
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-8 pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Imagen de la máquina */}
        <div className="flex justify-center items-center">
          {images.length > 0 ? (
            <img
              src={images[0]} // Usa la primera imagen de la lista por defecto
              alt={machine.title}
              className="w-48 sm:w-64 md:w-80 lg:w-96 rounded-lg shadow-lg object-cover cursor-pointer"
              onClick={() => openImageModal(0)}
            />
          ) : (
            <p>No hay imagen disponible</p>
          )}
        </div>

        {/* Secciones dinámicas: Descripción / Características / Beneficios */}
        <div className="space-y-6 px-6">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-4 px-4 sm:px-6 ">
            <button
              onClick={() => setActiveTab("descripcion")}
              className={`w-full sm:w-auto px-4 py-2 rounded-lg text-sm font-semibold ${
                activeTab === "descripcion"
                  ? "bg-sky-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Descripción
            </button>
            <button
              onClick={() => setActiveTab("caracteristicas")}
              className={`w-full sm:w-auto px-4 py-2 rounded-lg text-sm font-semibold ${
                activeTab === "caracteristicas"
                  ? "bg-sky-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Características
            </button>
            <button
              onClick={() => setActiveTab("beneficios")}
              className={`w-full sm:w-auto px-4 py-2 rounded-lg text-sm font-semibold ${
                activeTab === "beneficios"
                  ? "bg-sky-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Beneficios
            </button>
          </div>

          {/* Contenido */}
          <div className="transition-all duration-300 space-y-4">
            {activeTab === "descripcion" && (
              <>
                <h1 className="text-3xl font-bold text-gray-800">
                  {machine.title}
                </h1>
                <p className="text-lg text-gray-600">{machine.description}</p>
              </>
            )}

            {activeTab === "caracteristicas" && (
              <>
                <h2 className="text-2xl font-semibold text-gray-700">
                  Características:
                </h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {machineData.characteristics?.map((char, index) => (
                    <li key={index} className="text-lg">
                      {char}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {activeTab === "beneficios" && (
              <>
                <h2 className="text-2xl font-semibold text-gray-700">
                  Beneficios:
                </h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {machineData.benefits?.map((benefit, index) => (
                    <li key={index} className="text-lg">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Botón de cotización */}
          <div className="mt-6">
            <button className="w-full sm:w-auto px-6 py-3 bg-sky-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-sky-700 transition duration-300">
              Solicitar Cotización
            </button>
          </div>
        </div>
      </div>

      {/* Modal para ver la imagen ampliada */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={images[currentImageIndex]}
              alt={machine.title}
              className="w-full h-auto rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-xl font-bold bg-sky-600 p-2 rounded-full hover:bg-sky-700"
              onClick={closeImageModal}
            >
              X
            </button>

            {/* Botones para navegar entre imágenes */}
            <div
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white font-bold bg-sky-600 p-2 rounded-full cursor-pointer hover:bg-sky-700"
              onClick={prevImage}
            >
              &lt;
            </div>
            <div
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white font-bold bg-sky-600 p-2 rounded-full cursor-pointer hover:bg-sky-700"
              onClick={nextImage}
            >
              &gt;
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MachinePage;
