import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";

const ReCAPTCHAvalitadion = () => {

    const [captchaValidation, setCaptchaValidation] = useState(false)

    const captcha = useRef(null);

    const captchaSubmit = () => {
        if (captcha.current.getValue()) {
            setCaptchaValidation(true)
        }
    }

    return(
        <div>
           <ReCAPTCHA
                ref={captcha}
                sitekey="6Ldng8IqAAAAADjh0lizzBwLpXS3THXNfXh2cncZ"
                onChange={captchaSubmit}
            />
            {captchaValidation && <p className="text-green-600">¡reCAPTCHA validado correctamente!</p>}
        </div>
    )
}

export default ReCAPTCHAvalitadion;