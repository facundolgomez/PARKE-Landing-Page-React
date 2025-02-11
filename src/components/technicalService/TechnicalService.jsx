import UpScreen from "../upscreen/UpScreen";
import { useState, useRef } from "react";
import OnlineTechnicalService from "./OnlineTechnicalService.jsx";

const TechnicalService = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    // Crear referencias para cada componente
    const component1Ref = useRef(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Función para desplazarse a un componente específico
    const scrollToComponent = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const faqItems = [
        {
        question: "How do I order?",
        answer:
            "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
        },
        {
        question: "How can I make the payment?",
        answer:
            "You can make the payment using various methods such as credit card, PayPal, or bank transfer.",
        },
        {
        question: "How much time does it take to receive the order?",
        answer:
            "The delivery time depends on your location and the shipping method chosen. Typically, it takes between 3 to 7 business days.",
        },
        {
        question: "Can I resell the products?",
        answer:
            "Yes, you can resell the products as long as you comply with our terms and conditions.",
        },
        {
        question: "Where do I find the shipping details?",
        answer:
            "You can find the shipping details in your order confirmation email or by logging into your account on our website.",
        },
    ];

    return (
        <>
            <UpScreen
                pathImage={"../../../public/imagenes-de-fondo/imagen-novedades.jpg"}
                title={"Servicio Técnico"}
                paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            />
            <nav className="flex flex-col md:flex-row justify-around bg-gray-500">
                <div className="w-full md:w-auto">
                     <button
                        className="bg-transparent border-hidden py-3 text-white relative group hover:text-sky-600 hidden md:flex"
                        onClick={() => scrollToComponent(component1Ref)}
                    >
                        SERVICIO TECNICO ONLINE
                        <span className="absolute inset-x-0 bottom-0 h-1 bg-sky-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </button>
                    
                </div>
                <div className="w-full md:w-auto">
                     <button
                        className="bg-transparent border-hidden py-3 text-white relative group hover:text-sky-600 hidden md:flex"
                    >
                        SERVICIO TECNICO PRESENCIAL
                        <span className="absolute inset-x-0 bottom-0 h-1 bg-sky-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </button>
                    
                </div>
                <div className="w-full md:w-auto">
                     <button
                        className="bg-transparent border-hidden py-3 text-white relative group hover:text-sky-600 hidden md:flex"
                    >
                        SERVICIO TECNICO POR ZONA
                        <span className="absolute inset-x-0 bottom-0 h-1 bg-sky-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </button>
                    
                </div>
            </nav>
            <div className="flex flex-col items-center justify-center py-20 bg-gray-50 p-6">
                <h1 className="text-3xl text-center font-bold text-gray-800 mb-8">PREGUNTAS FRECUENTES</h1>
                <div className="w-full max-w-2xl space-y-4">
                    {faqItems.map((item, index) => (
                    <div key={index} className="bg-white border  rounded-lg">
                        <button
                        className={`w-full flex justify-between items-center p-4 focus:outline-none bg-sky-600 border-hidden hover:bg-sky-700 
                            ${activeIndex === index ? "rounded-b-none" : "rounded-lg"}`}
                        onClick={() => toggleAccordion(index)}
                        >
                        <span className="text-left font-medium text-white">{item.question}</span>
                        <span className="transform transition-transform duration-200">
                            {activeIndex === index ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                fillRule="evenodd"
                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                clipRule="evenodd"
                                />
                            </svg>
                            ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                                />
                            </svg>
                            )}
                        </span>
                        </button>
                        <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            activeIndex === index ? "max-h-96" : "max-h-0"
                        }`}
                        >
                            <div className="p-4 pt-2 text-black border-t border-sky-700">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div ref={component1Ref}>
            <OnlineTechnicalService/>
            </div>
        </>
    );
};

export default TechnicalService