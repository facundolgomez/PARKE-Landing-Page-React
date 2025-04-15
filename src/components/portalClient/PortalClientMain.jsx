import { AuthenticationContext } from "../services/AuthenticationContext";
import { useContext, useEffect, useState } from "react";
import PortalAdmin from "../portalClient/PortalAdmin";
import PortalClient from "../portalClient/PortalClient";


const PortalClientMain = ({ isLoggedIn, setIsLoggedIn }) => {

    const { handleLogout } = useContext(AuthenticationContext);
 
    const [role, setRole] = useState(null); // Estado que me define si mostrar el formulario de administrador o no

    const logOutHandler = () => {

        handleLogout(); // Borra los datos del localStorage
        setIsLoggedIn(!isLoggedIn); // Cambia el estado de isLoggedIn, lo cual redirecciona al login
    }
     useEffect(() => {
        const getUserRole = () => {
            const userStored = localStorage.getItem("user");
      
            // Verifica si hay un usuario en localStorage
            if (userStored) {
              const userObject = JSON.parse(userStored);
              const userType = userObject.newUser.userType;
      
              // Establece el rol en el estado
              setRole(userType); // Guarda el rol del usuario
            }
          };
      
          getUserRole(); // Llama a la función al cargar el componente
        }, []); // Solo se ejecuta una vez al cargar el componente

    return(
        <>
          {role === 'Admin' && <PortalAdmin logOut={logOutHandler}/>}
          {role === 'Client' && <PortalClient logOut={logOutHandler}/>}
        </>
    )
}

export default PortalClientMain