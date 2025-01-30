

const PortalClient = ({ isLoggedIn, setIsLoggedIn }) => {

    const logOutHandler = () => {
        setIsLoggedIn(!isLoggedIn);
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