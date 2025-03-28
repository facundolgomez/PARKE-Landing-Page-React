import { useState } from "react";
import SubSectorButton from "../subSectorButton/SubSectorButton";

const SectorCard = ({ sector, image }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative h-72 w-full overflow-hidden transition transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagen de fondo */}
      <img
        src={image}
        alt={sector}
        className={`absolute object-cover w-full h-72 brightness-50 transition-all duration-500 ${
          hovered ? "blur-md" : "blur-0"
        }`}
      />

      {/* Nombre del sector (visible solo si no hay hover) */}
      {!hovered && (
        <div className="absolute text-white text-2xl font-bold z-30 p-4">
          {sector}
        </div>
      )}

      {/* Botón de subsectores al hacer hover */}
      {hovered && (
        <div className="absolute inset-0 flex items-center justify-center p-4 transition-all duration-500">
          <SubSectorButton sector={sector} />
        </div>
      )}
    </div>
  );
};

export default SectorCard;
