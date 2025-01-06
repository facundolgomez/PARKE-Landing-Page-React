import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const LayOut = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {" "}
        {/* Esto asegura que el contenido ocupa al menos la altura de la pantalla lo que permite que el Footer siempre esté al final de la página */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayOut;
