import { Card, Form, Button } from "react-bootstrap";
import ReCAPTCHAvalitadion from "../reCAPTCHAvalidation/ReCAPTCHAvalidation";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const OnSiteTechnicalService = () => {

    const [captchaValidated, setCaptchaValidated] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // <-- Estado de carga
    const { t } = useTranslation();

    const handleValidationChange = (isValid) => {
        setCaptchaValidated(isValid);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // <-- Activar estado de carga al enviar
        
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData.entries());
        
        // Construimos el mensaje combinando machine, model y description
        const message = `Solicitud de Servicio Técnico Presencial:
        
        Datos del equipo:
        - Equipo: ${formValues.machine || 'No especificado'}
        - Modelo: ${formValues.model || 'No especificado'}
        
        Descripción del problema:
        ${formValues.description || 'No especificado'}`;

        // Preparamos los datos para el endpoint
        const payload = {
            Name: formValues.name,
            Email: formValues.email,
            Company: formValues.company,
            Phone: formValues.phone,
            Subject: "Solicitud de Servicio Técnico Presencial",
            Message: message
        };

        try {
            const response = await fetch('https://localhost:7185/api/contact/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert('Formulario enviado con éxito');
                e.target.reset(); // Limpiar el formulario
            } else {
                throw new Error('Error en el envío');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al enviar el formulario');
        } finally {
            setIsLoading(false); // <-- Desactivar estado de carga (tanto en éxito como en error)
        }
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
                    <Card className="flex justify-center">
                        <Card.Header className="flex justify-center text-center flex-col">
                        <h3 className="text-xl font-bold">
                        {t("technicalService.OnsiteTS.form.title")}
                        </h3>
                        </Card.Header>
                        <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <p className="flex flex-row font-bold justify-center">Los campos marcados con (<p className="px-1 text-red-500">*</p>) son obligatorios</p>
                            </Form.Group>
                            <Form.Group className="p-2 py-3">
                            <Form.Label className="font-bold flex flex-row">Nombre Completo: (<p className="px-1 text-red-500">*</p>)</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                placeholder="Nombre..."
                                name="name"
                            />
                            </Form.Group>
                            <Form.Group className="p-2 py-3">
                            <Form.Label className="font-bold flex flex-row">Nombre de la empresa: (<p className="px-1 text-red-500">*</p>)</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                placeholder="Empresa..."
                                name="company"
                            />
                            </Form.Group>
                            <Form.Group className="p-2 py-3">
                            <Form.Label className="font-bold flex flex-row">Teléfono: (<p className="px-1 text-red-500">*</p>)</Form.Label>
                            <Form.Control
                                type="tel"
                                required
                                placeholder="Ej: +54 9 341 304 1103"
                                name="phone"
                            />
                            </Form.Group>
                            <Form.Group className="p-2 py-3">
                            <Form.Label className="font-bold flex flex-row">Correo electrónico (<p className="px-1 text-red-500">*</p>)</Form.Label>
                            <Form.Control
                                type="mail"
                                required
                                placeholder="ejemplo@correo.com"
                                name="email"
                            />
                            </Form.Group>
                            <h2 className="my-4 text-2xl font-bold flex justify-center">DATOS DEL EQUIPO</h2>
                            <Form.Group className="p-2 py-3">
                            <Form.Label className="font-bold">Equipo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese el nombre del equipo..."
                                name="machine"
                            />
                            </Form.Group>
                            <Form.Group className="p-2 py-3">
                            <Form.Label className="font-bold">Modelo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese el modelo del equipo..."
                                name="model"
                            />
                            </Form.Group>
                            <Form.Group className="p-2 py-3">
                            <Form.Label className="font-bold">Descripción del servicio solicitado</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder="Ingrese una breve descripción de su problema y del servicio solicitado..."
                                name="description"
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
                                    disabled={!captchaValidated || isLoading} // <-- Deshabilitar durante carga
                                >
                                    {isLoading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Enviando...
                                        </>
                                    ) : (
                                        t("technicalService.OnsiteTS.form.button")
                                    )}
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