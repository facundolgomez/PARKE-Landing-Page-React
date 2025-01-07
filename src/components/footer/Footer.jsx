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
    <div className="w-full flex flex-col sm:flex-row justify-center items-start sm:justify-around bg-[#030C20] text-white pt-6 pb-6 sm:pt-12 sm:pb-12 text-base sm:text-lg sm:gap-x-8 relative">
      <div>
        <button onClick={handleLogoClick} className="flex bg-[#030C20]">
          <img
            src="../../../public/logos/logoFooter.png"
            className="w-40 sm:w-64"
            alt="Logo"
          />
        </button>
      </div>

      <ul className="mt-4 sm:mt-0 flex flex-col gap-4 px-4 list-disc marker:text-white-400 ">
        <li className="no-hover  list-none font-bold">MAS SOBRE NOSOTROS</li>
        <li className="hover:text-[#6cdcf3] cursor-pointer">Quiénes somos</li>
        <li className="hover:text-[#6cdcf3] cursor-pointer">Noticias</li>
        <li className="hover:text-[#6cdcf3] cursor-pointer">
          Galeria de imagenes
        </li>
        <li className="hover:text-[#6cdcf3] cursor-pointer">
          Preguntas frecuentes
        </li>
      </ul>

      <ul className="mt-4 sm:mt-0 flex flex-col gap-4 list-disc marker:text-white-400 ">
        <li className="no-hover list-none font-bold">CONTACTO</li>
        <li>Ruta AO12 Km 47.6 Roldán | Santa Fe | Argentina</li>
        <li>
          <a
            className="no-underline text-[#6cdcf3]"
            href="https://wa.me/3413708391"
            target="_blank"
          >
            +54 3416456481
          </a>
        </li>
        <li>
          <a
            className="no-underline text-[#6cdcf3]"
            href="mailto:info@parkesrl.com.ar?body=My custom mail body"
          >
            info@parkesrl.com.ar
          </a>
        </li>
        <li>Lunes a viernes 8:00 a 17:00 hs</li>
      </ul>
      <p className="mt-auto text-sm text-gray-400 mt-4 sm:mt-0">
        © {new Date().getFullYear()} PARKE. Todos los derechos reservados.
      </p>
    </div>
  );
};

export default Footer;
