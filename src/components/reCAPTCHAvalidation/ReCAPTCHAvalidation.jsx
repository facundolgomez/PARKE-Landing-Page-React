import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import PropTypes from "prop-types"

const ReCAPTCHAvalitadion = ({ onValidationChange }) => {

    const captcha = useRef(null);


    // Función para validar el token en el backend  
    const validateToken = async (token) => {
      const response = await fetch("https://localhost:7185/api/ReCaptcha/ValidateRecaptcha", {  
        method: "POST",  
        headers: {  
          "Content-Type": "application/json",  
        },  
        body: JSON.stringify({ Token: token }),  
      });

      const data = await response.json();

      if (data.success) {
        onValidationChange(true); // Notifica al padre que el reCAPTCHA es válido  
        console.log("Validación exitosa:", data.message); 
      }
      else {  
        onValidationChange(false); // Notifica que el reCAPTCHA no es válido  
        console.error("Error en reCAPTCHA:", data.message);  
      }
    }

    const handleCaptchaChange = (value) => { 
      console.log(value); 
      if (value) {   
        validateToken(value); // Realiza la validación en el backend  
      } else {   
        onValidationChange(false); // Notifica que el reCAPTCHA no es válido  
      }  
   };

    return(
        <div>
           <ReCAPTCHA
                ref={captcha}
                sitekey="6Ldng8IqAAAAADjh0lizzBwLpXS3THXNfXh2cncZ"
                onChange={handleCaptchaChange}
            />
        </div>
    )
}

ReCAPTCHAvalitadion.propTypes = {
  onValidationChange: PropTypes.func
}

export default ReCAPTCHAvalitadion;