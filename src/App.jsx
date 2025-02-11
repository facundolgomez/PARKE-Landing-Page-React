import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./components/layOut/LayOut";

import Dashboard from "./components/dashboard/Dashboard";
import Solutions from "./components/solutions/Solutions";
import Contact from "./components/contact/Contact";
import CompanyInfo from "./components/companyInfo/CompanyInfo";
import Login from "./components/login/Login";
import PageNotFound from "./components/errors/pageNotFound/PageNotFound";
import News from "./components/news/News";
import PortalClient from "./components/portalClient/PortalClient";
import Protected from "./components/protected/Protected";
import { useState, useEffect } from "react";
import SubSectorPage from "./components/subSectorPage/SubSectorPage";
import TechnicalService from "./components/technicalService/TechnicalService";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado que me define si el usuario esta logueado o no

  // Verificar si hay un token al cargar la aplicación
  useEffect(() => {
    const token = localStorage.getItem("user-token");
    if (token) {
      setIsLoggedIn(true); // Si hay un token, el usuario está logueado
    }
  }, []);

  const handleLogin = () => {
    // funcion que cambia el estado de logeueo
    setIsLoggedIn(!isLoggedIn);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/solutions", element: <Solutions /> },
        { path: "/news", element: <News /> },
        { path: "/contact", element: <Contact /> },
        { path: "/company", element: <CompanyInfo /> },
        { path: "/technicalService", element: <TechnicalService/> },
        {
          path: "/subsector/:subsectorName",
          element: <SubSectorPage />,
        },
        {
          path: "/portalCliente",
          element: <Protected isSignedIn={isLoggedIn} />,
          children: [
            {
              path: "/portalCliente",
              element: (
                <PortalClient
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              ),
            },
          ],
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
