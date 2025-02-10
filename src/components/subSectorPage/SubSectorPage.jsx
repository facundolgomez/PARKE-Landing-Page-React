import { useParams } from "react-router-dom";
import SubSector from "../subSector/SubSector";

const subsectorImages = {
  agricultura: {
    fertilizantes: "/subsector-imgs/fertilizantes.jpg",
    semillasygranos: "/subsector-imgs/semillasygranos.jpg",
    verduras: "/subsector-imgs/verduras.jpg",
  },
  alimentosbalanceados: {
    granulados: "/subsector-imgs/granulados.jpg",
    polvos: "/subsector-imgs/polvos.jpg",
    pellets: "/subsector-imgs/pellets.jpg",
  },
  mineriayquimica: {
    polvos: "",
    granulados: "",
    carbon: "",
    pellets: "",
  },
};

const SubSectorPage = () => {
  const { subsectorName } = useParams();

  // Eliminar los espacios para coincidir con las claves del objeto
  const formattedSubsectorName = subsectorName
    .replace(/\s+/g, "")
    .toLowerCase();

  let foundImage = "/images/default.jpg";

  for (const category in subsectorImages) {
    if (subsectorImages[category][formattedSubsectorName]) {
      foundImage = subsectorImages[category][formattedSubsectorName];
      console.log("Imagen encontrada:", foundImage); // Mostrar la imagen encontrada
      break;
    }
  }

  return (
    <SubSector
      image={foundImage}
      typeOfSubSector={subsectorName.toUpperCase()}
      description={"Lorem ipsum dolor sit amet consectetur adipisicing"}
    />
  );
};

export default SubSectorPage;
