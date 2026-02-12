import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Landingpage from "../Pages/Landingpage/Landingpage";
import About from "../Pages/About/About";
import Corporate from "../Pages/Services/Corporateprinting/Corporate";
import Branding from "../Pages/Services/Branding&merchandise/Branding";
import Largeformat from "../Pages/Services/Largeformat&singage/Largeformat";




export const Mainrouter = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children : [
            { index: true, element: <Landingpage /> },
            { path: "/about", element: <About /> },
            { path: "/services/corporateprinting", element: <Corporate /> },
            { path: "/services/branding&merchandise", element: <Branding /> },
            { path: "/services/largeformat&singage", element: <Largeformat /> },
        ]
    }
])