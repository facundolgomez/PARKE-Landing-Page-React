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
      className="bg-blue-300 text-center w-full relative h-72 flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
          {Object.keys(data).map((subMachine, index) => (
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
