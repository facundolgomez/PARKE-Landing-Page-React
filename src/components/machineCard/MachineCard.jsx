import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubMachineButton from "../subMachineButton/SubMachineButton";

const MachineCard = ({ machine, data }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleSubMachineClick = (subMachine) => {
    navigate(`/machines/${machine}/${subMachine}`);
  };

  return (
    <div
      className="relative w-full overflow-hidden transition duration-300 ease-in-out transform rounded-md h-72 hover:scale-105 hover:shadow-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagen de fondo */}
      <img
        src="/img/imagen1.jpg"
        alt={machine}
        className={`absolute object-cover w-full rounded-md h-72 brightness-50 transition-all duration-500 ${
          hovered ? "blur-md" : "blur-0"
        }`}
      />

      {/* Nombre de la máquina solo cuando no se hace hover */}
      {!hovered && (
        <div className="absolute z-30 p-4 text-2xl font-bold text-white">
          {machine}
        </div>
      )}

      {/* Subtipos de máquinas al hacer hover */}
      {hovered && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-all duration-500">
          {Object.keys(data)
            .filter(
              (key) =>
                key !== "titles" && key !== "title" && key !== "characteristics"
            )
            .map((subMachine, index) => (
              <SubMachineButton
                key={index}
                subMachine={subMachine}
                onClick={() => handleSubMachineClick(subMachine)}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default MachineCard;
