import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    window.open("https://wa.me/3413708391", "_blank");
  };
  const { t } = useTranslation();
  return (
    <div>
      {/* Botón de WhatsApp */}
      <button
        onClick={handleClick}
        className="fixed bottom-4 right-20 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-5 rounded-full border-hidden shadow-lg transition-transform transform hover:scale-125 z-40"
        aria-label="WhatsApp"
      >
        <i className="fab fa-whatsapp text-3xl sm:text-5xl"></i>
      </button>

      {/* Botón de contacto */}
      <button
        className="fixed bottom-4 right-40 sm:bottom-8 sm:right-8 md:bottom-12 md:right-40 text-white bg-sky-500 rounded hover:bg-blue-700 p-3 sm:p-5 border-hidden shadow-lg transition-transform transform hover:scale-125 z-50 animate-bounce md:text-lg lg:text-xl "
        onClick={() => setIsOpen(true)}
      >
        {t("home.fixedButton")}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded p-6 shadow-lg w-96">
            <button
              className="absolute top-2 right-2 bg-white text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold flex justify-center items-center">
              ¡CONTACTANOS!
            </h2>
            <p className="mt-4 flex justify-center items-center">
              Elija un medio de contacto.
            </p>
            <div className="flex flex-col">
              <button
                className="mt-6 px-4 py-2 text-white bg-sky-500 rounded hover:bg-sky-600"
                onClick={() => {
                  navigate("/contact");
                  setIsOpen(false);
                }}
              >
                Formulario de Contacto
              </button>

              <button className="mt-6 px-4 py-2 text-white bg-green-500 hover:bg-green-600">
                <a
                  className="text-white"
                  href="https://wa.me/3413708391"
                  target="_blank"
                >
                  WhatsApp
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
