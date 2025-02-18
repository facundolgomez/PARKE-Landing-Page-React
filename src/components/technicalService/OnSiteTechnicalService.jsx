import { Card, Form, Button } from "react-bootstrap";
import ReCAPTCHAvalitadion from "../reCAPTCHAvalidation/ReCAPTCHAvalidation";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const OnSiteTechnicalService = () => {

    const [captchaValidated, setCaptchaValidated] = useState(false);
    const { t } = useTranslation();

    const handleValidationChange = (isValid) => {
        setCaptchaValidated(isValid);
    };
    
    return(
        <>
            <div className="py-20 bg-sky-600 text-white">
                <div className="flex flex-column justify-center text-center">
                    <h3 className="text-3xl font-bold">
                    {t("technicalService.OnsiteTS.title")}
                    </h3>

                    <p className="font-bold pt-5">
                    {t("technicalService.OnsiteTS.paragraph1")}
                    </p>
                    <p className="font-bold pb-5">
                    {t("technicalService.OnsiteTS.paragraph2")}
                    </p>
                </div>
                <div className="w-full sm:max-w-2xl lg:max-w-4xl mx-auto">
                    <Card className="flex justify-center flex-col">
                        <Card.Header className="flex justify-center text-center flex-col">
                        <h3 className="text-xl font-bold">
                        {t("technicalService.OnsiteTS.form.title")}
                        </h3>
                        </Card.Header>
                        <Card.Body>
                        <Form>
                            <Form.Group className="p-2 py-3">
                            <Form.Label className="font-bold">Nombre Completo:</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                placeholder="Nombre..."
                                name="name"
                            />
                            </Form.Group>
                            <Form.Group className="p-2 py-3">
                            <Form.Label className="font-bold">Nombre de la empresa:</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                placeholder="Empresa..."
                                name="company"
                            />
                            </Form.Group>
                            <Form.Group className="p-2 py-3">
                            <Form.Label className="font-bold">Teléfono:</Form.Label>
                            <Form.Control
                                type="tel"
                                required
                                placeholder="Ej: +54 9 341 304 1103"
                                name="phone"
                            />
                            </Form.Group>
                            <Form.Group className="p-2 py-3">
                            <Form.Label className="font-bold">Correo electrónico</Form.Label>
                            <Form.Control
                                type="mail"
                                required
                                placeholder="ejemplo@correo.com"
                                name="mail"
                            />
                            </Form.Group>
                            <Form.Group className="p-2 py-3">
                            <ReCAPTCHAvalitadion
                                onValidationChange={handleValidationChange}
                            />
                            {!captchaValidated && (
                                <p className="pt-3 text-xl text-red-700 font-bold">
                                {t("contact.form.6")}
                                </p>
                            )}
                            </Form.Group>
                            <div className="flex justify-center"> {/* Contenedor para centrar el botón */}
                                <Button
                                    className="text-lg rounded-full mt-3 text-white font-bold bg-sky-600"
                                    type="submit"
                                    disabled={!captchaValidated}
                                >
                                    {t("technicalService.OnsiteTS.form.button")}
                                </Button>
                            </div>
                        </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default OnSiteTechnicalService;