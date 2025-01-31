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
  "../../../public/img/logos-clientes/bruning.png",
  "../../../public/img/logos-clientes/bunge.png",
  "../../../public/img/logos-clientes/combusnort.png",
  "../../../public/img/logos-clientes/conecar.jpg",
  "../../../public/img/logos-clientes/coop-mp.jpg",
  "../../../public/img/logos-clientes/coop-posse.jpg",
  "../../../public/img/logos-clientes/coopar.jpg",
  "../../../public/img/logos-clientes/cotagro.png",
  "../../../public/img/logos-clientes/danes.jpg",
  "../../../public/img/logos-clientes/dawi.jpg",
  "../../../public/img/logos-clientes/dekalb.jpg",
  "../../../public/img/logos-clientes/engormax.jpg",
  "../../../public/img/logos-clientes/gea.png",
  "../../../public/img/logos-clientes/generamas.jpg",
  "../../../public/img/logos-clientes/grupo-cavigliasso.jpg",
  "../../../public/img/logos-clientes/hoffmann.png",
  "../../../public/img/logos-clientes/huruma.jpg",
  "../../../public/img/logos-clientes/jabonera-cda-rosquin.jpg",
  "../../../public/img/logos-clientes/jarama.png",
  "../../../public/img/logos-clientes/jose-cartellone.jpg",
  "../../../public/img/logos-clientes/la-aurora.jpg",
  "../../../public/img/logos-clientes/la-riojana.jpg",
  "../../../public/img/logos-clientes/laganadera-ramirez.png",
  "../../../public/img/logos-clientes/lar.png",
  "../../../public/img/logos-clientes/latour.jpg",
  "../../../public/img/logos-clientes/lawter.png",
  "../../../public/img/logos-clientes/lc.png",
  "../../../public/img/logos-clientes/lisal.jpg",
  "../../../public/img/logos-clientes/lobar.jpg",
  "../../../public/img/logos-clientes/lorenzatti.jpg",
  "../../../public/img/logos-clientes/mafisa.jpg",
  "../../../public/img/logos-clientes/mani-king.png",
  "../../../public/img/logos-clientes/maniagro.jpg",
  "../../../public/img/logos-clientes/manisel.png",
  "../../../public/img/logos-clientes/mbs.jpg",
  "../../../public/img/logos-clientes/molcasa.png",
  "../../../public/img/logos-clientes/molino-cañuelas.jpg",
  "../../../public/img/logos-clientes/molinos-ala.jpg",
  "../../../public/img/logos-clientes/monsanto.jpg",
  "../../../public/img/logos-clientes/navas.jpg",
  "../../../public/img/logos-clientes/nuseed.png",
  "../../../public/img/logos-clientes/nutrifrost.jpg",
  "../../../public/img/logos-clientes/nutriser.jpg",
  "../../../public/img/logos-clientes/olam.png",
  "../../../public/img/logos-clientes/olega.jpg",
  "../../../public/img/logos-clientes/pdm.jpg",
  "../../../public/img/logos-clientes/pelayo.jpg",
  "../../../public/img/logos-clientes/pioneer.png",
  "../../../public/img/logos-clientes/premin.png",
  "../../../public/img/logos-clientes/prochem.jpg",
  "../../../public/img/logos-clientes/prodeman.jpg",
  "../../../public/img/logos-clientes/produsem.png",
  "../../../public/img/logos-clientes/rexam.png",
  "../../../public/img/logos-clientes/ricedal.jpg",
  "../../../public/img/logos-clientes/rotoplas.png",
  "../../../public/img/logos-clientes/rovial.png",
  "../../../public/img/logos-clientes/satus ager.png",
  "../../../public/img/logos-clientes/seedar.png",
  "../../../public/img/logos-clientes/sepor.jpg",
  "../../../public/img/logos-clientes/servagrop.png",
  "../../../public/img/logos-clientes/shea-white.png",
  "../../../public/img/logos-clientes/sl-cereales.jpg",
  "../../../public/img/logos-clientes/snaider.jpg",
  "../../../public/img/logos-clientes/spraytec.png",
  "../../../public/img/logos-clientes/sps.png",
  "../../../public/img/logos-clientes/syngenta.png",
  "../../../public/img/logos-clientes/systel.jpg",
  "../../../public/img/logos-clientes/tecnoseeds.png",
  "../../../public/img/logos-clientes/teknal.jpg",
  "../../../public/img/logos-clientes/vicentin.jpg",
  "../../../public/img/logos-clientes/yara.png",
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
          <h2 className="text-3xl py-5 font-bold text-gray-900 relative inline-block">
            ALGUNOS DE NUESTROS CLIENTES
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
