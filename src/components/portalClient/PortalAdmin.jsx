import { useState, useEffect } from "react";

const PortalAdmin = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [clients, setClients] = useState([]);

  const fetchClients = async () => {
    try {
      const response = await fetch("https://localhost:7185/api/Client/GetAll", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("user-token")}`,
        },
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log(data);
      setClients(data);
    } catch (error) {
      console.error("Error al obtener los clientes:", error);
    }
  }

  useEffect(() => {
    fetchClients();
  }, []);

  const filteredClients = clients.filter(client => {
    if (!client) return false;
    const company = client.nameCompany || "";
    const username = client.username || "";
    const query = searchQuery.toLowerCase();
    return company.toLowerCase().includes(query) || 
           username.toLowerCase().includes(query);
  });

  return (
    <div className="flex flex-col lg:flex-row pt-28 p-6 space-y-6 min-h-screen bg-gray-100">
      {/* Lista de clientes */}
      <div className="w-full lg:w-1/3 p-6 bg-white rounded-2xl shadow-lg max-h-[80vh] overflow-y-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Clientes</h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar por nombre o empresa"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300">
          <span className="text-xl font-bold">Nuevo Cliente</span>
        </button>

        <ul className="space-y-4">
          {filteredClients.map(client => (
            <li
              key={client.id}
              onClick={() => setSelectedClient(client)}
              className="cursor-pointer p-5 rounded-xl bg-gradient-to-r from-blue-200 to-blue-300 hover:shadow-xl transition transform hover:scale-105"
            >
              <h3 className="font-semibold text-xl text-blue-900">
                {client.NameCompany || 'Sin nombre de empresa'}
              </h3>
              <p className="text-sm text-gray-700">{client.email || 'Sin email'}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Detalles del cliente */}
      <div className="w-full lg:w-2/3 p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center max-h-[80vh] overflow-y-auto">
        {selectedClient ? (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              {selectedClient.nameCompany || 'Sin nombre de empresa'}
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Usuario:</strong> {selectedClient.username || 'No especificado'}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Email:</strong> {selectedClient.email || 'No especificado'}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Teléfono:</strong> {selectedClient.phoneNumber || 'No especificado'}
            </p>
            
            <div className="w-full text-center mt-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Detalles</h3>
              {selectedClient.ClientDetails ? (
                <ul className="space-y-3">
                  {selectedClient.ClientDetails.map((detail, index) => (
                    <li key={index} className="bg-gray-200 p-4 rounded-lg shadow-md">
                      <p className="text-gray-800"><strong>Máquina ID:</strong> {detail.MachineId}</p>
                      {/* Agrega más campos según la estructura real de ClientDetails */}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No hay detalles disponibles</p>
              )}
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-xl text-center">
            Selecciona un cliente para ver los detalles.
          </p>
        )}
      </div>
    </div>
  );
};

export default PortalAdmin;