import { createBrowserRouter } from "react-router-dom";
import { Mainlayout } from "../layouts/MainLayout";
import ReactHooks from "../pages/ReactHooks";
import UsersPage from "../pages/ReactHooks/Users";


export const routes = createBrowserRouter([
    
    {
        path:"/",
        element: <Mainlayout />,
        children: [
            {
                path:'/',
                element: <ReactHooks />,
            },
            {
                path:'/usuarios',
                element: <UsersPage />,
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

