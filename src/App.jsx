import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./components/layOut/LayOut";
import { jwtDecode } from 'jwt-decode';

import Dashboard from "./components/dashboard/Dashboard";
import Solutions from "./components/solutions/Solutions";
import Contact from "./components/contact/Contact";
import CompanyInfo from "./components/companyInfo/CompanyInfo";
import Login from "./components/login/Login";
import PageNotFound from "./components/errors/pageNotFound/PageNotFound";
import News from "./components/news/News";
import PortalClientMain from "./components/portalClient/PortalClientMain";
import Protected from "./components/protected/Protected";
import { useState, useEffect } from "react";
import SubSectorPage from "./components/subSectorPage/SubSectorPage";
import TechnicalService from "./components/technicalService/TechnicalService";
import SolutionsByMachineTypePage from "./components/solutionsByMachineTypePage/SolutionsByMachineTypePage";
import RegistrationForm from "./components/login/RegistrationForm";
import MachinePage from "./components/machinePage/MachinePage";
import NewClient from "./components/portalClient/NewClient";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado que me define si el usuario esta logueado o no
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // Verificar si hay un token al cargar la aplicación
  useEffect(() => {
    const verifyAuth = () => {
      const token = localStorage.getItem("user-token");
      if (token) {
        try {
          const decoded = jwtDecode(token);
          // Verifica que el token no esté expirado
          const isTokenValid = decoded.exp * 1000 > Date.now();
          
          if (isTokenValid) {
            setIsLoggedIn(true);
          } else {
            localStorage.removeItem("user-token");
          }
        } catch (error) {
          console.log(error)
          localStorage.removeItem("user-token");
        }
      }
      setIsCheckingAuth(false);
    };

    verifyAuth();
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "solutions", element: <Solutions /> },
        { path: "news", element: <News /> },
        { path: "contact", element: <Contact /> },
        { path: "company", element: <CompanyInfo /> },
        { path: "technicalService", element: <TechnicalService /> },
        { path: "registrationForm", element: <RegistrationForm /> },
        { path: "detalles/:machineTitle", element: <MachinePage /> },
        { path: "subsector/:subsectorName", element: <SubSectorPage /> },
        { path: "machines/:machine/:type", element: <SolutionsByMachineTypePage /> },
        {
          path: "portalCliente",
          element: isCheckingAuth ? (
            <div className="flex justify-center items-center h-screen">
              <p>Cargando...</p>
            </div>
          ) : (
            <Protected isSignedIn={isLoggedIn} />
          ),
          children: [
            { index: true, element: <PortalClientMain isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> },
            { path: "newClient", element: <NewClient /> } // Nueva ruta como hijo de portalCliente
          ]
        },
      ],
    },
    {
      path: "/login",
      element: <Login onLogin={handleLogin} />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
