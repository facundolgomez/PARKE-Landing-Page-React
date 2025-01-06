const Footer = () => {
  return (
    <div className="w-full flex justify-center items-start justify-around h-40  bg-[#030C20] text-white mt-20 pt-12 pb-96 text-xl">
      <div>
        <button className="flex basis-52 bg-[#030C20]">
          <img
            src="../../../public/logos/logoFooter.png"
            width={250}
            alt="Logo"
          />
        </button>
      </div>

      <div>MAS SOBRE NOSOTROS</div>
      <div>CONTACTO</div>
    </div>
  );
};

export default Footer;
