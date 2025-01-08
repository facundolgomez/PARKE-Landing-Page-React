

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/3413708391", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-5 rounded-full border-hidden shadow-lg transition-transform transform hover:scale-125 z-50"
      aria-label="WhatsApp"
    >
      <i className="fab fa-whatsapp text-3xl sm:text-5xl"></i>
    </button>
  );
};

export default WhatsAppButton;