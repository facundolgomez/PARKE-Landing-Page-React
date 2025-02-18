import { useParams } from "react-router-dom";
import SubSector from "../subSector/SubSector";
import ClientCarousel from "../clientCarousel/ClientCarousel";
import { useTranslation } from "react-i18next";

const subsectorData = {
  sectors: {
    reciclajeYOrganicos: {
      subsectors: {
        embolsado: {
          image: "/subsector-imgs/fertilizantes.jpg",
          typeOfSubSector: "Fertilizantes",
          description: "Lorem ipsum dolor sit amet ",
          title: "Los mejores fertilizantes",
          descriptionText:
            "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a consectetur con la plate plate form possibly pulvinar vel metus vel metus in lore mauris vel metus in lorem vit augue vel metus in lorem vitae et lorem vit =================================  asd  jsjsjs aks kssks jgjejrj djfh fjdj jddjdjn jdjdndnifofs  dfs df df df df fs dsf df f sd dsf dfs fds df df dfs df dfsdf",
          images: [
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
          ],
        },
        embolsadoycompactado: {
          image: "/subsector-imgs/fertilizantes.jpg",
          typeOfSubSector: "Fertilizantes",
          description: "Lorem ipsum dolor sit amet ",
          title: "Los mejores fertilizantes",
          descriptionText:
            "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a consectetur con la plate plate form possibly pulvinar vel metus vel metus in lore mauris vel metus in lorem vit augue vel metus in lorem vitae et lorem vit =================================  asd  jsjsjs aks kssks jgjejrj djfh fjdj jddjdjn jdjdndnifofs  dfs df df df df fs dsf df f sd dsf dfs fds df df dfs df dfsdf",
          images: [
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
          ],
        },
        compactado: {
          image: "/subsector-imgs/fertilizantes.jpg",
          typeOfSubSector: "Fertilizantes",
          description: "Lorem ipsum dolor sit amet ",
          title: "Los mejores fertilizantes",
          descriptionText:
            "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a consectetur con la plate plate form possibly pulvinar vel metus vel metus in lore mauris vel metus in lorem vit augue vel metus in lorem vitae et lorem vit =================================  asd  jsjsjs aks kssks jgjejrj djfh fjdj jddjdjn jdjdndnifofs  dfs df df df df fs dsf df f sd dsf dfs fds df df dfs df dfsdf",
          images: [
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
          ],
        },
      },
    },

    agricultura: {
      subsectors: {
        fertilizantesgranulares: {
          image: "/subsector-imgs/fertilizantes.jpg",
          typeOfSubSector: "Fertilizantes",
          description: "Lorem ipsum dolor sit amet ",
          title: "Los mejores fertilizantes",
          descriptionText:
            "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a consectetur con la plate plate form possibly pulvinar vel metus vel metus in lore mauris vel metus in lorem vit augue vel metus in lorem vitae et lorem vit =================================  asd  jsjsjs aks kssks jgjejrj djfh fjdj jddjdjn jdjdndnifofs  dfs df df df df fs dsf df f sd dsf dfs fds df df dfs df dfsdf",
          images: [
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
          ],
        },
        fertilizantespolvos: {
          image: "/subsector-imgs/fertilizantes.jpg",
          typeOfSubSector: "Fertilizantes",
          description: "Lorem ipsum dolor sit amet ",
          title: "Los mejores fertilizantes",
          descriptionText:
            "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a consectetur con la plate plate form possibly pulvinar vel metus vel metus in lore mauris vel metus in lorem vit augue vel metus in lorem vitae et lorem vit =================================  asd  jsjsjs aks kssks jgjejrj djfh fjdj jddjdjn jdjdndnifofs  dfs df df df df fs dsf df f sd dsf dfs fds df df dfs df dfsdf",
          images: [
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
          ],
        },
        semillasgranosyoleaginosas: {
          image: "/subsector-imgs/semillasygranos.jpg",
          typeOfSubSector: "Semillas y Granos",
          description: "Lorem ipsum dolor sit amet",
          title: "Las mejores semillas y granos",
          descriptionText:
            "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a",
          images: [
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
          ],
        },
      },
    },
    alimentacionHumana: {
      subsectors: {
        polvos: {
          image: "/subsector-imgs/fertilizantes.jpg",
          typeOfSubSector: "Fertilizantes",
          description: "Lorem ipsum dolor sit amet ",
          title: "Los mejores fertilizantes",
          descriptionText:
            "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a consectetur con la plate plate form possibly pulvinar vel metus vel metus in lore mauris vel metus in lorem vit augue vel metus in lorem vitae et lorem vit =================================  asd  jsjsjs aks kssks jgjejrj djfh fjdj jddjdjn jdjdndnifofs  dfs df df df df fs dsf df f sd dsf dfs fds df df dfs df dfsdf",
          images: [
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
          ],
        },
        irregulares: {
          image: "/subsector-imgs/fertilizantes.jpg",
          typeOfSubSector: "Fertilizantes",
          description: "Lorem ipsum dolor sit amet ",
          title: "Los mejores fertilizantes",
          descriptionText:
            "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a consectetur con la plate plate form possibly pulvinar vel metus vel metus in lore mauris vel metus in lorem vit augue vel metus in lorem vitae et lorem vit =================================  asd  jsjsjs aks kssks jgjejrj djfh fjdj jddjdjn jdjdndnifofs  dfs df df df df fs dsf df f sd dsf dfs fds df df dfs df dfsdf",
          images: [
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
          ],
        },
      },
    },
    alimentosBalanceados: {
      subsectors: {
        granulados: {
          image: "/subsector-imgs/granulados.jpg",
          typeOfSubSector: "Granulados",
          description: "Lorem ipsum dolor sit amet",
          title: "Las mejores granulados",
          descriptionText:
            "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a",
          images: [
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
          ],
        },
        polvos: {
          image: "/subsector-imgs/polvos.jpg",
          typeOfSubSector: "Polvos",
          description: "Lorem ipsum dolor sit amet",
          title: "Las mejores polvos",
          descriptionText:
            "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a",
          images: [
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
          ],
        },
      },
    },
    mineriayquimica: {
      subsectors: {
        polvos: {
          image: "/subsector-imgs/polvos.jpg",
          typeOfSubSector: "Polvos",
          description: "Lorem ipsum dolor sit amet",
          title: "Las mejores polvos",
          descriptionText:
            "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a",
          images: [
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
          ],
        },
        granulados: {
          image: "/subsector-imgs/granulados.jpg",
          typeOfSubSector: "Granulados",
          description: "Lorem ipsum dolor sit amet",
          title: "Las mejores granulados",
          descriptionText:
            "Lorem Ipsum is simply dummy text. Lorem Ipsum is simply a",
          images: [
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
            "/subsector-imgs/pellets.jpg",
            "/subsector-imgs/granulados.jpg",
            "/subsector-imgs/polvos.jpg",
            "/subsector-imgs/pellets.jpg",
          ],
        },
      },
    },
  },
};

