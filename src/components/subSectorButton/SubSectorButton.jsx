import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Mapeo completo de términos en inglés/español/portugués a claves consistentes
const SECTOR_MAP = {
  // Español
  "reciclaje y orgánicos": "reciclajeyorganicos",
  "alimentación humana": "alimentacionhumana",
  "minería y química": "mineriayquimica",

  // Inglés
  "recycling and organics": "reciclajeyorganicos",
  agriculture: "agricultura",
  "human nutrition": "alimentacionhumana",
  "balanced feed": "alimentosbalanceados",
  "mining and chemicals": "mineriayquimica",

  // Portugués
  "reciclagem e orgânicos": "reciclajeyorganicos",
  "alimentação humana": "alimentacionhumana",
  "mineração e química": "mineriayquimica",

  // Claves compartidas (solo necesitamos una declaración)
  agricultura: "agricultura",
  "alimentos balanceados": "alimentosbalanceados",
};
const normalizeKey = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "");
};

const SubSectorButton = ({ sector }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // Obtener el objeto de subsectores
  const subSectorObject = t(
    "home.customSolutions.typeOfSolution.solutionsBySectors.subSectorButton",
    { returnObjects: true, defaultValue: {} }
  );

  //  Buscar en el mapeo primero
  const mappedSector = SECTOR_MAP[sector.toLowerCase()];

  // Si no está en el mapeo, normalizar
  const normalizedSector = mappedSector || normalizeKey(sector);

  const subSectors = subSectorObject[normalizedSector] || [];

  if (subSectors.length === 0) {
    return (
      <div className="flex flex-col gap-2">
        <p className="text-white">
          {t("home.customSolutions.noSubSectorsAvailable")}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {subSectors.map((sub, index) => (
        <button
          key={index}
          className="px-4 py-2 bg-transparent text-white border-sky-600 font-bold rounded shadow-md hover:bg-gray-200 transition hover:scale-110"
          onClick={() =>
            navigate(
              `/subsector/${encodeURIComponent(
                sub.toLowerCase().replace(/\s+/g, "-")
              )}`
            )
          }
        >
          {sub}
        </button>
      ))}
    </div>
  );
};

export default SubSectorButton;
