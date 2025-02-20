import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";


const ClientCarouselBySector = ({ clients }) => {
  const { t } = useTranslation();

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
          <h2 className="text-3xl py-5 font-bold text-gray-900 relative inline-block">
            {t("home.customSolutions.textAboutSomeOfOurClients")}
            <span className="block w-16 h-1 bg-sky-600 mt-1"></span>
          </h2>
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
          {clients.map((logo, index) => (
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

export default ClientCarouselBySector;
