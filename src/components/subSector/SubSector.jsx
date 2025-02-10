import ImageGallery from "../imageGalery/ImageGalery";
import UpScreen from "../upscreen/UpScreen";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const SubSector = ({ image, typeOfSubSector, description, title, descriptionText, images }) => {
  
  const { t } = useTranslation();
  const [activePopup, setActivePopup] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const togglePopup = (id) => {
    setActivePopup((prev) => (prev === id ? null : id));
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <>
      <div>
        <UpScreen pathImage={image} title={typeOfSubSector} paragraph={description} />
      </div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <p>{descriptionText}</p>
      </div>
      <ImageGallery images={images} />
      <div className="w-full max-h-screen">
        <img src="/subsector-imgs/imagen-subsectores-esquema_.jpg" alt="" />
      </div>
      <div className="relative w-full h-full overflow-hidden" onMouseMove={handleMouseMove}>
        {/* Imagen desenfocada */}
        <img src="/img/imagen1.jpg" alt="Image Blur" className="w-full h-full object-cover md:filter md:blur-sm" />

        {/* Máscara del círculo */}
        <div
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, transparent, rgba(0, 0, 0, 0))`,
          }}
        ></div>

        {/* Imagen revelada */}
        <img
          src="/img/imagen1.jpg"
          alt="Image Revealed"
          className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
          style={{
            clipPath: `circle(150px at ${mousePosition.x}px ${mousePosition.y}px)`,
          }}
        />

        {/* Botones emergentes */}
        {[{ top: "30%", left: "25%" }, { top: "40%", left: "75%" }, { top: "50%", left: "50%" }].map((pos, index) => {
          const id = index + 1;
          return (
            <div key={id}>
              <button
                onClick={() => togglePopup(id)}
                className="absolute bg-sky-600 text-white w-12 h-12 flex items-center justify-center animate-pulse rounded-full hover:scale-110"
                style={{ top: pos.top, left: pos.left }}
              ></button>
              {activePopup === id && (
                <div
                  className="absolute bg-white border border-gray-300 rounded-lg shadow-lg p-4"
                  style={{
                    top: pos.top,
                    left: `calc(${pos.left} + 5%)`,
                  }}
                >
                  <p>Ventana emergente {id}</p>
                  <button
                    onClick={() => togglePopup(id)}
                    className="mt-2 px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Cerrar
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="w-full bg-gray-100 p-4 flex justify-center items-center h-30">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl">
          {/* Contenido de texto */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-slate-800 text-2xl md:text-4xl font-bold mb-2 md:mb-3">
              {t("home.customSolutions.customSolutionsText")}
            </h1>
            <p className="text-slate-700 text-sm md:text-base">
              {t("home.customSolutions.subtitleOfCustomSolutionsText")}
            </p>
          </div>

          {/* Botón */}
          <button className="mt-6 md:mt-0 bg-sky-600 text-white rounded-full py-2 px-6 text-sm md:text-base scale-100 md:scale-125 hover:bg-sky-500 transform transition-transform duration-300 hover:scale-110">
            {t("home.customSolutions.freeQuoteButton")}
          </button>
        </div>
      </div>
    </>
  );
};

export default SubSector;
