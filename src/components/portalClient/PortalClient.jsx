import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const PortalClient = () => {
  const [machines, setMachines] = useState([]);
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("user-token");
    setToken(storedToken);

    if (storedToken) {
      try {
        const decodedToken = jwtDecode(storedToken);
        setUserId(decodedToken.sub);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    } else {
      console.error("No token found in localStorage");
    }
  }, []);

  useEffect(() => {
    const fetchMachines = async () => {
      if (!userId || !token) {
        console.error("No se ha encontrado el id del usuario o el token");
        return;
      }
      try {
        const response = await fetch(`https://localhost:7185/api/Client/GetMachinesByClient/${userId}`, {
          method: "GET",
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setMachines(data);
        } else {
          throw new Error("Error al obtener las máquinas");
        }
      } catch (error) {
        console.error("Error al obtener las máquinas:", error);
      }
    };

    if (userId && token) {
      fetchMachines();
    }
  }, [userId, token]);

  const handleMachineSelect = (machine) => {
    setSelectedMachine(machine);
  };

  const handleDownload = (fileName) => {
    alert(`Descargando ${fileName}`);
  };

  return (
    <div className="pt-32 xs:p-6 space-y-4 min-h-screen bg-gray-50 ">
      <div className="flex flex-col lg:flex-row space-y-4">
        <div className="w-full p-4 bg-white rounded-xl shadow-xl space-y-4 max-h-[80vh] overflow-y-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Mis Máquinas</h2>
          <ul className="space-y-4">
            {machines.map((machine) => (
              <li
                key={machine.id}
                className="cursor-pointer p-4 rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleMachineSelect(machine)}
              >
                <h3 className="font-semibold text-lg text-blue-800">{machine.name}</h3>
                <p className="text-sm text-gray-600">{machine.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full p-6 bg-white rounded-xl shadow-xl flex flex-col items-center max-h-[80vh] overflow-y-auto">
          {selectedMachine ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{selectedMachine.name}</h2>
              <p className="text-lg text-gray-600 mb-4 text-center">{selectedMachine.description}</p>
              <div className="mb-6 w-full text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Detalles de la Máquina</h3>
                <p><strong>Tipo:</strong> {selectedMachine.type}</p>
                <p><strong>Subtipo:</strong> {selectedMachine.subtype}</p>
                <p><strong>Modelo:</strong> {selectedMachine.model}</p>
                <p><strong>Sector Industrial:</strong> {selectedMachine.industrialSector}</p>
              </div>
              <div className="w-full">
                <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">Archivos</h3>
                <ul className="space-y-2">
                  {selectedMachine.mediaContent?.map((file, index) => (
                    <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded-lg shadow-sm">
                      <span className="text-sm text-gray-600 truncate w-3/4">{file}</span>
                      <button
                        onClick={() => handleDownload(file)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-200"
                      >
                        Descargar
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <p className="text-gray-500 text-center">Selecciona una máquina para ver los detalles.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortalClient;
