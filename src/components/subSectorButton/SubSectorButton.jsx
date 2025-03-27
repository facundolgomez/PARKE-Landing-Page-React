// import { useNavigate } from "react-router-dom";
// import { solutionsBySectors } from "../data/solutionsBySector/SolutionsBySector";

// const SubSectorButton = ({ sector }) => {
//   const formattedSector = sector.replace(/\s+/g, "").toLowerCase();

//   const navigate = useNavigate();

//   const subSectors = solutionsBySectors[formattedSector] || [];

//   return (
//     <div className="flex flex-col gap-2">
//       {subSectors.length > 0 ? (
//         subSectors.map((sub, index) => (
//           <button
//             key={index}
//             className="px-4 py-2 bg-white text-blue-700 font-bold rounded shadow-md hover:bg-gray-200 transition"
//             onClick={() => navigate(`/subsector/${sub.toLowerCase()}`)} // Aquí va la navegación
//           >
//             {sub}
//           </button>
//         ))
//       ) : (
//         <p className="text-white">No hay subsectores disponibles</p>
//       )}
//     </div>
//   );
// };

// export default SubSectorButton;
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Función para eliminar acentos y normalizar los valores
const removeAccents = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "");
};

const SubSectorButton = ({ sector }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Obtiene los subsectores desde i18next, que ahora es un objeto con claves de sectores y valores como arreglos
  const subSectorObject = t(
    `home.customSolutions.typeOfSolution.solutionsBySectors.subSectorButton`,
    {
      returnObjects: true,
    }
  );

  // Normaliza el valor de sector, eliminando espacios, tildes y poniéndolo en minúsculas
  const normalizedSector = removeAccents(sector);

  console.log("sector actual:", normalizedSector); // Verifica el sector actual después de normalizar
  console.log("subSectorObject:", subSectorObject); // Verifica el objeto completo de subsectores

  // Accede al arreglo de subsectores del sector actual
  const subSectors = subSectorObject?.[normalizedSector] || [];

  console.log("subSectors:", subSectors); // Verifica los subsectores

  // Si no hay subsectores, muestra un mensaje indicando que no hay disponibles
  if (subSectors.length === 0) {
    return (
      <div className="flex flex-col gap-2">
        <p className="text-white">
          No hay subsectores disponibles para este sector.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {subSectors.map((sub, index) => (
        <button
          key={index}
          className="px-4 py-2 bg-white text-blue-700 font-bold rounded shadow-md hover:bg-gray-200 transition"
          onClick={() => navigate(`/subsector/${sub.toLowerCase()}`)}
        >
          {sub}
        </button>
      ))}
    </div>
  );
};

export default SubSectorButton;
