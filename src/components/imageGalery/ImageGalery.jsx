import { useState } from "react";
import PropTypes from "prop-types";

const ImageGallery = ({ images = [] }) => {
  const [index, setIndex] = useState(0);
  const imagesPerPage = 5;

  const handleNext = () => {
    if (index + imagesPerPage < images.length) {
      setIndex(index + imagesPerPage);
    } else {
      setIndex(0); // si llega al final reinicia
    }
  };

  return (
    <div className="text-center">
      <div className="flex gap-2 justify-center">
        {images.slice(index, index + 5).map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Producto ${idx + 1}`}
            className="w-20 h-20 object-cover"
          />
        ))}
      </div>
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={handleNext}
      >
        Siguiente
      </button>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageGallery;
