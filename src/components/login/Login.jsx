import { useRef, useState, useContext } from "react";
import { AuthenticationContext } from "../services/AuthenticationContext";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { jwtDecode } from "jwt-decode";

const Login = ({ onLogin }) => {
  const { handleLogin } = useContext(AuthenticationContext);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const [showErrorLogin, setShowErrorLogin] = useState(false); // variable que utilizo para mostrar un mensaje en caso de que las credenciales sean incorrectas

  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });

  const [selectedOption, setSelectedOption] = useState("Client");

  const usernameHandler = (event) => {
    setErrors({ ...errors, username: false });
    setEnteredUsername(event.target.value);
    setShowErrorLogin(false);
  };

  const passwordHandler = (event) => {
    setErrors({ ...errors, password: false });
    setEnteredPassword(event.target.value);
    setShowErrorLogin(false);
  };

  const registerWindowHandler = () => {
    navigate("/registrationForm");
  };

  const toggleOption = () => {
    if (selectedOption === "Admin") {
      setSelectedOption("Client");
    }
    if (selectedOption === "Client") {
      setSelectedOption("Admin");
    }

    console.log(selectedOption);
  };

  const submitLogin = async (event) => {
    event.preventDefault();

    const password = passwordRef.current.value;
    const username = usernameRef.current.value;

    if (selectedOption === "Client") {
      if (username.length === 0) {
        usernameRef.current.focus();
        setErrors({ ...errors, username: true });
        return;
      }

      if (password.length === 0) {
        passwordRef.current.focus();
        setErrors({ ...errors, password: true });
        return;
      }

      const isSuccess = await loginHandler(username, password);

      if (isSuccess) {
        console.log("logueado!!!!");
        onLogin(); // notifico al resto de la App que el usuario se ha logueado correctamente
        navigate("/portalCliente"); // navega al portal de clientes
      } else {
        setErrors({ ...errors, username: false, password: false });
        setShowErrorLogin(true);
      }

      setEnteredUsername("");
      setEnteredPassword("");
    } else {
      if (username.length === 0) {
        usernameRef.current.focus();
        setErrors({ ...errors, username: true });
        return;
      }

      if (password.length === 0) {
        passwordRef.current.focus();
        setErrors({ ...errors, password: true });
        return;
      }

      const isSuccess = await loginHandler(enteredUsername, enteredPassword);

      if (isSuccess) {
        console.log("logueado!!!!");
        onLogin(); // notifico al resto de la App que el usuario se ha logueado correctamente
        navigate("/portalCliente"); // navega al portal de Clientes
      } else {
        setErrors({ ...errors, username: false, password: false });
        setShowErrorLogin(true);
      }

      setEnteredUsername("");
      setEnteredPassword("");
    }
  };

  const loginHandler = async (username, password) => {
    const endpoint =
      selectedOption === "Admin"
        ? "https://localhost:7185/api/Authentication/AuthenticateAdmin"
        : "https://localhost:7185/api/Authentication/AuthenticateClient";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        // si la respuesta no fue OK lanza un error
        const errorData = await res.json(); // detalles del error
        throw new Error(errorData.message || "Login failed");
      }

      const token = await res.text();
      localStorage.setItem("user-token", token);

      decodeTokenAndSetRole(token, selectedOption); // pasamos el token y el tipo de usuario
      return true;
    } catch (error) {
      setErrors({ username: false, password: true });
      console.error("Error en login: ", error);
      return false;
    }
  };

  const decodeTokenAndSetRole = (token, userType) => {
    try {
      const decoded = jwtDecode(token);
      if (!decoded.exp || decoded.exp * 1000 <= Date.now()) {
        throw new Error("Token expirado");
      }
      handleLogin(decoded.given_name, userType); // Usar userType en lugar de role
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center p-4">
        <form
          onSubmit={submitLogin}
          className="p-8 mt-20 bg-white shadow-lg rounded-lg w-full max-w-sm"
        >
          <h2 className="text-2xl font-semibold text-center mb-6">
            Iniciar sesión
          </h2>

          <label
            htmlFor="Toggle3"
            className="rounded-md cursor-pointer text-center scale-75 sm:scale-100"
          >
            <div className="flex flex-row justify-center">
              <input id="Toggle3" type="checkbox" className="hidden peer" />
              <span
                className={`px-4 rounded-s-full transition-colors duration-300 ease-in-out ${
                  selectedOption === "Client"
                    ? "bg-sky-600 text-white"
                    : "bg-gray-100 text-dark"
                }`}
              >
                <button
                  onClick={toggleOption}
                  className="bg-transparent border-hidden"
                >
                  Cliente
                </button>
              </span>
              <span
                className={`px-4 rounded-e-full transition-colors duration-300 ease-in-out ${
                  selectedOption === "Admin"
                    ? "bg-sky-600 text-white"
                    : "bg-gray-100 text-dark"
                }`}
              >
                <button
                  onClick={toggleOption}
                  className="bg-transparent border-hidden"
                >
                  Admin
                </button>
              </span>
            </div>
            <p className="text-x1 text-sky-600 font-bold mb-3 mt-2">
              A continuación, ingrese sus credenciales de usuario{" "}
              {selectedOption === "Admin" ? "Administrador" : "Cliente"}
            </p>
          </label>

          <div className="mb-4">
            <input
              type="text"
              ref={usernameRef}
              placeholder="Nombre de usuario"
              onChange={usernameHandler}
              value={enteredUsername}
              className={
                errors.username == true
                  ? "w-full p-3 border bg-white border-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  : "w-full p-3 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              ref={passwordRef}
              placeholder="Contraseña"
              onChange={passwordHandler}
              value={enteredPassword}
              className={
                errors.password == true
                  ? "w-full p-3 border bg-white border-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  : "w-full p-3 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
            />
          </div>
          {selectedOption === "Client" && (
            <div className="mb-4 text-center">
              <p
                className="text-sm text-sky-600 hover:underline cursor-pointer"
                onClick={() => navigate("/recoverPassword")}
              >
                ¿Olvidaste tu contraseña?
              </p>
            </div>
          )}

          <p className="text-warning py-2">
            {errors.username || errors.password
              ? "Debe completar todos los campos para iniciar sesión."
              : ""}
          </p>
          {showErrorLogin && (
            <p className="text-danger">
              Usuario o contraseña inválido/s. Por favor, intente nuevamente.
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 my-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Iniciar sesión
          </button>
          <div>
            ¿Aún no tiene cuenta? Solicítela haciendo{" "}
            <a href="" onClick={registerWindowHandler}>
              Click aquí
            </a>
            .
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
