import UpScreen from "../upscreen/UpScreen";
import NewItem from "../newItem/NewItem";
const newsArray = [
  {
    id: 1,
    title: "Embolsadora",
    description:
      "Máquina diseñada para empaquetar productos de manera eficiente, garantizando precisión y rapidez.",
    date: new Date().toLocaleDateString(),
    image: "/img/maquina-parke.png",
  },
  {
    id: 2,
    title: "Paletizadora",
    description:
      "Equipo especializado en apilar productos sobre palets, optimizando el almacenamiento y transporte.",
    date: new Date().toLocaleDateString(),
    image: "/img/paletizadora.png",
  },
  {
    id: 3,
    title: "Envolvedora",
    description:
      "Máquina utilizada para envolver palets con film plástico, asegurando la estabilidad de la carga.",
    date: new Date().toLocaleDateString(),
    image: "/img/envolvedora.png",
  },
];

const News = () => {
  const newsMapped = newsArray.map((prop) => (
    <>
      <div className="d-flex flex-column">
        <NewItem
          id={prop.id}
          title={prop.title}
          description={prop.description}
          date={prop.date}
          image={prop.image}
        />
      </div>
    </>
  ));

  return (
    <>
      <UpScreen
        pathImage={"../../../public/imagenes-de-fondo/imagen-novedades.jpg"}
        title={"Novedades"}
        paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
      <div className="flex flex-col items-center space-y-4 mt-6 mb-6">
        {newsMapped}
      </div>
    </>
  );
};

export default News;
