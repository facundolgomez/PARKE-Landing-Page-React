import { useState } from "react";

const OnlineTechnicalService = () => {

    const [selectedOption, setSelectedOption] = useState("freeService");

    const phoneNumber = "+543413041103";

    const toggleOption = () => {
        if (selectedOption === "freeService") {
            setSelectedOption("paymentService")
        }
        if (selectedOption === "paymentService") {
            setSelectedOption("freeService")
        }
    }

    return(
        <>
            <h2 className="flex justify-center text-center text-3xl font-bold pt-32 pb-10">SOLICITUD PARA SERVICIO TÉCNICO ONLINE</h2>
            <div className="flex justify-center">
            <label htmlFor="Toggle3" className="rounded-md cursor-pointer text-center">
                <input id="Toggle3" type="checkbox" className="hidden peer" />
                <span
                    className={`px-8 py-2 rounded-full sm:rounded-s-full sm:px-12 sm:py-3 md:px-20 md:py-3 transition-colors duration-300 ease-in-out ${
                    selectedOption === "freeService"
                        ? "bg-sky-600 text-white"
                        : "bg-gray-300 text-dark"
                    }`}
                >
                    <button
                    onClick={toggleOption}
                    className="bg-transparent border-hidden"
                    >
                    <p className="text-sm sm:text-lg md:text-2xl">SERVICIO GRATUITO</p>
                    </button>
                </span>
                <span
                    className={`px-8 py-2 rounded-full sm:rounded-e-full sm:px-12 sm:py-3 md:px-20 md:py-3 transition-colors duration-300 ease-in-out ${
                    selectedOption === "paymentService"
                        ? "bg-sky-600 text-white"
                        : "bg-gray-300 text-dark"
                    }`}
                >
                    <button
                    onClick={toggleOption}
                    className="bg-transparent border-hidden"
                    >
                    <p className="text-sm sm:text-lg md:text-2xl">SERVICIO DE PAGO</p>
                    </button>
                </span>
            </label>
            </div>
            <div className="flex justify-center py-20">
            
            {selectedOption === "freeService" ? 


                <div className="flex text-center flex-col mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                  El servicio técnico online gratuito consta de una llamada de 15 minutos como límite con un técnico para resolver cuestiones básicas.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold py-3 text-red-800">
                  Si tiene consultas variadas o si cree que su consulta es de una mayor complejidad, opte por el servicio de pago aquí arriba.
                </p>
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center justify-center py-3 px-6 sm:px-10 my-10 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Llamar ahora
                </a>
              </div>
               

                : 
                

                "pendiente..."
                }

            </div>
        </>
    )
}

export default OnlineTechnicalService;