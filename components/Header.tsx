"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { OrderButton } from "./OrderProvider";

const links = [
  { href: "#produto", label: "TV Box" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#ofertas", label: "Ofertas" },
  { href: "#clientes", label: "Clientes" },
  { href: "#perguntas", label: "Perguntas" },
];

export default function Header() {
  const [solido, setSolido] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const on = () => setSolido(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solido || menu ? "border-b border-white/10 bg-ink/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="wrap flex h-16 sm:h-20 items-center justify-between">
        <a href="#topo" aria-label="LampTech — início" onClick={() => setMenu(false)}>
          <Image src="/media/logo-dark.png" alt="LampTech" width={150} height={90} priority className="h-12 sm:h-16 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-9 text-sm text-mist/70">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <OrderButton className="btn-gold !px-5 !py-2.5 text-sm hidden sm:inline-flex">Encomendar</OrderButton>
          <button onClick={() => setMenu(!menu)} className="lg:hidden rounded-full p-2 text-white" aria-label={menu ? "Fechar menu" : "Abrir menu"}>
            {menu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menu && (
        <nav className="lg:hidden wrap pb-6 pt-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenu(false)} className="block border-b border-white/10 py-4 font-display text-lg text-white">
              {l.label}
            </a>
          ))}
          <div className="mt-5" onClick={() => setMenu(false)}>
            <OrderButton className="btn-gold w-full">Encomendar a minha TV Box</OrderButton>
          </div>
        </nav>
      )}
    </header>
  );
}
