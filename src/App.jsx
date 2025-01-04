import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./components/layOut/LayOut";

import Dashboard from "./components/dashboard/Dashboard";
import Solutions from "./components/solutions/Solutions";
import Contact from "./components/contact/Contact";
import CompanyInfo from "./components/companyInfo/CompanyInfo";
import Login from "./components/login/Login";
import PageNotFound from "./components/errors/pageNotFound/PageNotFound";
import News from "./components/news/News";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut/>,
      children: [
        {path: "/", element: <Dashboard/>},
        {path: "/solutions", element: <Solutions/>},
        {path: "/news", element: <News/>},
        {path: "/contact", element: <Contact/>},
        {path: "/company", element: <CompanyInfo/>},
      ],
    },
    {
      path: "/login", 
      element: <Login/>
    },
    {
      path: "*",
      element: <PageNotFound/>
    }
  ])

  return (
    <>
      {<RouterProvider router={router}/>}
    </>
  );
}

export default App;
