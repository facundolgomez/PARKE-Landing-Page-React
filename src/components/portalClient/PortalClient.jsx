import { AuthenticationContext } from "../services/AuthenticationContext";
import { useContext } from "react";

const PortalClient = ({ isLoggedIn, setIsLoggedIn }) => {

    const { handleLogout } = useContext(AuthenticationContext);

    const logOutHandler = () => {

        handleLogout(); // Borra los datos del localStorage
        setIsLoggedIn(!isLoggedIn); // Cambia el estado de isLoggedIn, lo cual redirecciona al login
    }

    return(
        <>
            <h1>Portal de Clientes</h1>
            <h1>Portal de Clientes</h1>
            <h1>Portal de Clientes</h1>
            <h1>Portal de Clientes</h1>
            <h1>Portal de Clientes</h1>
           <button onClick={logOutHandler} className="bg-sky-600 text-white border-hidden hover:bg-sky-500">Cerrar sesión</button>
        </>
    )
}

export default PortalClient