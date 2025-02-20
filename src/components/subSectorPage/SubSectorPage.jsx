import { useParams } from "react-router-dom";
import SubSector from "../subSector/SubSector";
import { useTranslation } from "react-i18next";
import ClientCarouselBySector from "../clientCarousel/ClientCarouselBySector";

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
          clients: [
            "../../../public/img/logos-clientes/aca.jpg",
            "../../../public/img/logos-clientes/adeco-agro.jpg",
            "../../../public/img/logos-clientes/afa.jpg",
            "../../../public/img/logos-clientes/afb.jpg",
            "../../../public/img/logos-clientes/agd.png",
            "../../../public/img/logos-clientes/aimar.jpg",
            "../../../public/img/logos-clientes/algodonera-avellaneda.jpg"
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
          clients: [
            "../../../public/img/logos-clientes/alimental.jpg",
            "../../../public/img/logos-clientes/aniceto-gomez.jpg",
            "../../../public/img/logos-clientes/armada.jpg",
            "../../../public/img/logos-clientes/azul-jacaranda.jpg",
            "../../../public/img/logos-clientes/berandebi.png",
            "../../../public/img/logos-clientes/bruning.png",
            "../../../public/img/logos-clientes/bunge.png"
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
          clients: [
            "../../../public/img/logos-clientes/combusnort.png",
            "../../../public/img/logos-clientes/conecar.jpg",
            "../../../public/img/logos-clientes/coop-mp.jpg",
            "../../../public/img/logos-clientes/coop-posse.jpg",
            "../../../public/img/logos-clientes/coopar.jpg",
            "../../../public/img/logos-clientes/cotagro.png",
            "../../../public/img/logos-clientes/danes.jpg"
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
          clients: [
            "../../../public/img/logos-clientes/dawi.jpg",
            "../../../public/img/logos-clientes/dekalb.jpg",
            "../../../public/img/logos-clientes/engormax.jpg",
            "../../../public/img/logos-clientes/gea.png",
            "../../../public/img/logos-clientes/generamas.jpg",
            "../../../public/img/logos-clientes/grupo-cavigliasso.jpg",
            "../../../public/img/logos-clientes/hoffmann.png"
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
          clients: [
            "../../../public/img/logos-clientes/huruma.jpg",
            "../../../public/img/logos-clientes/jabonera-cda-rosquin.jpg",
            "../../../public/img/logos-clientes/jarama.png",
            "../../../public/img/logos-clientes/jose-cartellone.jpg",
            "../../../public/img/logos-clientes/la-aurora.jpg",
            "../../../public/img/logos-clientes/la-riojana.jpg",
            "../../../public/img/logos-clientes/laganadera-ramirez.png"
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
          clients: [
            "../../../public/img/logos-clientes/lar.png",
            "../../../public/img/logos-clientes/latour.jpg",
            "../../../public/img/logos-clientes/lawter.png",
            "../../../public/img/logos-clientes/lc.png",
            "../../../public/img/logos-clientes/lisal.jpg",
            "../../../public/img/logos-clientes/lobar.jpg",
            "../../../public/img/logos-clientes/lorenzatti.jpg"
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
          clients: [
            "../../../public/img/logos-clientes/mafisa.jpg",
            "../../../public/img/logos-clientes/mani-king.png",
            "../../../public/img/logos-clientes/maniagro.jpg",
            "../../../public/img/logos-clientes/manisel.png",
            "../../../public/img/logos-clientes/mbs.jpg",
            "../../../public/img/logos-clientes/molcasa.png",
            "../../../public/img/logos-clientes/molino-cañuelas.jpg"
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
          clients: [
            "../../../public/img/logos-clientes/molinos-ala.jpg",
            "../../../public/img/logos-clientes/monsanto.jpg",
            "../../../public/img/logos-clientes/navas.jpg",
            "../../../public/img/logos-clientes/nuseed.png",
            "../../../public/img/logos-clientes/nutrifrost.jpg",
            "../../../public/img/logos-clientes/nutriser.jpg",
            "../../../public/img/logos-clientes/olam.png"],
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
          clients: [
            "../../../public/img/logos-clientes/olega.jpg",
            "../../../public/img/logos-clientes/pdm.jpg",
            "../../../public/img/logos-clientes/pelayo.jpg",
            "../../../public/img/logos-clientes/pioneer.png",
            "../../../public/img/logos-clientes/premin.png",
            "../../../public/img/logos-clientes/prochem.jpg",
            "../../../public/img/logos-clientes/prodeman.jpg"
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
          clients: [
            "../../../public/img/logos-clientes/produsem.png",
            "../../../public/img/logos-clientes/rexam.png",
            "../../../public/img/logos-clientes/ricedal.jpg",
            "../../../public/img/logos-clientes/rotoplas.png",
            "../../../public/img/logos-clientes/rovial.png",
            "../../../public/img/logos-clientes/satus ager.png",
            "../../../public/img/logos-clientes/seedar.png"
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
          clients: [
            "../../../public/img/logos-clientes/sepor.jpg",
            "../../../public/img/logos-clientes/servagrop.png",
            "../../../public/img/logos-clientes/shea-white.png",
            "../../../public/img/logos-clientes/sl-cereales.jpg",
            "../../../public/img/logos-clientes/snaider.jpg",
            "../../../public/img/logos-clientes/spraytec.png",
            "../../../public/img/logos-clientes/sps.png"
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
          clients: [
            "../../../public/img/logos-clientes/syngenta.png",
            "../../../public/img/logos-clientes/systel.jpg",
            "../../../public/img/logos-clientes/tecnoseeds.png",
            "../../../public/img/logos-clientes/teknal.jpg",
            "../../../public/img/logos-clientes/vicentin.jpg",
            "../../../public/img/logos-clientes/yara.png"
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
  let clients = [];

  for (const category in subsectorData.sectors) {
    if (subsectorData.sectors[category].subsectors[formattedSubsectorName]) {
      const subsector =
        subsectorData.sectors[category].subsectors[formattedSubsectorName];
      description = subsector.description;
      foundImage = subsector.image;
      title = subsector.title;
      descriptionText = subsector.descriptionText;
      images = subsector.images;
      clients = subsector.clients;
      
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
      <ClientCarouselBySector clients={clients}/>
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
