import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../services/AuthenticationContext";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [timer, setTimer] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useContext(AuthenticationContext);
  const [menuServicesOpen, setMenuServicesOpen] = useState(false);

  const navigate = useNavigate();

  const handleScroll = () => {
    const isScrolling = window.scrollY > 0;
    setScrolling(isScrolling);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timer) {
      clearTimeout(timer); // Si el temporizador existe, lo cancelamos
    }
    setMenuOpen(true); // Abre el menú inmediatamente
  };

  const handleMouseLeave = () => {
    const newTimer = setTimeout(() => {
      setMenuOpen(false); // Cierra el menú después del tiempo de espera
    }, 300); // 500ms es el retraso, puedes ajustarlo

    setTimer(newTimer); // Guardamos el temporizador en el estado
  };

  const solutionsHandler = () => {
    navigate("/solutions");
  };

  const dashboardHandler = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const newsHandler = () => {
    navigate("/news");
  };

  const contactHandler = () => {
    navigate("/contact");
  };

  const companyHandler = () => {
    navigate("/company");
  };

  const clientHandler = () => {
    if (!user) {
      // Si no está autenticado, redirigir al login
      navigate("/login");
    } else {
      // Si está autenticado, redirigir a portalCliente
      navigate("/portalCliente");
    }
  };
  const MobileMenuHandler = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="flex flex-col shadow-md bg-white fixed w-full top-0 left-0 z-50 transition-all duration-300">
        <div
          className={`bg-sky-600 h-1 transition-all duration-300 ${
            scrolling ? "pt-0" : "pt-2"
          }`}
        />
        <div
          className={`flex justify-around items-center transition-all duration-300 ${
            scrolling ? "pt-0" : "pt-2"
          }`}
        >
          <button className="bg-white border-hidden">
            <img
              onClick={dashboardHandler}
              src="../../../public/logos/Logo-header.png"
              width={250}
              className="min-h-10 min-w-40"
              alt="Logo"
            />
          </button>
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={solutionsHandler}
              className="bg-transparent border-hidden py-4 text-sky-600 relative hover:text-sky-600 transition-colors duration-300 hidden md:flex"
            >
              SOLUCIONES
              <span className="absolute inset-x-0 bottom-0 h-1 bg-sky-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </button>

            {/* Menú desplegable */}
            {menuOpen && (
              <div
                className="absolute left-0 mt-2 bg-white text-sky-600 shadow-lg rounded-md z-50 "
                style={{ width: "500px" }}
              >
                <div className="grid grid-cols-2 p-4 gap-4">
                  <div>
                    <div className="flex justify-center">
                      <h3 className="font-bold flex justify-center p-1">
                        <p className="bg-sky-600 text-white px-2 me-1 rounded-md">
                          SECTORES
                        </p>
                        PRINCIPALES
                      </h3>
                    </div>
                    <ul>
                      <li className="px-4 py-2 hover:bg-sky-100 cursor-pointer">
                        SECTOR 1
                      </li>
                      <li className="px-4 py-2 hover:bg-sky-100 cursor-pointer">
                        SECTOR 2
                      </li>
                      <li className="px-4 py-2 hover:bg-sky-100 cursor-pointer">
                        SECTOR 3
                      </li>
                      <li className="px-4 py-2 hover:bg-sky-100 cursor-pointer">
                        SECTOR 4
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex justify-center">
                      <h3 className="font-bold flex justify-center p-1">
                        <p className="bg-sky-600 text-white px-2 me-1 rounded-md">
                          TIPOS
                        </p>{" "}
                        DE MAQUINAS
                      </h3>
                    </div>
                    <ul>
                      <li className="px-4 py-2 hover:bg-sky-100 cursor-pointer">
                        MAQ 1
                      </li>
                      <li className="px-4 py-2 hover:bg-sky-100 cursor-pointer">
                        MAQ 2
                      </li>
                      <li className="px-4 py-2 hover:bg-sky-100 cursor-pointer">
                        MAQ 3
                      </li>
                      <li className="px-4 py-2 hover:bg-sky-100 cursor-pointer">
                        MAQ 4
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={newsHandler}
            className="bg-transparent border-hidden py-4 text-sky-600 relative group hover:text-sky-600 hidden md:flex"
          >
            NOVEDADES
            <span className="absolute inset-x-0 bottom-0 h-1 bg-sky-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </button>
          <button
            onClick={companyHandler}
            className="bg-transparent border-hidden py-4 text-sky-600 relative group hover:text-sky-600 hidden md:flex"
          >
            LA EMPRESA
            <span className="absolute inset-x-0 bottom-0 h-1 bg-sky-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </button>
          <button
            onClick={contactHandler}
            className="bg-transparent border-hidden py-4 text-sky-600 relative group hover:text-sky-600 hidden md:flex"
          >
            CONTACTO
            <span className="absolute inset-x-0 bottom-0 h-1 bg-sky-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </button>

          <div
            className="relative"
            onMouseEnter={() => setMenuServicesOpen(true)}
            onMouseLeave={() => setMenuServicesOpen(false)}
          >
            <button className="bg-transparent border-none py-4 text-sky-600 relative hover:text-sky-600 flex items-center">
              SERVICIOS
              <span className={`absolute inset-x-0 bottom-0 h-1 bg-sky-600 transition-transform duration-300 ${menuServicesOpen ? "scale-x-100" : "scale-x-0"}`} 
              />
            </button>

            {menuServicesOpen && (
              <div className="absolute left-0 mt-2 bg-white text-sky-600 shadow-lg rounded-md z-50 opacity-100 scale-y-100 transform transition-all duration-300 origin-top w-[300px]">
                <ul>
                  <li className="px-4 py-2 hover:bg-sky-100 cursor-pointer">
                    PORTAL CLIENTES
                  </li>
                  <li className="px-4 py-2 hover:bg-sky-100 cursor-pointer">
                    SERVICIO TÉCNICO
                  </li>
                </ul>
              </div>
            )}
          </div>

          <button className="bg-sky-600 text-white rounded-full border-hidden py-1 px-4 hover:bg-sky-500 transform transition-transform duration-300 hover:scale-110 hidden md:flex">
            COTIZÁ GRATIS
          </button>
          <div className="bg-white rounded text-black">
            <FontAwesomeIcon icon={faGlobe} className="text-black" />
            <select className="border border-black bg-white text-black rounded">
              <option>ESP</option>
              <option>ENG</option>
              <option>POR</option>
            </select>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={MobileMenuHandler}
              className="text-sky-600 bg-transparent border-none p-4 z-50"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            {mobileMenuOpen && (
              <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-40 flex flex-col p-4">
                <div className="flex flex-col p-4">
                  <button
                    onClick={solutionsHandler}
                    className="py-2 text-sky-600 bg-white hover:bg-sky-100"
                  >
                    SOLUCIONES
                  </button>
                  <button
                    onClick={newsHandler}
                    className="py-2 text-sky-600 bg-white hover:bg-sky-100"
                  >
                    NOVEDADES
                  </button>
                  <button
                    onClick={companyHandler}
                    className="py-2 text-sky-600 bg-white hover:bg-sky-100"
                  >
                    LA EMPRESA
                  </button>
                  <button
                    onClick={contactHandler}
                    className="py-2 text-sky-600 bg-white hover:bg-sky-100"
                  >
                    CONTACTO
                  </button>
                  <button
                    onClick={clientHandler}
                    className="py-2 text-sky-600 bg-white hover:bg-sky-100"
                  >
                    SERVICIOS
                  </button>

                  <button className="bg-sky-600 text-white rounded-full py-2 px-4 mt-2">
                    COTIZÁ GRATIS
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
