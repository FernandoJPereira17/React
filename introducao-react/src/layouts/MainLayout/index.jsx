import { Outlet } from "react-router-dom";
import { Header } from "../main/Header";
import { SideBar } from "../main/SideBar";

export function Mainlayout() {
  return (
    <main>
      <Header />
      <section className="min-h-screen flex bg-slate-100">
        <SideBar />
        <div className="p-5">
          <Outlet />
        </div>
      </section>
    </main>
  );
}
