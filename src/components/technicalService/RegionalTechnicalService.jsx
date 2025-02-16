import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const RegionalTechnicalService = () => {

    const { t } = useTranslation();

    const regions = [  
        {  
          name: 'Zona 1',  
          whatsapp: '123-456-7890', // Ejemplo de teléfono  
          email: 'zona1@example.com',  
        },  
        {  
          name: 'Zona 2',  
          whatsapp: '987-654-3210',  
          email: 'zona2@example.com',  
        },  
      ];  

    return(
        <>
            <div className="flex justify-center flex-col py-10 px-4 w-full">  
  <h3 className="text-3xl font-bold text-center pb-5">SERVICIO TÉCNICO POR ZONA</h3>  
  <div className="w-full max-w-4xl mx-auto"> {/* Contenedor con ancho máximo y centrado */}
    {regions.map((region, index) => (  
      <Card key={index} className="flex justify-center text-center border-x-transparent rounded-none w-full">  
        <div className="flex flex-col sm:flex-row justify-around items-center py-5 px-4 w-full">  
          {/* Nombre de la región */}  
          <span className="text-2xl font-bold mb-4 sm:mb-0 sm:text-left sm:w-1/3">  
            {region.name}  
          </span>  

          {/* Contacto: WhatsApp y Email */}  
          <div className="text-2xl flex flex-col sm:flex-row items-center sm:space-x-4 sm:w-2/3">   
            {/* WhatsApp */}  
            <a  
              href={`https://wa.me/${region.whatsapp}`}  
              className="flex items-center mb-2 sm:mb-0"  
            >  
              <i className="fab fa-whatsapp text-2xl text-green-500"></i>  
              <span className="ml-2 break-all">{region.whatsapp}</span>  
            </a>  

            {/* Email */}  
            <a  
              href={`mailto:${region.email}`}  
              className="flex items-center"  
            >  
              <span role="img" aria-label="email" className="text-2xl">✉️</span>  
              <span className="ml-2 break-all">{region.email}</span>  
            </a>  
          </div>  
        </div>  
      </Card>  
    ))}  
  </div>
</div>
        </>
    )
}

export default RegionalTechnicalService