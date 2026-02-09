import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Landingpage from "../Pages/Landingpage/Landingpage";




export const Mainrouter = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children : [
            { index: true, element: <Landingpage /> },
        ]
    }
])