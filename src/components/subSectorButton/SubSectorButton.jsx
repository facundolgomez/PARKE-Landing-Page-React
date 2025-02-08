import { useNavigate } from "react-router-dom";
import { solutionsBySectors } from "../data/solutionsBySector/SolutionsBySector";

const SubSectorButton = ({ sector }) => {
  const formattedSector = sector.replace(/\s+/g, "").toLowerCase();

  const navigate = useNavigate();

  const subSectors = solutionsBySectors[formattedSector] || [];

  return (
    <div className="flex flex-col gap-2">
      {subSectors.length > 0 ? (
        subSectors.map((sub, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-white text-blue-700 font-bold rounded shadow-md hover:bg-gray-200 transition"
            onClick={() => navigate(`/subsector/${sub.toLowerCase()}`)} // Aquí va la navegación
          >
            {sub}
          </button>
        ))
      ) : (
        <p className="text-white">No hay subsectores disponibles</p>
      )}
    </div>
  );
};

export default SubSectorButton;
