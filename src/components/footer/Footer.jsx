const Footer = () => {
  return (
    <footer className="bg-[#020c21] w-full">
      <div className="w-full mx-auto max-w-screen-xl p-6 md:flex md:items-start md:justify-between">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <img
            src="../../../public/logos/logoFooter.png"
            alt="Logo PARKE SRL"
            width={200}
            className="mx-auto md:mx-0"
          />
        </div>

        {/* Más sobre nosotros */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Más sobre nosotros
          </h4>
          <ul className="text-sm text-gray-500 dark:text-gray-400">
            <li className="mb-2 hover:underline cursor-pointer">La empresa</li>
            <li className="mb-2 hover:underline cursor-pointer">Novedades</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Contacto
          </h4>
          <ul className="text-sm text-gray-500 dark:text-gray-400">
            <li className="mb-2 hover:underline">
              Ruta AO12 Km 47.6Roldán | Santa Fe | Argentina
            </li>
            <li className="mb-2 hover:underline">+54 3416456481</li>
            <li className="mb-2 hover:underline">info@parke.com.ar</li>
            <li className="mb-2">Lunes a viernes 8:00 a 17:00 hs</li>
          </ul>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="w-full mt-6 border-t border-gray-200 dark:border-gray-700 pt-4 text-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          © 2025{" "}
          <a href="https://parke.com/" className="hover:underline">
            PARKE SRL™
          </a>
          . Todos los derechos reservados.
        </span>
      </div>
      <div className="w-full py-2 text-center text-white">
        Desarrollado por FGA Software
      </div>
    </footer>
  );
};

export default Footer;

