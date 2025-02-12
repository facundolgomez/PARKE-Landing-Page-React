const MachineModal = ({ title, values, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold">{title}</h2>
        <ul className="mt-3">
          {Array.isArray(values) ? (
            values.length > 0 ? (
              values.map((machine, index) => (
                <li key={index}>
                  <strong>{machine}</strong>
                </li>
              ))
            ) : (
              <li>Sin datos</li>
            )
          ) : (
            Object.keys(values || {}).map((key) => (
              <li key={key}>
                <strong>{key}:</strong>{" "}
                {Array.isArray(values[key]) && values[key].length > 0
                  ? values[key].join(", ")
                  : "Sin datos"}
              </li>
            ))
          )}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default MachineModal;
