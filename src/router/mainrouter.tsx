import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Landingpage from "../Pages/Landingpage/Landingpage";
import About from "../Pages/About/About";




export const Mainrouter = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children : [
            { index: true, element: <Landingpage /> },
            { path: "/about", element: <About /> },
        ]
    }
])