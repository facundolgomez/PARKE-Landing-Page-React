import Video from "../video/Video";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container relative w-full h-[500px]">
        <h1 className="absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl z-10 font-medium flex flex-col items-center space-y-4">
          <span>SOLUCIONES PARA EMBOLSADO,</span>
          <span>PALETIZADO, ENVOLTURA y </span>
          <span>TRANSPORTE</span>
        </h1>

        <div className="flex justify-center items-center absolute bottom-[-150px] w-full z-10 space-x-4">
          <button className="bg-[#6cdcf3] w-[250px] h-[50px] text-white font-bold whitespace-nowrap">
            NUESTROS PRODUCTOS
          </button>
          <button
            onClick={() => window.open("https://wa.me/3413708391", "_blank")}
            className="bg-[#25D366] w-[200px] h-[50px] text-white font-bold"
          >
            WHATSAPP
          </button>
        </div>

        <Video />
      </div>
    </>
  );
};

export default Dashboard;
