import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
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
            {t("home.footer.titles.moreAboutUs")}
          </h4>
          <ul className="text-sm text-gray-500 dark:text-gray-400">
            {t("home.footer.sections.moreAboutUs", { returnObjects: true }).map(
              (item, index) => (
                <li key={index} className="mb-2 hover:underline cursor-pointer">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
            {t("home.footer.titles.contact")}
          </h4>
          <ul className="text-sm text-gray-500 dark:text-gray-400">
            {Object.entries(
              t("home.footer.sections.contact", { returnObjects: true })
            ).map(([key, value], index) => (
              <li key={index} className="mb-2 hover:underline cursor-pointer">
                {value}
              </li>
            ))}
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
          . {t("home.footer.copyright.text")}.
        </span>
      </div>
      <div className="w-full py-2 text-center text-white">
        {t("home.footer.developer.text")}
      </div>
    </footer>
  );
};

export default Footer;
