import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";

const clientLogos = [
  "../../../public/img/logos-clientes/aca.jpg",
  "../../../public/img/logos-clientes/adeco-agro.jpg",
  "../../../public/img/logos-clientes/afa.jpg",
  "../../../public/img/logos-clientes/afb.jpg",
  "../../../public/img/logos-clientes/agd.png",
  "../../../public/img/logos-clientes/aimar.jpg",
  "../../../public/img/logos-clientes/algodonera-avellaneda.jpg",
  "../../../public/img/logos-clientes/alimental.jpg",
  "../../../public/img/logos-clientes/aniceto-gomez.jpg",
  "../../../public/img/logos-clientes/armada.jpg",
  "../../../public/img/logos-clientes/azul-jacaranda.jpg",
  "../../../public/img/logos-clientes/berandebi.png",
];

const ClientCarousel = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.swiper.slideNext();
      }
    }, 1500);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);

  return (
    <section className="our-client sectpad">
      <div className="container clearfix">
        <div className="section_header">
          <h2 className="text-2xl text-pretty">ALGUNOS DE NUESTROS CLIENTES</h2>
          <hr />
        </div>
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={6}
          loop={true}
          breakpoints={{
            320: {
              // Pantallas pequeñas (móviles)
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              // Tablets
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              // Pantallas medianas
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1440: {
              // Pantallas grandes
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }}
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img
                src={logo}
                alt={`Client ${index}`}
                height="131"
                width="178"
                className="flex items-center min-h-32 min-w-44"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Flechas de navegación manuales */}
      </div>
    </section>
  );
};

export default ClientCarousel;