const SubSectorPage = () => {
  const { subsectorName } = useParams();
  const { t } = useTranslation();

  const formattedSubsectorName = subsectorName
    .replace(/\s+/g, "") // Elimina espacios
    .replace(/-/g, ""); // Elimina guiones

  console.log("Nombre del subsector desde la URL:", subsectorName);
  console.log("Nombre del subsector formateado:", formattedSubsectorName);

  let foundImage = "/images/default.jpg";
  let description = "";
  let title = "";
  let descriptionText = "";
  let images = [];

  for (const category in subsectorData.sectors) {
    if (subsectorData.sectors[category].subsectors[formattedSubsectorName]) {
      const subsector =
        subsectorData.sectors[category].subsectors[formattedSubsectorName];
      description = subsector.description;
      foundImage = subsector.image;
      title = subsector.title;
      descriptionText = subsector.descriptionText;
      images = subsector.images;
      console.log("Imagen encontrada:", foundImage); // Mostrar la imagen encontrada
      break;
    }
  }

  return (
    <>
      <SubSector
        image={foundImage}
        typeOfSubSector={subsectorName.toUpperCase()}
        description={description}
        title={title}
        descriptionText={descriptionText}
        images={images}
      />
      <ClientCarousel />
      <div className="w-full bg-gray-100 p-4 flex justify-center items-center h-30">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl">
          {/* Contenido de texto */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-slate-800 text-2xl md:text-4xl font-bold mb-2 md:mb-3">
              {t("home.customSolutions.customSolutionsText")}
            </h1>
            <p className="text-slate-700 text-sm md:text-base">
              {t("home.customSolutions.subtitleOfCustomSolutionsText")}
            </p>
          </div>

          {/* Botón */}
          <button className="mt-6 md:mt-0 bg-sky-600 text-white rounded-full py-2 px-6 text-sm md:text-base scale-100 md:scale-125 hover:bg-sky-500 transform transition-transform duration-300 hover:scale-110">
            {t("home.customSolutions.freeQuoteButton")}
          </button>
        </div>
      </div>
    </>
  );
};

export default SubSectorPage;
