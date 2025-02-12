import { useState } from "react";
import SubMachineButton from "../subMachineButton/SubMachineButton";
import MachineModal from "../modals/MachineModal";

const MachineCard = ({ machine, data }) => {
  const [hovered, setHovered] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null); // Para manejar categorías como "embolsadorasDeBolsas"
  const [selectedSubCategory, setSelectedSubCategory] = useState(null); // Para manejar subcategorías como "bocaAbierta", "valvuladas", etc.
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState(null); // Para manejar sub-subcategorías (por ejemplo, "4 bolsas x minuto")

  const handleSubMachineClick = (subMachine) => {
    const nextLevel = data[subMachine];

    if (!nextLevel) return;

    if (Array.isArray(nextLevel)) {
      // Si es un array (como en cosedoras y selladoras), mostramos las máquinas directamente
      setModalData({ title: subMachine, values: nextLevel });
    } else if (typeof nextLevel === "object") {
      // Si es un objeto (como en embolsadorasDeBolsas), seguimos a las subcategorías
      setSelectedCategory(subMachine);
      setSelectedSubCategory(null); // Limpiamos la subcategoría
      setSelectedSubSubCategory(null);
    }
  };

  const handleSubCategoryClick = (subCategory) => {
    const nextLevel = data[selectedCategory]?.[subCategory];
    console.log("nextLevel", nextLevel);
    if (Array.isArray(nextLevel)) {
      // Si es un array, mostramos las máquinas directamente en el modal
      setModalData({ title: subCategory, values: nextLevel });
      setSelectedSubSubCategory(null);
    } else if (typeof nextLevel === "object") {
      // Si es un objeto, seguimos recursivamente
      setSelectedSubCategory(subCategory);
      setSelectedSubSubCategory(null);
    }
  };

  const handleSubSubCategoryClick = (subSubCategory) => {
    const nextLevel =
      data[selectedCategory]?.[selectedSubCategory]?.[subSubCategory];
    console.log("nextLevel", nextLevel);

    if (Array.isArray(nextLevel)) {
      setModalData({ title: subSubCategory, values: nextLevel });
      setSelectedSubSubCategory(subSubCategory);
    }
  };

  return (
    <div
      className="bg-blue-300 text-center w-full relative h-72 flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setSelectedCategory(null);
        setSelectedSubCategory(null);
        setSelectedSubSubCategory(null);
      }}
    >
      {/* Imagen de fondo */}
      <img
        src="/img/imagen1.jpg"
        alt={machine}
        className={`absolute object-cover w-full h-72 brightness-50 transition-all duration-500 ${
          hovered ? "blur-md" : "blur-0"
        }`}
      />

      {/* Nombre de la máquina */}
      {!hovered && (
        <div className="absolute text-white text-2xl font-bold z-10">
          {machine}
        </div>
      )}

      {/* Subtipos de máquinas al hacer hover */}
      {hovered && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-500 bg-opacity-90 p-4 transition-all duration-500 z-20">
          {!selectedCategory
            ? Object.keys(data).map((subMachine, index) => (
                <SubMachineButton
                  key={index}
                  subMachine={subMachine}
                  onClick={() => handleSubMachineClick(subMachine)}
                />
              ))
            : // Si hay una categoría seleccionada (como "embolsadorasDeBolsas")
              Object.keys(data[selectedCategory]).map((subCategory, index) => (
                <SubMachineButton
                  key={index}
                  subMachine={subCategory}
                  onClick={() => handleSubCategoryClick(subCategory)} // Seguimos recorriendo las subcategorías
                />
              ))}
        </div>
      )}

      {/* Sub-subcategorías (como "4 bolsas x minuto") */}
      {selectedSubCategory && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-600 bg-opacity-80 p-4 transition-all duration-500 z-20">
          {Object.keys(data[selectedCategory][selectedSubCategory] || {}).map(
            (subSubCategory, index) => (
              <SubMachineButton
                key={index}
                subMachine={subSubCategory}
                onClick={() => handleSubSubCategoryClick(subSubCategory)}
              />
            )
          )}
        </div>
      )}

      {/* Modal */}
      {modalData && (
        <MachineModal
          title={modalData.title}
          values={modalData.values}
          onClose={() => setModalData(null)}
        />
      )}
    </div>
  );
};

export default MachineCard;
