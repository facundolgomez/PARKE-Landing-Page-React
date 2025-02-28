import { useParams } from "react-router-dom";
import MachineModel from "../machineModel/MachineModel";
import Upscreen from "../upscreen/Upscreen";
import { solutionsByMachineType } from "../data/solutionsByMachineType/SolutionsByMachineType"; // Asegúrate de importar correctamente

const SolutionsByMachineTypePage = () => {
  const { machine, type } = useParams(); // Obtiene los parámetros desde la URL

  // Validamos si existen los datos en el JSON
  const machineData = solutionsByMachineType[machine]?.[type];

  if (!machineData) {
    return (
      <h1 className="text-center text-red-600 text-xl">
        No se encontró información
      </h1>
    );
  }

  return (
    <>
      {/* Título de la página con el tipo de máquina */}
      <div>
        <h1 className="p-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 tracking-wide text-center relative pb-2">
          {type} Machines
          <span className="absolute left-0 bottom-0 w-full h-1 bg-sky-600 rounded"></span>
        </h1>
      </div>

      {/* Muestra todos los modelos disponibles para este tipo de máquina */}
      <Upscreen
        pathImage={"/img/imagen1.jpg"}
        title="Choose your Machine Model"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <div className="p-5 font-sans flex flex-col space-y-8">
        {Object.keys(machineData)
          .filter((key) => key !== "titles")
          .map((modelKey, index) => {
            const modelData = machineData[modelKey];
            return (
              <div key={index}>
                {/* Componente MachineModel para mostrar cada modelo */}
                <MachineModel
                  image={modelData.image}
                  title={modelData.title}
                  description={modelData.description}
                />

                {/* Mostrar título y descripción del modelo */}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default SolutionsByMachineTypePage;
