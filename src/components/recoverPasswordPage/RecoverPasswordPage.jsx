import { useState } from "react";
import { useNavigate } from "react-router-dom";
const RecoverPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRecoverPassword = async () => {
    setMessage("");
    setError("");

    if (!email) {
      setError("Por favor ingresa un correo válido.");
      return;
    }

    try {
      const response = await fetch(
        "https://localhost:7185/api/Authentication/ForgotPassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setMessage(
          "Hemos enviado un enlace de recuperación a tu correo electrónico. Por favor, revisá tu bandeja de entrada."
        );
        setEmail("");
      } else {
        const errorMessage = await response.text();
        setError(
          errorMessage ||
            "Hubo un error al enviar la solicitud. Intenta nuevamente."
        );
      }
    } catch (err) {
      setError("Error de conexión con el servidor.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <span
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-sky-600 hover:text-sky-700 cursor-pointer select-none"
          style={{ fontSize: "48px", fontWeight: "900" }}
        >
          ←
        </span>
        <h1 className="text-2xl font-bold text-sky-600 mb-6">
          Recuperar Contraseña
        </h1>
        <input
          type="email"
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 mb-4 bg-white text-black text-center"
        />
        <button
          onClick={handleRecoverPassword}
          className="w-full bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-sky-700 transition-colors"
        >
          Continuar
        </button>

        {message && <p className="text-green-600 mt-4">{message}</p>}
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default RecoverPasswordPage;
