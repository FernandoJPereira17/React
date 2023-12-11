import { Link } from "react-router-dom";

export function SideBar(){
    return (
        <main className="w-2/12 bg-white">
        <nav className="w-1/6 left-0 right-0">
            <ul className="px-4 flex flex-col gap-3">
                <li className="text-lg font-semibold">
                    <Link to="/">Home</Link>
                </li>
                <li className="text-lg font-semibold">
                    <Link to="/usuarios">Usuários</Link>
                </li>
                <li className="text-lg font-semibold">
                    <Link to="/produtos">Produtos</Link>
                </li>
                <li className="text-lg font-semibold">
                    <Link to="/clientes">Clientes</Link>    
                </li>
            </ul>
        </nav>
        </main>
    );
}

