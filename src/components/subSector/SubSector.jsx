import ImageGallery from "../imageGalery/ImageGalery";
import UpScreen from "../upscreen/UpScreen";
import { useState } from "react";


const SubSector = ({
  image,
  typeOfSubSector,
  description,
  title,
  descriptionText,
  images,
}) => {
 
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
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
  {/* Hero Section */}
  <div className="relative overflow-hidden">
    <UpScreen
      pathImage={image}
      title={typeOfSubSector}
      paragraph={description}
    />
  </div>

  {/* Main Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
    {/* Title Section */}
    <div className="text-center mb-10 md:mb-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight inline-block relative pb-3 px-6">
        {title}
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-1.5 bg-sky-600 rounded-full"></span>
      </h1>
    </div>

    {/* Description Section */}
    <div className="max-w-3xl mx-auto mb-12 md:mb-20">
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
        {descriptionText}
      </p>
    </div>

    {/* Image Gallery */}
    <div className="mb-12 md:mb-20">
      <ImageGallery images={images} />
    </div>

    {/* Full Width Image */}
    <div className="rounded-xl shadow-xl overflow-hidden mb-12 md:mb-20">
      <img 
        src="/subsector-imgs/imagen-subsectores-esquema_.jpg" 
        alt="Esquema de subsectores" 
        className="w-full h-auto object-cover transition-all duration-300 hover:scale-105"
      />
    </div>
  </div>
</div>
      <div
        className="relative w-full h-full overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Imagen desenfocada */}
        <img
          src="/img/imagen1.jpg"
          alt="Image Blur"
          className="w-full h-full object-cover md:filter md:blur-sm"
        />

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
        {[
          { top: "30%", left: "25%" },
          { top: "40%", left: "75%" },
          { top: "50%", left: "50%" },
        ].map((pos, index) => {
          const id = index + 1;
          return (
            <div key={id}>
              <button
                onClick={() => togglePopup(id)}
                className="absolute bg-sky-600 text-white w-12 h-12 flex items-center justify-center animate-pulse rounded-full hover:scale-110 hidden sm:block"
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
      
    </>
  );
};

export default SubSector;
