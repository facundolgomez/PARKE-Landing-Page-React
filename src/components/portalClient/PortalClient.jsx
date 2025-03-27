import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const PortalClient = ({ logOut }) => {
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

  // Función para acortar la descripción
  const shortenDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + " [...]";
  };

  return (
    <div className="flex min-h-screen bg-gray-100 p-32">
      {/* Panel de las máquinas */}
      <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg m-4 space-y-4 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mis Máquinas</h2>
          <ul className="space-y-4">
            {machines.map((machine) => (
              <li
                key={machine.id}
                className="cursor-pointer p-4 rounded-lg hover:bg-blue-100 transition duration-200 ease-in-out transform hover:scale-105"
                onClick={() => handleMachineSelect(machine)}
              >
                <h3 className="font-semibold text-lg text-blue-600">{machine.name}</h3>
                <p className="text-sm text-gray-500">{shortenDescription( machine.description, 150)}{" "}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
        <button onClick={logOut} className="bg-sky-600 text-white border-hidden hover:bg-sky-500">Cerrar sesión</button>
        </div>
      </div>

      {/* Panel de detalles de la máquina seleccionada */}
      <div className="w-2/3 p-6 bg-white rounded-lg shadow-lg m-4">
        {selectedMachine ? (
          <>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{selectedMachine.name}</h2>
            <img src={selectedMachine.fileName}/>
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
