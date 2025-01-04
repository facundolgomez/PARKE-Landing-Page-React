import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const [scrolling, setScrolling] = useState(false);  
    const navigate = useNavigate();

    const handleScroll = () => {  
        const isScrolling = window.scrollY > 0;  
        setScrolling(isScrolling);  
    };  

    useEffect(() => {  
        window.addEventListener('scroll', handleScroll);  
        return () => {  
            window.removeEventListener('scroll', handleScroll);  
        };  
    }, []);

    const solutionsHandler = () => {
        navigate("/solutions");
    }

    const dashboardHandler = () => {
        navigate("/");
    }

    const newsHandler = () => {
        navigate("/news");
    }

    const contactHandler = () => {
        navigate("/contact");
    }

    const companyHandler = () => {
        navigate("/company");
    }

    return(
        <>
            <nav className={`flex flex-col shadow-md bg-white fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out ${scrolling ? 'py-0' : 'pb-3'}`}>  
                <div className="bg-sky-600 h-1" />  
                <div className="flex justify-around items-center">  
                    <div className='flex basis-52'>  
                        <img onClick={dashboardHandler} src="../../../public/logos/Logo-header.png" width={250} alt="Logo"/>  
                    </div>  
                    <div className="">  
                        <button onClick={solutionsHandler} className="bg-transparent border-hidden py-4 text-sky-600 relative group hover:text-sky-600 transition-colors duration-300">  
                            SOLUCIONES  
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-sky-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />  
                        </button>  
                        <button onClick={newsHandler} className="bg-transparent border-hidden py-4 text-sky-600 relative group hover:text-sky-600">  
                            NOVEDADES  
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-sky-600  scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />  
                        </button>  
                        <button onClick={companyHandler} className="bg-transparent border-hidden py-4 text-sky-600 relative group hover:text-sky-600">  
                            LA EMPRESA  
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-sky-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />  
                        </button>  
                        <button onClick={contactHandler} className="bg-transparent border-hidden py-4 text-sky-600 relative group hover:text-sky-600">  
                            CONTACTO  
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-sky-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />  
                        </button>  
                        <button className="bg-sky-600 text-white rounded-full border-hidden py-1 px-4 hover:bg-sky-500 transform transition-transform duration-300 hover:scale-110">  
                            COTIZÁ GRATIS  
                        </button>  
                    </div> 
                    <div className=''>  
                        <FontAwesomeIcon icon={faGlobe} />  
                        <select className="border-slate-950 border ">  
                            <option>ESP</option>  
                            <option>ENG</option>  
                            <option>POR</option>  
                        </select>  
                    </div>   
                </div>  
            </nav> 
        </>
    )
}

export default Header