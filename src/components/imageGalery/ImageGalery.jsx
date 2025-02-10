
import PropTypes from "prop-types";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const ImageGallery = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 5 < images.length ? prev + 5 : 0));
  };

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto p-4">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800">
      Nuestros productos
    </h2>

    <div className="flex flex-col items-center gap-6 mt-6 w-full">
      {/* Contenedor de imágenes con scroll fluido en móviles */}
      <div className="flex gap-4 overflow-x-auto sm:overflow-hidden w-full justify-center px-4 snap-x snap-mandatory">
        {images.slice(index, index + 5).map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Producto ${idx + 1}`}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl object-cover shadow-xl transition-transform duration-300 hover:scale-110 snap-center"
          />
        ))}
      </div>

      {/* Botón con mejor estética */}
      <button
        className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-sky-500 to-blue-700 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-all"
        onClick={handleNext}
      >
        <span className="hidden sm:inline"></span>
        <ChevronRight size={24} />
      </button>
    </div>
  </div>
);
};



ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageGallery;
