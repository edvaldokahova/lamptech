"use client";

import { createContext, useContext, useState } from "react";
import PedidoModal from "./PedidoModal";

const Ctx = createContext<{ abrir: (ofertaId?: string) => void }>({ abrir: () => {} });

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [aberto, setAberto] = useState(false);
  const [oferta, setOferta] = useState("");
  return (
    <Ctx.Provider
      value={{
        abrir: (id = "") => {
          setOferta(id);
          setAberto(true);
        },
      }}
    >
      {children}
      <PedidoModal aberto={aberto} ofertaInicial={oferta} onFechar={() => setAberto(false)} />
    </Ctx.Provider>
  );
}

export const useOrder = () => useContext(Ctx);

export function OrderButton({
  children,
  oferta,
  className = "btn-gold",
}: {
  children: React.ReactNode;
  oferta?: string;
  className?: string;
}) {
  const { abrir } = useOrder();
  return (
    <button type="button" onClick={() => abrir(oferta)} className={className}>
      {children}
    </button>
  );
}
