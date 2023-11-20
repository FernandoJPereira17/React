import { createBrowserRouter } from "react-router-dom";
import { Mainlayout } from "../layouts/MainLayout";

export const routes = createBrowserRouter([
    
    {
        path:"/",
        element: <Mainlayout />,
        children: [
            {
                path:'/',
                element: <h1>Olá</h1>,
            },
        ]
    }
]);
