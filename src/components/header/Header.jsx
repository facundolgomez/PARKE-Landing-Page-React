import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AuthenticationContext } from "../services/AuthenticationContext";
import i18n from "../../../i18next.js";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [timer, setTimer] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Estado para pantallas de teléfono
  const [servicesMobileMenuOpen, setServicesMobileMenuOpen] = useState(false); // Estado para el menú de SERVICIOS
  const { user } = useContext(AuthenticationContext);
  const [menuServicesOpen, setMenuServicesOpen] = useState(false);
  const { t } = useTranslation();
  const [selectedSector, setSelectedSector] = useState(null); //recien agregado
  const [selectedMachine, setSelectedMachine] = useState(null); //recien agregado
  const navigate = useNavigate();

  const handleScroll = () => {
    const isScrolling = window.scrollY > 0;
    setScrolling(isScrolling);
  };

  // Función para cambiar el idioma
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  // Handler para el cambio de idioma
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnterSolutions = () => {
    if (timer) {
      clearTimeout(timer); // Si el temporizador existe, lo cancelamos
    }
    setMenuOpen(true); // Abre el menú inmediatamente
  };

  const handleMouseLeaveSolutions = () => {
    const newTimer = setTimeout(() => {
      setMenuOpen(false); // Cierra el menú después del tiempo de espera
    }, 300); // 500ms es el retraso, puedes ajustarlo

    setTimer(newTimer); // Guardamos el temporizador en el estado
  };

  const handleMouseEnterServices = () => {
    if (timer) {
      clearTimeout(timer); // Si el temporizador existe, lo cancelamos
    }
    setMenuServicesOpen(true); // Abre el menú inmediatamente
  };

  const handleMouseLeaveServices = () => {
    const newTimer = setTimeout(() => {
      setMenuServicesOpen(false); // Cierra el menú después del tiempo de espera
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

  const toggleServicesMobileMenu = () => {
    setServicesMobileMenuOpen(!servicesMobileMenuOpen); // Alternar la visibilidad del menú
  };

  // Obtenemos la lista de sectores y subsectores
  const solutionsBySectors = t(
    "home.customSolutions.typeOfSolution.solutionsBySectors",
    { returnObjects: true }
  );

  const { items, subSectorButton } = solutionsBySectors;

  // Función para manejar el click en un sector
  const handleSectorClick = (sector) => {
    setSelectedSector(selectedSector === sector ? null : sector);
  };

  // Función para manejar el click en un subsector y navegar
  const handleSubsectorClick = (subsector) => {
    navigate(`/subsector/${subsector.toLowerCase().replace(/\s+/g, "-")}`);
  };

  //escribir aca para las maquinas

  const solutionsByMachineType = t(
    "home.customSolutions.typeOfSolution.solutionsByMachineType",
    { returnObjects: true }
  );

  const handleMachineClick = (machine) => {
    setSelectedMachine(selectedMachine === machine ? null : machine);
  };

  const handleSubMachineClick = (currentMachine, subMachine) => {
    const formattedMachine = toCamelCase(currentMachine);
    const formattedSubMachine = toCamelCase(subMachine);

    // Navegar a la ruta correctamente formateada
    navigate(`/machines/${formattedMachine}/${formattedSubMachine}`);
  };

  const toCamelCase = (str) => {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9\s_-]/g, "")
      .split(/[\s_-]+/)
      .map((word, index) =>
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");
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
            onMouseEnter={handleMouseEnterSolutions}
            onMouseLeave={handleMouseLeaveSolutions}
          >
            <button
              onClick={solutionsHandler}
              className="bg-transparent border-hidden py-4 text-sky-600 relative hover:text-sky-600 transition-colors duration-300 hidden md:flex"
            >
              {t("home.homeHeader.solutions")}
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
                          {t(
                            "home.homeHeader.titlesOfSolutions.mainSectors.first"
                          )}
                        </p>
                        {t(
                          "home.homeHeader.titlesOfSolutions.mainSectors.second"
                        )}
                      </h3>
                    </div>
                    <ul>
                      {items.map((sector, index) => {
                        // Convertir el nombre del sector a la clave usada en `subSectorButton`
                        const sectorKey = sector
                          .toLowerCase()
                          .normalize("NFD") // Descompone caracteres con tildes
                          .replace(/[\u0300-\u036f]/g, "") // Elimina los diacríticos (acentos, tildes)
                          .replace(/\s+/g, ""); // Elimina espacios

                        return (
                          <li
                            key={index}
                            className="px-4 py-2 hover:bg-sky-100 cursor-pointer rounded-md"
                            onClick={() => handleSectorClick(sectorKey)}
                          >
                            {sector.toUpperCase()}
                            {selectedSector === sectorKey &&
                              subSectorButton[sectorKey] && (
                                <ul className="ml-4 mt-2 border-l pl-4">
                                  {subSectorButton[sectorKey].map(
                                    (subsector, subIndex) => (
                                      <li
                                        key={subIndex}
                                        className="px-3 py-1 hover:bg-white cursor-pointer rounded-md"
                                        onClick={() =>
                                          handleSubsectorClick(subsector)
                                        }
                                      >
                                        {subsector}
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-center">
                      <h3 className="font-bold flex justify-center p-1">
                        <p className="bg-sky-600 text-white px-2 me-1 rounded-md">
                          {t(
                            "home.homeHeader.titlesOfSolutions.typesOfMachines.first"
                          )}
                        </p>{" "}
                        {t(
                          "home.homeHeader.titlesOfSolutions.typesOfMachines.second"
                        )}
                      </h3>
                    </div>
                    <ul>
                      {solutionsByMachineType.items.map((machine, index) => {
                        const machineKey = machine
                          .toLowerCase()
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")
                          .replace(/\s+/g, "");

                        return (
                          <li
                            key={index}
                            className="px-4 py-2 hover:bg-sky-100 cursor-pointer"
                            onClick={() => handleMachineClick(machineKey)}
                          >
                            {machine.toUpperCase()}
                            {selectedMachine === machineKey &&
                              solutionsByMachineType.subMachineButton[
                                machineKey
                              ] && (
                                <ul className="ml-4 mt-2 border-l pl-4">
                                  {solutionsByMachineType.subMachineButton[
                                    machineKey
                                  ].map((subMachine, subIndex) => (
                                    <li
                                      key={subIndex}
                                      className="px-3 py-1 hover:bg-gray-200 cursor-pointer"
                                      onClick={() =>
                                        handleSubMachineClick(
                                          machineKey,
                                          subMachine
                                        )
                                      }
                                    >
                                      {subMachine}
                                    </li>
                                  ))}
                                </ul>
                              )}
                          </li>
                        );
                      })}
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
            {t("home.homeHeader.news")}
            <span className="absolute inset-x-0 bottom-0 h-1 bg-sky-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </button>
          <button
            onClick={companyHandler}
            className="bg-transparent border-hidden py-4 text-sky-600 relative group hover:text-sky-600 hidden md:flex"
          >
            {t("home.homeHeader.company")}
            <span className="absolute inset-x-0 bottom-0 h-1 bg-sky-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </button>
          <button
            onClick={contactHandler}
            className="bg-transparent border-hidden py-4 text-sky-600 relative group hover:text-sky-600 hidden md:flex"
          >
            {t("home.homeHeader.contact")}
            <span className="absolute inset-x-0 bottom-0 h-1 bg-sky-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </button>

          <div
            className="relative"
            onMouseEnter={handleMouseEnterServices}
            onMouseLeave={handleMouseLeaveServices}
          >
            <button className="bg-transparent border-none py-4 text-sky-600 relative hover:text-sky-600 items-center hidden md:flex">
              {t("home.homeHeader.services")}
              <span
                className={`absolute inset-x-0 bottom-0 h-1 bg-sky-600 transition-transform duration-300 ${
                  menuServicesOpen ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>

            {menuServicesOpen && (
              <div className="absolute left-0 mt-2 bg-white text-sky-600 shadow-lg rounded-md z-50 opacity-100 scale-y-100 transform transition-all duration-300 origin-top w-[300px]">
                <ul>
                  <li
                    className="px-4 py-2 hover:bg-sky-100 cursor-pointer"
                    onClick={() => navigate("/portalCliente")}
                  >
                    PORTAL CLIENTES
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-sky-100 cursor-pointer"
                    onClick={() => navigate("/technicalService")}
                  >
                    SERVICIO TÉCNICO
                  </li>
                </ul>
              </div>
            )}
          </div>

          <button className="bg-sky-600 text-white rounded-full border-hidden py-1 px-4 hover:bg-sky-500 transform transition-transform duration-300 hover:scale-110 hidden md:flex">
            {t("home.homeHeader.quote")}
          </button>
          <div className="bg-white rounded text-black">
            <FontAwesomeIcon icon={faGlobe} className="text-black" />
            <select
              className="border border-black bg-white text-black rounded"
              onChange={handleLanguageChange} // Cambia el idioma cuando se selecciona una opción
              value={i18n.language} // Esto mantiene el valor seleccionado correctamente
            >
              <option value="es">ESP</option>
              <option value="en">ENG</option>
              <option value="pt">POR</option>
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
                    onClick={toggleServicesMobileMenu}
                    className="py-2 text-sky-600 bg-white hover:bg-sky-100"
                  >
                    SERVICIOS
                  </button>
                  {/* Menú desplegable de SERVICIOS */}
                  {servicesMobileMenuOpen && (
                    <div className="pl-4">
                      <button
                        onClick={clientHandler}
                        className="py-2 text-sky-600 bg-white hover:bg-sky-100 w-full text-left"
                      >
                        Portal Clientes
                      </button>
                      <button
                        onClick={() => navigate("/technicalService")}
                        className="py-2 text-sky-600 bg-white hover:bg-sky-100 w-full text-left"
                      >
                        Servicio Técnico
                      </button>
                    </div>
                  )}

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
