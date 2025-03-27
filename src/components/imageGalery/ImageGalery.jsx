import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const ImageGallery = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(5);
  const [isHovering, setIsHovering] = useState(false);

  // Ajustar número de imágenes visibles según el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleImages(3);
      } else if (window.innerWidth < 768) {
        setVisibleImages(4);
      } else {
        setVisibleImages(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setIndex((prev) => (prev + visibleImages < images.length ? prev + visibleImages : 0));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - visibleImages >= 0 ? prev - visibleImages : images.length - visibleImages));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 inline-block">
          Nuestros Productos
        </h2>
        <div className="mt-2 h-1 w-20 mx-auto bg-gradient-to-r from-blue-400 to-sky-300 rounded-full"></div>
      </div>

      <div 
        className="relative group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Botón anterior */}
        <button
          onClick={handlePrev}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'} hover:bg-white`}
        >
          <ChevronLeft className="text-blue-600" size={28} />
        </button>

        {/* Contenedor de imágenes sin scrollbar */}
        <div className="flex overflow-hidden gap-6 px-2 py-4 justify-center">
          {images.slice(index, index + visibleImages).map((img, idx) => (
            <div key={idx} className="relative flex-shrink-0 group">
              <img
                src={img}
                alt={`Producto ${idx + 1}`}
                className="w-32 h-32 sm:w-52 sm:h-52 object-cover rounded-xl shadow-lg transition-all duration-500 group-hover:rounded-2xl group-hover:shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium text-lg">Producto {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Botón siguiente */}
        <button
          onClick={handleNext}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'} hover:bg-white`}
        >
          <ChevronRight className="text-blue-600" size={28} />
        </button>
      </div>

      {/* Indicadores de paginación */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.ceil(images.length / visibleImages) }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i * visibleImages)}
            className={`w-3 h-3 rounded-full transition-all ${index >= i * visibleImages && index < (i + 1) * visibleImages ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
            aria-label={`Ir a página ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageGallery;