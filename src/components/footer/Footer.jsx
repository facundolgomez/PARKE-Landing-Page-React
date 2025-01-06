import { useNavigate, useLocation } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center items-start sm:justify-around bg-[#030C20] text-white mt-20 py-6 sm:py-12 text-lg sm:text-xl">
      <div>
        <button onClick={handleLogoClick} className="flex bg-[#030C20]">
          <img
            src="../../../public/logos/logoFooter.png"
            className="w-40 sm:w-64"
            alt="Logo"
          />
        </button>
      </div>

      <div className="mt-4 sm:mt-0">MAS SOBRE NOSOTROS</div>

      <div className="mt-4 sm:mt-0 flex flex-col gap-4">
        <div>CONTACTO</div>
        <div>Ruta AO12 Km 47.6 Roldán | Santa Fe | Argentina</div>
        <div>
          <a
            className="no-underline text-[#6cdcf3]"
            href="https://wa.me/3413708391"
            target="_blank"
          >
            +54 3416456481
          </a>
        </div>
        <div>
          <a
            className="no-underline text-[#6cdcf3]"
            href="mailto:info@parkesrl.com.ar?body=My custom mail body"
          >
            info@parkesrl.com.ar
          </a>
        </div>
        <div>Lunes a viernes 8:00 a 17:00 hs</div>
      </div>
    </div>
  );
};

export default Footer;
