import { useState, useEffect } from "react";

// Simulando un array de máquinas y sus detalles
const machinesData = [
  { id: 1, name: "Máquina A", description: "Descripción de la máquina A", manuals: ["manual_A1.pdf", "manual_A2.pdf"] },
  { id: 2, name: "Máquina B", description: "Descripción de la máquina B", manuals: ["manual_B1.pdf"] },
  { id: 3, name: "Máquina C", description: "Descripción de la máquina C", manuals: ["manual_C1.pdf", "manual_C2.pdf"] }
];

const PortalClient = () => {
  const [machines, setMachines] = useState([]);
  const [selectedMachine, setSelectedMachine] = useState(null);

  useEffect(() => {
    // Aquí, normalmente se haría una llamada API para obtener las máquinas del cliente
    setMachines(machinesData);
  }, []);

  const handleMachineSelect = (machine) => {
    setSelectedMachine(machine);
  };

  const handleDownload = (fileName) => {
    // Función para descargar los manuales, aquí se simula el nombre del archivo
    alert(`Descargando ${fileName}`);
  };

  return (
    <div className="flex space-x-6 p-6 mt-44">
      {/* Caja de las máquinas */}
      <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Mis Máquinas</h2>
        <ul className="space-y-4">
          {machines.map((machine) => (
            <li
              key={machine.id}
              className="cursor-pointer p-2 rounded-lg hover:bg-sky-100"
              onClick={() => handleMachineSelect(machine)}
            >
              {machine.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Caja de detalles de la máquina seleccionada */}
      <div className="w-2/3 bg-white p-4 rounded-lg shadow-md">
        {selectedMachine ? (
          <>
            <h2 className="text-2xl font-semibold mb-4">{selectedMachine.name}</h2>
            <p className="mb-4">{selectedMachine.description}</p>
            <h3 className="text-lg font-semibold mb-2">Manuales</h3>
            <ul className="space-y-2">
              {selectedMachine.manuals.map((manual, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span>{manual}</span>
                  <button
                    onClick={() => handleDownload(manual)}
                    className="bg-sky-600 text-white px-3 py-1 rounded-md hover:bg-sky-500"
                  >
                    Descargar
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-gray-500">Selecciona una máquina para ver los detalles.</p>
        )}
      </div>
    </div>
  );
};

export default PortalClient;
