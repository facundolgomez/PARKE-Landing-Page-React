import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import UpScreen from "../upscreen/UpScreen";
import ClientCarousel from "../clientCarousel/ClientCarousel";

const CompanyInfo = () => {
  return (
    <>
      <>
        <UpScreen
          pathImage={"../../../public/imagenes-de-fondo/imagen-la-empresa.jpg"}
          title={"La empresa"}
          paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
        <div className="flex justify-start bg-sky-600 h-auto my-2.5 flex-col items-center pt-4 pb-4 px-4 sm:px-8 relative">
          <div className="text-white text-4xl font-bold whitespace-nowrap">
            NUESTRA ACTIVIDAD
          </div>
          <div className="h-1 bg-white w-full mt-4"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-x-16 mt-6 w-full max-w-6xl mx-auto">

            <button className="bg-sky-600 border-hidden cursor-default transform transition-transform duration-300 hover:shadow-lg hover:scale-110">
              <div className="flex items-center justify-start">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-white text-4xl mr-4"
                />
                <p className="text-white mt-2">
                  Desarrollar, fabricar y poner en servicio, maquinas para
                  embolsado, paletizado, envoltura, transporte y accesorios
                </p>
              </div>
            </button>

            <button className="bg-sky-600 border-hidden transform transition-transform duration-300 hover:shadow-lg hover:scale-110">
              <div className="flex  items-center justify-end">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-white text-4xl mr-4"
                />
                <p className="text-white mt-2">
                  Poner en servicio y prestar atencion tecnica de todos los
                  equipos de pesaje que se nos soliciten, ademas de una produccion
                  de equipamiento estandar.
                </p>
              </div>
            </button>

            <button className="bg-sky-600 border-hidden transform transition-transform duration-300 hover:shadow-lg hover:scale-110">
              <div className="flex  items-center justify-start">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-white text-4xl mr-4"
                />
                <p className="text-white mt-2">
                  Desarrollar, fabricar y poner en servicio, diseños especiales
                  conforme la necesidad del cliente, diferenciandonos y aportando
                  asi, soluciones especificas al mercado.
                </p>
              </div>
            </button>

            <button className="bg-sky-600 border-hidden transform transition-transform duration-300 hover:shadow-lg hover:scale-110">
              <div className="flex items-center"> {/* Flexbox para alinear icono y texto */}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-white text-4xl mr-4" // Margen a la derecha del icono
                />
                <p className="text-white mt-2 flex-1"> {/* flex-1 para que el texto ocupe el espacio restante */}
                  Satisfacer todas las necesidades de cada uno de nuestros clientes, como
                  así también sostener la continua mejora de nuestros procesos productivos
                </p>
              </div>
            </button>

          </div>

        </div>


        <div className="px-6 py-20 sm:px-16 md:px-32 lg:px-48 xl:px-72 text-left">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
              NUESTRO OBJETIVO
              <span className="block w-16 h-1 bg-sky-600 mt-1"></span>
            </h2>
            <p className="mt-4 text-justify text-gray-700 leading-relaxed">
              Es nuestro compromiso, estar absolutamente compenetrados de las necesidades de nuestros clientes en cuanto al 
              requerimiento de tecnología para control de cargas, descargas, procesos de pesaje automático, embolsado automático, 
              sistemas de pesaje especiales, paletizado, envoltura y transporte de bolsas y palets, y procesos complementarios 
              a éstos que necesiten maquinaria adecuada de desarrollo especial. Para tales cuestiones, PARKE ha capacitado al 
              personal técnico encargado de asesorar y resolver situaciones de las más variadas, para que el cliente sea 
              beneficiado con la experiencia adquirida a través de más de 20 años en el mercado, instalando el equipamiento más 
              adecuado y cumpliendo con el objetivo asignado en el menor tiempo posible.
            </p>
            <p className="mt-4 text-justify text-gray-700 leading-relaxed">
              PARKE diseña, desarrolla y produce en su planta industrial todos los equipamientos que ofrece, y se provee de 
              elementos de neumática, hidráulica, actuadores, PLC’s, PC’s, de primera marca o marcas sugeridas por nuestro cliente 
              interesado en el producto, todo ello bajo normas de calidad exigidas no solo para el mercado local sino también para 
              el internacional.
            </p>
          </div>

          <hr className="mt-16"/>

          <div className="mt-3">
            <ClientCarousel/>
          </div>
        </div>

        <div className="h-32 w-full bg-gradient-to-t  from-sky-900 to-sky-600 py-4">
        <div className="flex flex-row justify-around items-center">
          <div className="flex flex-col">
            <h1 className=" text-white text-2xl md:text-4xl font-bold mt-0 md:mt-3 ml-2 ">
              {" "}
              Ante cualquier duda o consulta...
            </h1>
            <p className="text-white ml-2">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis, dignissimos cum? Si
            </p>
          </div>
          <button className=" bg-white text-sky-600 rounded-full py-2 px-4 mt-0 md:mt-10 scale-75 md:scale-125 ">
            CONTÁCTCANOS
          </button>
        </div>
      </div>
      </>
    </>
  );
};

export default CompanyInfo;
