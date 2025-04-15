const SubMachineButton = ({ subMachine, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full px-4 py-3 my-2 bg-transparent border-sky-600 text-white uppercase font-bold rounded-lg shadow-md transition-all duration-300 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-600 hover:scale-110"
    >
      {subMachine}
    </button>
  );
};

export default SubMachineButton;
