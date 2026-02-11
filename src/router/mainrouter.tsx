import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Landingpage from "../Pages/Landingpage/Landingpage";
import About from "../Pages/About/About";
import Corporate from "../Pages/Services/Corporateprinting/Corporate";




export const Mainrouter = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children : [
            { index: true, element: <Landingpage /> },
            { path: "/about", element: <About /> },
            { path: "/services/corporateprinting", element: <Corporate /> },
        ]
    }
])