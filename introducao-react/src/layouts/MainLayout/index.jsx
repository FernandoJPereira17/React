import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

export function Mainlayout() {
  return (
    <main>
      <Header />
      <section className="min-h-screen">
        <SideBar />
      </section>
    </main>
  );
}
