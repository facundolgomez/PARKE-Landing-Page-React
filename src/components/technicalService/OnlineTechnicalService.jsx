import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import ReCAPTCHAvalitadion from "../reCAPTCHAvalidation/ReCAPTCHAvalidation";
import { useTranslation } from "react-i18next";

const OnlineTechnicalService = () => {

    const [selectedOption, setSelectedOption] = useState("freeService");

    const [formPaymentSended, setFormPaymentSended] = useState(false);

    const [checkboxFreeCall, setCheckboxFreeCall] = useState(false);

    const [captchaValidated, setCaptchaValidated] = useState(false);

    const { t } = useTranslation();

    const phoneNumber = "+543413041103";

    const toggleOption = () => {
        if (selectedOption === "freeService") {
            setSelectedOption("paymentService")
        }
        if (selectedOption === "paymentService") {
            setSelectedOption("freeService")
        }
    }

    const handleValidationChange = (isValid) => {
      setCaptchaValidated(isValid);
    };

    const handleValidateFreeCall = () => {
      setCheckboxFreeCall(!checkboxFreeCall);
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      if (captchaValidated) {
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        // Agregar propiedades usando spread operator
        const updatedData = { 
          ...data, 
          Subject: "Consentimiento de Pago", 
          Message: "Declaro estar de acuerdo con el cobro de una tarifa por parte de PARKE S.R.L. en concepto de servicio técnico especializado brindado vía telefónica."
        };
        try {
          const response = await fetch(
            "https://localhost:7185/api/contact/send",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedData),
            }
          );
  
          if (!response.ok) {
            throw new Error("Error al enviar el formulario");
            
          }
  
          alert("Formulario enviado correctamente");
          setFormPaymentSended(true);
        } catch (error) {
          console.error("Error:", error);
          alert("Hubo un problema al enviar el formulario.");
        }
      } else {
        alert("Por favor, completa el reCAPTCHA.");
      }
    };

    return(
        <>
            <h2 className="flex justify-center text-center text-3xl font-bold pt-32 pb-10">{t("technicalService.OnlineTS.title")}</h2>
            <div className="flex justify-center">
            <label htmlFor="Toggle3" className="rounded-md cursor-pointer text-center">
                <input id="Toggle3" type="checkbox" className="hidden peer" />
                <span
                    className={`px-8 py-2 rounded-full sm:rounded-s-full sm:px-12 sm:py-3 md:px-20 md:py-3 transition-colors duration-300 ease-in-out ${
                    selectedOption === "freeService"
                        ? "bg-sky-600 text-white"
                        : "bg-gray-300 text-dark"
                    }`}
                >
                    <button
                    onClick={toggleOption}
                    className="bg-transparent border-hidden"
                    >
                    <p className="text-sm sm:text-lg md:text-2xl">{t("technicalService.OnlineTS.optionMenu.freeTS")}</p>
                    </button>
                </span>
                <span
                    className={`px-8 py-2 rounded-full sm:rounded-e-full sm:px-12 sm:py-3 md:px-20 md:py-3 transition-colors duration-300 ease-in-out ${
                    selectedOption === "paymentService"
                        ? "bg-sky-600 text-white"
                        : "bg-gray-300 text-dark"
                    }`}
                >
                    <button
                    onClick={toggleOption}
                    className="bg-transparent border-hidden"
                    >
                    <p className="text-sm sm:text-lg md:text-2xl">{t("technicalService.OnlineTS.optionMenu.paymentTS")}</p>
                    </button>
                </span>
            </label>
            </div>
            <div className="flex justify-center py-20">
            
              {selectedOption === "freeService" ? 


                <div className="flex text-center flex-col mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                  {t("technicalService.OnlineTS.freeTechSup.paragraph1")}
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold py-3 text-red-800">
                  {t("technicalService.OnlineTS.freeTechSup.paragraph2")}
                  </p>
                  
                  {/* Checkbox */}
                  <div className="flex items-center justify-center mt-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      checked={checkboxFreeCall}
                      onChange={handleValidateFreeCall}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {t("technicalService.OnlineTS.freeTechSup.checkbox")}
                    </label>
                  </div>

                  {/* Botón de llamada */}
                  <a
                    href={checkboxFreeCall ? `tel:${phoneNumber}` : "#"} // Deshabilita el enlace si el checkbox no está marcado
                    className={`inline-flex items-center justify-center py-3 px-6 sm:px-10 my-10 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 ${
                      checkboxFreeCall
                        ? "bg-green-500 hover:bg-green-600 cursor-pointer" // Estilos cuando está habilitado
                        : "bg-gray-400 cursor-not-allowed" // Estilos cuando está deshabilitado
                    }`}
                    onClick={(e) => {
                      if (!checkboxFreeCall) {
                        e.preventDefault(); // Evita la acción predeterminada si el checkbox no está marcado
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <p className="text-lg">{t("technicalService.OnlineTS.freeTechSup.button")}</p>
                  </a>
                </div>
               

                : 
                
                <div>
                  <Card className="flex justify-center flex-col bg-sky-600 text-white">
                    <Card.Header className="flex justify-center text-center flex-col">
                      <h3 className="m-10 text-3xl font-bold">{t("technicalService.OnlineTS.paymentTechSup.title")}</h3>
                      <p className="font-bold">
                      {t("technicalService.OnlineTS.paymentTechSup.paragraph1")}
                      </p>
                      <p className="font-bold">
                      {t("technicalService.OnlineTS.paymentTechSup.paragraph2")}
                      </p>
                      <p className="font-bold pb-4">
                      {t("technicalService.OnlineTS.paymentTechSup.paragraph3")}
                      </p>
                    </Card.Header>
                    <Card.Body>
                      <Form className="flex flex-col rounded-lg bg-sky-600 text-white" onSubmit={handleSubmit}>
                      <Form.Group className="p-2 py-3">
                        <Form.Label className="font-bold">
                        {t("technicalService.OnlineTS.paymentTechSup.form.formLabel.0")}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          required
                          placeholder={t("technicalService.OnlineTS.paymentTechSup.form.formPlaceHolder.0")}
                          name="name"
                        />
                      </Form.Group>
                      <Form.Group className="p-2 py-3">
                        <Form.Label className="font-bold">
                        {t("technicalService.OnlineTS.paymentTechSup.form.formLabel.1")}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          required
                          placeholder={t("technicalService.OnlineTS.paymentTechSup.form.formPlaceHolder.1")}
                          name="company"
                        />
                      </Form.Group>
                      <Form.Group className="p-2 py-3">
                        <Form.Label className="font-bold">
                        {t("technicalService.OnlineTS.paymentTechSup.form.formLabel.2")}
                        </Form.Label>
                        <Form.Control
                          type="tel"
                          required
                          placeholder={t("technicalService.OnlineTS.paymentTechSup.form.formPlaceHolder.2")}
                          name="phone"
                        />
                      </Form.Group>
                      <Form.Group className="p-2 py-3">
                        <Form.Label className="font-bold">
                        {t("technicalService.OnlineTS.paymentTechSup.form.formLabel.3")}
                        </Form.Label>
                        <Form.Control
                          type="email"
                          required
                          placeholder={t("technicalService.OnlineTS.paymentTechSup.form.formPlaceHolder.3")}
                          name="email"
                        />
                      </Form.Group>
                      <Form.Group controlId="termsCheckbox" className="flex flex-row">
                        <Form.Check 
                          type="checkbox"  
                          required 
                          label={t("technicalService.OnlineTS.paymentTechSup.form.formPlaceHolder.4")}
                          className="mt-3 ms-2"
                        />
                      </Form.Group>
                      <Form.Group className="p-2 py-3">
                        <ReCAPTCHAvalitadion
                          onValidationChange={handleValidationChange}
                        />
                          {!captchaValidated && (
                            <p className=" pt-3 text-xl text-red-700 font-bold">
                                {t("contact.form.6")}
                            </p>
                          )}
                      </Form.Group>
                      <Button
                        className="text-lg rounded-full mx-2 mt-3 text-black font-bold bg-white"
                        type="submit"
                        disabled={!captchaValidated}
                      >
                        {t("technicalService.OnlineTS.paymentTechSup.form.button")}
                      </Button>
                      </Form>
                    </Card.Body>
                    <Card.Footer className="flex justify-center text-center">
                      {formPaymentSended &&
                        <a
                        href={`tel:${phoneNumber}`}
                        className="inline-flex items-center justify-center py-3 px-6 sm:px-10 my-10 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          <p className="text-lg">{t("technicalService.OnlineTS.paymentTechSup.form.buttonWpp")}</p>
                      </a>
                      }
                    </Card.Footer>
                  </Card>
                </div>
              }

            </div>
        </>
    )
}

export default OnlineTechnicalService;