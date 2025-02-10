import { useParams } from "react-router-dom";
import SubSector from "../subSector/SubSector";

const subsectorData = {
  agricultura: {
    fertilizantes: {
      image: "/subsector-imgs/fertilizantes.jpg",
      typeOfSubSector: "Fertilizantes",
      description: "Lorem ipsum dolor sit amet",
      title: "Los mejores fertilizantes", 
      descriptionText: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a",
      images: ["/subsector-imgs/granulados.jpg", "/subsector-imgs/polvos.jpg", "/subsector-imgs/pellets.jpg", "/subsector-imgs/granulados.jpg", "/subsector-imgs/polvos.jpg", "/subsector-imgs/pellets.jpg"]
    },
    semillasygranos: {
      image: "/subsector-imgs/semillasygranos.jpg",
      typeOfSubSector: "Semillas y Granos",
      description: "Lorem ipsum dolor sit amet",
      title: "Las mejores semillas y granos", 
      descriptionText: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a",
      images: ["/subsector-imgs/granulados.jpg", "/subsector-imgs/polvos.jpg", "/subsector-imgs/pellets.jpg", "/subsector-imgs/granulados.jpg", "/subsector-imgs/polvos.jpg", "/subsector-imgs/pellets.jpg"]
    },
    verduras: {
      image: "/subsector-imgs/verduras.jpg",
      typeOfSubSector: "Verduras",
      description: "Lorem ipsum dolor sit amet",
      title: "Las mejores verduras", 
      descriptionText: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a",
      images: ["/subsector-imgs/granulados.jpg", "/subsector-imgs/polvos.jpg", "/subsector-imgs/pellets.jpg", "/subsector-imgs/granulados.jpg", "/subsector-imgs/polvos.jpg", "/subsector-imgs/pellets.jpg"]
    }
  },
  alimentosbalanceados: {
    granulados: {
    image: "/subsector-imgs/granulados.jpg",
      typeOfSubSector: "Granulados",
      description: "Lorem ipsum dolor sit amet",
      title: "Las mejores granulados", 
      descriptionText: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a",
      images: ["/subsector-imgs/granulados.jpg", "/subsector-imgs/polvos.jpg", "/subsector-imgs/pellets.jpg", "/subsector-imgs/granulados.jpg", "/subsector-imgs/polvos.jpg", "/subsector-imgs/pellets.jpg"]
    },
    polvos:{
      image: "/subsector-imgs/polvos.jpg",
      typeOfSubSector: "Polvos",
      description: "Lorem ipsum dolor sit amet",
      title: "Las mejores polvos", 
      descriptionText: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a",
      images: ["/subsector-imgs/granulados.jpg", "/subsector-imgs/polvos.jpg", "/subsector-imgs/pellets.jpg", "/subsector-imgs/granulados.jpg", "/subsector-imgs/polvos.jpg", "/subsector-imgs/pellets.jpg"]
    },
    pellets:{
      image: "/subsector-imgs/pellets.jpg",
      typeOfSubSector: "Pellets",
      description: "Lorem ipsum dolor sit amet",
      title: "Los mejores pellets", 
      descriptionText: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a",
      images: ["/subsector-imgs/granulados.jpg", "/subsector-imgs/polvos.jpg", "/subsector-imgs/pellets.jpg", "/subsector-imgs/granulados.jpg", "/subsector-imgs/polvos.jpg", "/subsector-imgs/pellets.jpg"]
    }
  },
  mineriayquimica: {
    polvos:{
      image: "/subsector-imgs/polvos.jpg",
      typeOfSubSector: "Polvos",
      description: "Lorem ipsum dolor sit amet",
      title: "Las mejores polvos", 
      descriptionText: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a",
      images: ["/subsector-imgs/granulados.jpg", "/subsector-imgs/polvos.jpg", "/subsector-imgs/pellets.jpg", "/subsector-imgs/granulados.jpg", "/subsector-imgs/polvos.jpg", "/subsector-imgs/pellets.jpg"]

    },
    granulados:{
      image: "/subsector-imgs/granulados.jpg",
      typeOfSubSector: "Granulados",
      description: "Lorem ipsum dolor sit amet",
      title: "Las mejores granulados", 
      descriptionText: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a",
      images: ["/subsector-imgs/granulados.jpg", "/subsector-imgs/polvos.jpg", "/subsector-imgs/pellets.jpg", "/subsector-imgs/pellets.jpg", "/subsector-imgs/granulados.jpg", "/subsector-imgs/polvos.jpg", "/subsector-imgs/pellets.jpg"]
    },
    carbon:{
      image: "/subsector-imgs/granulados.jpg",
      typeOfSubSector: "Carbon",
      description: "Lorem ipsum dolor sit amet",
      title: "El carbon más renovable", 
      descriptionText: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a",
      images: ["/subsector-imgs/granulados.jpg", "/subsector-imgs/polvos.jpg", "/subsector-imgs/pellets.jpg", "/subsector-imgs/granulados.jpg", "/subsector-imgs/polvos.jpg", "/subsector-imgs/pellets.jpg"]
    },
    pellets:{
      image: "/subsector-imgs/pellets.jpg",
      typeOfSubSector: "Pellets",
      description: "Lorem ipsum dolor sit amet",
      title: "Los mejores pellets", 
      descriptionText: "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a",
      images: ["/subsector-imgs/granulados.jpg", "/subsector-imgs/polvos.jpg", "/subsector-imgs/pellets.jpg", "/subsector-imgs/granulados.jpg", "/subsector-imgs/polvos.jpg", "/subsector-imgs/pellets.jpg"]

    }
  },
};

const SubSectorPage = () => {
  const { subsectorName } = useParams();

  // Eliminar los espacios para coincidir con las claves del objeto
  const formattedSubsectorName = subsectorName
    .replace(/\s+/g, "")
    .toLowerCase();

  let foundImage = "/images/default.jpg";
  let description = "";
  let title = "";
  let descriptionText = "";
  let images = [];

  for (const category in subsectorData) {
    if (subsectorData[category][formattedSubsectorName]) {
      description = subsectorData[category][formattedSubsectorName].description;
      foundImage = subsectorData[category][formattedSubsectorName].image;
      title = subsectorData[category][formattedSubsectorName].title;
      descriptionText = subsectorData[category][formattedSubsectorName].descriptionText;
      images = subsectorData[category][formattedSubsectorName].images;
      console.log("Imagen encontrada:", foundImage); // Mostrar la imagen encontrada
      break;
    }
  }

  return (
    <SubSector
      image={foundImage}
      typeOfSubSector={subsectorName.toUpperCase()}
      description={description}
      title={title}
      descriptionText={descriptionText}
      images={images}
    />
  );
};

export default SubSectorPage;
