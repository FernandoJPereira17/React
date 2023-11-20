export function SideBar(){
    return (
        <main className="h-full">
        <nav className="w-1/6 absolute left-0 right-0">
            <ul className="px-4 flex flex-col gap-3">
                <li className="text-lg font-semibold">Home</li>
                <li className="text-lg font-semibold">Produtos</li>
                <li className="text-lg font-semibold">Clientes</li>
            </ul>
        </nav>
        </main>
    );
}
