import { useState } from "react";
import SubSectorButton from "../subSectorButton/SubSectorButton";

const SectorCard = ({ sector, image }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-blue-300 text-center w-full relative h-72 flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Contenedor de la imagen */}
      <img
        src={image}
        alt={sector}
        className={`object-cover w-full h-72 brightness-50 transition-all duration-500 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      />

      <div className="absolute text-white text-2xl font-bold">{sector}</div>

      {hovered && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-blue-500 bg-opacity-80 p-4 transition-all duration-500 delay-500">
          <SubSectorButton sector={sector} />
        </div>
      )}
    </div>
  );
};

export default SectorCard;
