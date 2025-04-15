import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const PortalAdmin = ({ logOut }) => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [clients, setClients] = useState([]);
  const [clientMachines, setClientMachines] = useState([]);
  const [isLoadingMachines, setIsLoadingMachines] = useState(false);
  const [allMachines, setAllMachines] = useState([]); // Todas las máquinas disponibles
  const [selectedMachineToAdd, setSelectedMachineToAdd] = useState(""); // Máquina seleccionada para agregar
  const [isLoadingAllMachines, setIsLoadingAllMachines] = useState(false);

  const navigate = useNavigate();


  // Obtener todos los clientes
  const fetchClients = async () => {
    try {
      const response = await fetch("https://localhost:7185/api/Client/GetAll", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("user-token")}`,
        },
      });
      
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      
      const data = await response.json();
      setClients(data);
    } catch (error) {
      console.error("Error al obtener los clientes:", error);
    }
  }

  // Eliminar un cliente
  const deleteClient = async (clientId, clientUsername) => {
    // Primera confirmación
    const confirmation1 = window.confirm(
      `⚠️ ADVERTENCIA: Está por eliminar permanentemente al cliente ${clientUsername} y toda su información.\n\n` +
      '¿Desea continuar con esta acción irreversible?'
    );
    
    if (!confirmation1) return;
  
    // Segunda confirmación con nombre de usuario
    const userInput = prompt(
      'CONFIRMACIÓN FINAL:\n\n' +
      `Para eliminar permanentemente al cliente ${clientUsername}, escriba su nombre de usuario a continuación:`
    );
  
    if (userInput?.trim() !== clientUsername) {
      alert('El nombre de usuario no coincide. Eliminación cancelada.');
      return;
    }
  
    try {
      const response = await fetch(`https://localhost:7185/api/Client/${clientId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('user-token')}`
        }
      });
  
      if (!response.ok) {
        throw new Error(await response.text());
      }
  
      // Actualizar el estado
      setClients(clients.filter(c => c.id !== clientId));
      if (selectedClient?.id === clientId) {
        setSelectedClient(null);
        setClientMachines([]);
      }
  
      alert(`✅ Cliente ${clientUsername} eliminado permanentemente`);
    } catch (error) {
      console.error('Error al eliminar:', error);
      alert(`❌ Error al eliminar: ${error.message}`);
    }
  };

  // Obtener todas las máquinas disponibles
  const fetchAllMachines = async () => {
    setIsLoadingAllMachines(true);
    try {
      const response = await fetch("https://localhost:7185/api/Machine/GetAllMachines", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("user-token")}`,
        },
      });
      
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      
      const data = await response.json();
      setAllMachines(data);
    } catch (error) {
      console.error("Error al obtener las máquinas:", error);
    } finally {
      setIsLoadingAllMachines(false);
    }
  }

  // Obtener máquinas de un cliente específico
  const fetchClientMachines = async (clientId) => {
    if (!clientId) return;
    
    setIsLoadingMachines(true);
    try {
      const response = await fetch(`https://localhost:7185/api/Client/GetMachinesByClient/${clientId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("user-token")}`,
        },
      });
      
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      
      const data = await response.json();
      setClientMachines(data);
    } catch (error) {
      console.error("Error al obtener las máquinas del cliente:", error);
      setClientMachines([]);
    } finally {
      setIsLoadingMachines(false);
    }
  }

  // Asignar una máquina a un cliente
  const assignMachineToClient = async () => {
    if (!selectedClient || !selectedMachineToAdd) return;
    
    try {
      const response = await fetch(`https://localhost:7185/api/Admin/${selectedClient.id}/asignarMaquina/${selectedMachineToAdd}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("user-token")}`,
        },
      });
      
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      
      // Actualizar la lista de máquinas del cliente
      await fetchClientMachines(selectedClient.id);
      setSelectedMachineToAdd(""); // Resetear selección
    } catch (error) {
      console.error("Error al asignar máquina:", error);
    }
  }

  // Quitar una máquina de un cliente
  const removeMachineFromClient = async (machineId) => {
    if (!selectedClient || !machineId) return;
    
    try {
      const response = await fetch(`https://localhost:7185/api/Client/${selectedClient.id}/DeleteMachine/${machineId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("user-token")}`,
        },
      });
      
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      
      // Actualizar la lista de máquinas del cliente
      await fetchClientMachines(selectedClient.id);
    } catch (error) {
      console.error("Error al quitar máquina:", error);
    }
  }

  // Manejar selección de cliente
  const handleSelectClient = (client) => {
    setSelectedClient(client);
    fetchClientMachines(client.id);
  }

  // Cargar datos iniciales
  useEffect(() => {
    fetchClients();
    fetchAllMachines();
  }, []);

  // Filtrar clientes según búsqueda
  const filteredClients = clients.filter(client => {
    if (!client) return false;
    const company = client.nameCompany || "";
    const username = client.username || "";
    const query = searchQuery.toLowerCase();
    return company.toLowerCase().includes(query) || 
           username.toLowerCase().includes(query);
  });

  // Máquinas disponibles para asignar (no asignadas aún al cliente)
  const availableMachines = allMachines.filter(machine => 
    !clientMachines.some(cm => cm.id === machine.id)
  );

  return (
    <>
    <div className="flex justify-end pe-14 items-center bg-gray-100">
      <button onClick={logOut} className="bg-sky-600 text-white mt-32 border-hidden hover:bg-sky-500">Cerrar sesión</button>
    </div>
    <div className="flex flex-col lg:flex-row p-6 space-y-6 min-h-screen bg-gray-100">

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

        <button 
          onClick={() => navigate('newClient')}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
        >
          <span className="text-xl font-bold">Nuevo Cliente</span>
        </button>

        <ul className="space-y-4">
          {filteredClients.map(client => (
            <li
              key={client.id}
              onClick={() => handleSelectClient(client)}
              className="cursor-pointer p-5 rounded-xl bg-gradient-to-r from-blue-200 to-blue-300 hover:shadow-xl transition transform hover:scale-105"
            >
              <h3 className="font-semibold text-xl text-blue-900">
                {client.nameCompany || 'Sin nombre de empresa'}
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
              <strong>Dirección:</strong> {selectedClient.adress || 'No especificado'}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Teléfono:</strong> {selectedClient.phoneNumber || 'No especificado'}
            </p>
            <button
              onClick={() => deleteClient(selectedClient.id, selectedClient.username)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Eliminar Cliente Permanentemente
            </button>
            
            <div className="w-full text-center mt-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">MÁQUINAS</h3>
              
              {/* Formulario para agregar máquinas */}
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-bold text-lg text-blue-800 mb-2">Asignar nueva máquina</h4>
                <div className="flex flex-col md:flex-row gap-2">
                  <select
                    value={selectedMachineToAdd}
                    onChange={(e) => setSelectedMachineToAdd(e.target.value)}
                    className="flex-grow p-2 border border-gray-300 rounded"
                    disabled={isLoadingAllMachines || availableMachines.length === 0}
                  >
                    <option value="">Seleccione una máquina</option>
                    {availableMachines.map(machine => (
                      <option key={machine.id} value={machine.id}>
                        {machine.name} - {machine.model} ({machine.serialNumber})
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={assignMachineToClient}
                    disabled={!selectedMachineToAdd}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-400 transition"
                  >
                    Asignar
                  </button>
                </div>
                {availableMachines.length === 0 && !isLoadingAllMachines && (
                  <p className="text-sm text-gray-500 mt-2">No hay máquinas disponibles para asignar</p>
                )}
              </div>


              {/* Lista de máquinas asignadas */}

              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Máquinas asignadas al cliente:</h3>
              {isLoadingMachines ? (
                <p className="text-gray-500">Cargando máquinas...</p>
              ) : clientMachines.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {clientMachines.map((machine) => (
                    <div key={machine.id} className="bg-gray-100 p-4 rounded-lg shadow-md border border-gray-200">
                      <h4 className="font-bold text-lg text-blue-800">{machine.name || 'Máquina sin nombre'}</h4>
                      <p className="text-gray-700"><strong>Modelo:</strong> {machine.model || 'No especificado'}</p>
                      <p className="text-gray-700"><strong>Serial:</strong> {machine.serialNumber || 'No especificado'}</p>
                      <p className="text-gray-700"><strong>Tipo:</strong> {machine.type || 'No especificado'}</p>
                      <div className="mt-2 flex justify-end">
                        <button 
                          onClick={() => removeMachineFromClient(machine.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        >
                          Quitar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No hay máquinas asignadas a este cliente</p>
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
    </>
  );
};

export default PortalAdmin;