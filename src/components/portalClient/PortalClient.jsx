import { useState, useEffect, useContext } from "react";
import { AuthenticationContext } from "../services/AuthenticationContext";

const PortalClient = () => {
  const [machines, setMachines] = useState([]);
  const [selectedMachine, setSelectedMachine] = useState(null);
  const { id, token } = useContext(AuthenticationContext);

  useEffect(() => {
    const fetchMachines = async () => {
      if (!id || !token) {
        console.error("No se ha encontrado el id del usuario o el token");
        return;
      }
      try {
        const response = await fetch(`https://localhost:7185/api/Client/GetMachinesByClient/${id}`, {
          method: "GET",
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setMachines(data); // Asignamos los datos de las máquinas al estado
        } else {
          throw new Error("Error al obtener las máquinas");
        }
      } catch (error) {
        console.error("Error al obtener las máquinas:", error);
      }
    };

    // Llamada a la función para obtener las máquinas
    if (id && token) {
      fetchMachines();
    }
  }, [id, token]);

  const handleMachineSelect = (machine) => {
    setSelectedMachine(machine);
  };

  const handleDownload = (fileName) => {
    alert(`Descargando ${fileName}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 p-32">
      {/* Panel de las máquinas */}
      <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg m-4 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mis Máquinas</h2>
        <ul className="space-y-4">
          {machines.map((machine) => (
            <li
              key={machine.id}
              className="cursor-pointer p-4 rounded-lg hover:bg-blue-100 transition duration-200 ease-in-out transform hover:scale-105"
              onClick={() => handleMachineSelect(machine)}
            >
              <h3 className="font-semibold text-lg text-blue-600">{machine.name}</h3>
              <p className="text-sm text-gray-500">{machine.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Panel de detalles de la máquina seleccionada */}
      <div className="w-2/3 p-6 bg-white rounded-lg shadow-lg m-4">
        {selectedMachine ? (
          <>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{selectedMachine.name}</h2>
            <p className="text-lg text-gray-600 mb-4">{selectedMachine.description}</p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700">Detalles de la Máquina</h3>
              <p><strong>Tipo:</strong> {selectedMachine.type}</p>
              <p><strong>Subtipo:</strong> {selectedMachine.subtype}</p>
              <p><strong>Modelo:</strong> {selectedMachine.model}</p>
              <p><strong>Sector Industrial:</strong> {selectedMachine.industrialSector}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Archivos</h3>
              <ul className="space-y-2">
                {selectedMachine.mediaContent?.map((file, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">{file}</span>
                    <button
                      onClick={() => handleDownload(file)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-200"
                    >
                      Descargar
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <p className="text-gray-500">Selecciona una máquina para ver los detalles.</p>
        )}
      </div>
    </div>
  );
};

export default PortalClient;
