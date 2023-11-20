import logo from "../../assets/imagens/logo-digital.png.webp"

export function Header() {
  return (
    <header className="flex justify-between px-10 py-4 bg-sky-900 items-center">
          <img className="h-10" src={logo} alt="" />
          <div className="gap-2 flex items-center">
          <box-icon name='user-circle' type='solid' color='#fff' ></box-icon>
          <p className="text-white">Olá, Fernando Pereira</p>
          </div>
    </header>
  );
}
