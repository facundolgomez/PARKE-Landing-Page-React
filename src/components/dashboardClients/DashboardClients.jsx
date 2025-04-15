const DashboardClients = () => {
  const machines = [
    { id: 1, name: "Embolsadora"},
    { id: 2, name: "Paletizadora"},
    { id: 3, name: "Envolvedora"},
  ];

  const handleMachineClick = (machineId) => {
    console.log(`Ver detalles de la máquina con ID: ${machineId}`);
  };

  return (
    <div className="p-32 font-sans">
      <h1 className="text-2xl font-bold mb-4 text-center">Portal de Clientes</h1>
      <h2 className="text-xl font-semibold mb-3">Mis Máquinas</h2>
      <div className="grid gap-4">
        {machines.map((machine) => (
          <div key={machine.id} className="border border-gray-300 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium">{machine.name}</h3>
            <button 
              onClick={() => handleMachineClick(machine.id)}
              className="mt-2 px-4 py-2 bg-sky-500 text-white rounded hover:bg-blue-600 transition"
            >
              Ver detalles
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardClients;
