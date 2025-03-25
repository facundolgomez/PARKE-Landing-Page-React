import { useState } from "react";

const clients = [
  {
    id: 1,
    username: "usuarioA",
    nameCompany: "Empresa A",
    email: "empresaA@email.com",
    phoneNumber: "123-456-7890",
    clientDetails: [
      { id: 101, name: "Máquina A1", description: "Descripción Máquina A1" },
      { id: 102, name: "Máquina A2", description: "Descripción Máquina A2" },
    ],
  },
  {
    id: 2,
    username: "usuarioB",
    nameCompany: "Empresa B",
    email: "empresaB@email.com",
    phoneNumber: "987-654-3210",
    clientDetails: [
      { id: 201, name: "Máquina B1", description: "Descripción Máquina B1" },
      { id: 202, name: "Máquina B2", description: "Descripción Máquina B2" },
    ],
  },
  {
    id: 3,
    username: "usuarioC",
    nameCompany: "Empresa A",
    email: "empresaA@email.com",
    phoneNumber: "123-456-7890",
    clientDetails: [
      { id: 101, name: "Máquina A1", description: "Descripción Máquina A1" },
      { id: 102, name: "Máquina A2", description: "Descripción Máquina A2" },
    ],
  },
  {
    id: 3,
    username: "usuarioC",
    nameCompany: "Empresa A",
    email: "empresaA@email.com",
    phoneNumber: "123-456-7890",
    clientDetails: [
      { id: 101, name: "Máquina A1", description: "Descripción Máquina A1" },
      { id: 102, name: "Máquina A2", description: "Descripción Máquina A2" },
    ],
  },
];
const PortalAdmin = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrado de clientes
  const filteredClients = clients.filter(
    (client) =>
      (client.nameCompany || "")
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      (client.username || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col lg:flex-row pt-28 p-6 space-y-6 min-h-screen bg-gray-100">
        {/* Contenedor de clientes */}
        <div className="w-full lg:w-1/3 p-6 bg-white rounded-2xl shadow-lg max-h-[80vh] overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Clientes</h2>

          {/* Buscador */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Buscar por nombre o empresa"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Botón de agregar nuevo cliente */}
          <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300">
            <span className="text-xl font-bold">+</span>
          </button>

          {/* Lista de clientes filtrada */}
          <ul className="space-y-4">
            {filteredClients.map((client) => (
              <li
                key={client.id}
                onClick={() => setSelectedClient(client)}
                className="cursor-pointer p-5 rounded-xl bg-gradient-to-r from-blue-200 to-blue-300 hover:shadow-xl transition transform hover:scale-105"
              >
                <h3 className="font-semibold text-xl text-blue-900">{client.nameCompany}</h3>
                <p className="text-sm text-gray-700">{client.email}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Detalles del cliente seleccionado */}
        <div className="w-full lg:w-2/3 p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center max-h-[80vh] overflow-y-auto">
          {selectedClient ? (
            <>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                {selectedClient.nameCompany}
              </h2>
              <p className="text-lg text-gray-700 mb-2 text-center">
                <strong>Usuario:</strong> {selectedClient.username}
              </p>
              <p className="text-lg text-gray-700 mb-2 text-center">
                <strong>Email:</strong> {selectedClient.email}
              </p>
              <p className="text-lg text-gray-700 mb-2 text-center">
                <strong>Teléfono:</strong> {selectedClient.phoneNumber}
              </p>
              <div className="w-full text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Máquinas</h3>
                <ul className="space-y-3">
                  {selectedClient.clientDetails.map((machine) => (
                    <li key={machine.id} className="bg-gray-200 p-4 rounded-lg shadow-md">
                      <h4 className="font-semibold text-gray-800 text-lg">{machine.name}</h4>
                      <p className="text-sm text-gray-700">{machine.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <p className="text-gray-500 text-xl text-center">
              Selecciona un cliente para ver los detalles.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default PortalAdmin;
