import { solutionsBySectors } from "../data/solutionsBySector/SolutionsBySector";
const SubSectorButton = ({ sector }) => {
  // Eliminar el espacio y poner en formato camelCase
  const formattedSector = sector.replace(/\s+/g, "").toLowerCase();

  console.log("Sector recibido en SubSectorButton:", sector);
  console.log("Sector formateado:", formattedSector);

  const subSectors = solutionsBySectors[formattedSector] || [];
  console.log("Subsectores para", formattedSector, ":", subSectors);

  return (
    <div className="flex flex-col gap-2">
      {subSectors.length > 0 ? (
        subSectors.map((sub, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-white text-blue-700 font-bold rounded shadow-md hover:bg-gray-200 transition"
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
