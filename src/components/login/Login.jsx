import { useRef, useState, useContext } from "react";
import { AuthenticationContext } from "../services/AuthenticationContext";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";

const Login = () => {
  const { handleLogin } = useContext(AuthenticationContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const loginHandler = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email.length === 0) {
      emailRef.current.focus();
      setErrors({ ...errors, email: true });
      return;
    }

    if (password.length === 0) {
      passwordRef.current.focus();
      setErrors({ ...errors, password: true });
      return;
    }

    alert(`Iniciaste sesión con el email: ${email}`);
    handleLogin(email);
    navigate("/portalCliente");
    console.log(email);
  };

  return (
    
    <div>
      <Header />
      <form
      onSubmit={loginHandler}
      className="z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-white shadow-lg rounded-lg w-full max-w-sm"
    >
      <h2 className="text-2xl font-semibold text-center mb-6">
        Iniciar sesión
      </h2>
      <div className="mb-4">
        <input
          type="email"
          ref={emailRef}
          placeholder="Email"
          className="w-full p-3 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          ref={passwordRef}
          placeholder="Contraseña"
          className="w-full p-3 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Iniciar sesión
      </button>
    </form>
    </div>
  );
};

export default Login;
