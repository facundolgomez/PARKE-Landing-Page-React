import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useEffect } from "react";

const ReCAPTCHAvalitadion = ({ onValidationChange }) => {

    const captcha = useRef(null);

    const captchaSubmit = () => {
        if (captcha.current.getValue()) {
          onValidationChange(true); // Notifica al padre que el reCAPTCHA está validado
          console.log("Validado!");
        } else {
          onValidationChange(false); // Notifica al padre que el reCAPTCHA no está validado
        }
      };

    return(
        <div>
           <ReCAPTCHA
                ref={captcha}
                sitekey="6Ldng8IqAAAAADjh0lizzBwLpXS3THXNfXh2cncZ"
                onChange={captchaSubmit}
            />
        </div>
    )
}

export default ReCAPTCHAvalitadion;