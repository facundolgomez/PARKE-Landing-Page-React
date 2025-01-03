
const Header = () => {

    return(
        <>
            <div className="bg-sky-600 h-1" />  
            <nav className="flex justify-center py-2 shadow-md bg-white">  
                <div>
                    <img src="../../../public/logos/Logo-header.png" width={250} alt="Logo"></img>  
                </div>  
                <div className="flex justify-around items-center ps-3 w-full max-w-6xl">  
                    <div className="flex space-x-3">  
                        <button className="bg-white py-1 px-2 text-sky-600 border border-transparent hover:border-sky-600">  
                            SOLUCIONES  
                        </button>  
                        <button className="bg-white py-1 px-2 text-sky-600 border border-transparent hover:border-sky-600">  
                            NOVEDADES  
                        </button>  
                        <button className="bg-white py-1 px-2 text-sky-600 border border-transparent hover:border-sky-600">  
                            LA EMPRESA  
                        </button>  
                        <button className="bg-white py-1 px-2 text-sky-600 border border-transparent hover:border-sky-600">  
                            CONTACTO  
                        </button>  
                    </div>  
                    <button className="bg-sky-600 text-white rounded-full py-1 px-4 hover:bg-sky-700">  
                        COTIZÁ GRATIS  
                    </button>  
                </div>  
            </nav> 
        </>
    )
}

export default Header