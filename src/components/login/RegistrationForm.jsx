import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ReCAPTCHAvalitadion from "../reCAPTCHAvalidation/ReCAPTCHAvalidation";

const RegistrationForm = () => {
  const [captchaValidated, setCaptchaValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para manejar la carga
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleValidationChange = (isValid) => {
    setCaptchaValidated(isValid);
  };

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!captchaValidated) {
      alert("Por favor, completa el reCAPTCHA.");
      return;
    }

    setIsSubmitting(true); // Activar el estado de carga

    const updatedData = {
      ...formData,
      Subject: "Solicitud de Registro", // Asunto del correo
    };

    try {
      const response = await fetch(
        "https://localhost:7185/api/RegistrationEmail/SendRegistrationForm",
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
      navigate("/login"); // Redirigir al usuario después de enviar el formulario
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema al enviar el formulario.");
    } finally {
      setIsSubmitting(false); // Desactivar el estado de carga
    }
  };

  return (
    <div className="flex justify-center items-center flex-col mt-20 pt-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Formulario de Registro</h2>
        <form onSubmit={handleSubmit}>
          {/* Campo: Nombre */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Nombre:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isSubmitting} // Deshabilitar el campo mientras se envía
            />
          </div>

          {/* Campo: Empresa */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Empresa:</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isSubmitting} // Deshabilitar el campo mientras se envía
            />
          </div>

          {/* Campo: Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isSubmitting} // Deshabilitar el campo mientras se envía
            />
          </div>

          {/* Campo: Teléfono */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Teléfono:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isSubmitting} // Deshabilitar el campo mientras se envía
            />
          </div>

          {/* Campo: Mensaje (opcional) */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Mensaje (opcional):</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              disabled={isSubmitting} // Deshabilitar el campo mientras se envía
            />
          </div>

          {/* ReCAPTCHA */}
          <ReCAPTCHAvalitadion onValidationChange={handleValidationChange} />
          {!captchaValidated && (
            <p className="pt-3 text-xl text-red-700 font-bold">
              {t("contact.form.6")}
            </p>
          )}

          {/* Botones */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              disabled={isSubmitting} // Deshabilitar el botón mientras se envía
            >
              Cerrar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center justify-center"
              disabled={isSubmitting} // Deshabilitar el botón mientras se envía
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                "Enviar"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;