import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import WhatsAppButton from "../whatsappButton/WhatsAppButton";

const LayOut = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {" "}
        {/* Esto asegura que el contenido ocupa al menos la altura de la pantalla lo que permite que el Footer siempre esté al final de la página */}
        <WhatsAppButton />
        <Outlet />
      </main>
      
      <Footer />
    </>
  );
};

export default LayOut;
