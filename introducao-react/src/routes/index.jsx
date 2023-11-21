import { createBrowserRouter } from "react-router-dom";
import { Mainlayout } from "../layouts/MainLayout";
import Hooks from "../pages/Hooks";

export const routes = createBrowserRouter([
    
    {
        path:"/",
        element: <Mainlayout />,
        children: [
            {
                path:'/',
                element: <Hooks />,
            },
            {
                path:'/clientes',
                element: <h1>Olá Clientes</h1>,
            },
            {
                path:'/produtos',
                element: <h1>Olá Produtos</h1>,
            },
        ]
    }
]);

