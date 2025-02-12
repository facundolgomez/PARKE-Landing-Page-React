const SubMachineButton = ({ subMachine, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white text-blue-500 px-4 py-2 rounded-md m-1 w-full text-sm 
             hover:bg-blue-600 transition-all"
    >
      {subMachine}
    </button>
  );
};

export default SubMachineButton;
