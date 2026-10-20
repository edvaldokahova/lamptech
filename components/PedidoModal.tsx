"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ArrowRight, ShieldCheck } from "lucide-react";
import { site, kz, waLink } from "@/lib/site";

export default function PedidoModal({
  aberto,
  ofertaInicial,
  onFechar,
}: {
  aberto: boolean;
  ofertaInicial: string;
  onFechar: () => void;
}) {
  const [montado, setMontado] = useState(false);
  const [nome, setNome] = useState("");
  const [zona, setZona] = useState("");
  const [qtd, setQtd] = useState(1);
  const [oferta, setOferta] = useState("");
  const [obs, setObs] = useState("");

  useEffect(() => setMontado(true), []);

  useEffect(() => {
    if (!aberto) return;
    setOferta(ofertaInicial);
    const o = site.ofertas.find((x) => x.id === ofertaInicial);
    setQtd(o && "unidades" in o && o.unidades ? o.unidades : 1);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onFechar();
    document.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [aberto, ofertaInicial, onFechar]);

  if (!montado || !aberto) return null;

  const of = site.ofertas.find((x) => x.id === oferta);
  const bruto = site.produto.preco * qtd;
  const desconto = of && "desconto" in of && of.desconto && qtd >= (of.unidades ?? 1) ? bruto * of.desconto : 0;
  const total = bruto - desconto;

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    const linhas = [
      `Olá LampTech! Quero encomendar a minha TV Box.`,
      ``,
      `• Nome: ${nome}`,
      `• Zona/Bairro: ${zona}`,
      `• Quantidade: ${qtd}`,
      of ? `• Oferta: ${of.titulo} (${of.destaque})` : `• Oferta: nenhuma`,
      `• Valor estimado: ${kz(total)}`,
      obs ? `• Observações: ${obs}` : "",
    ].filter((l) => l !== "");
    window.open(waLink(linhas.join("\n")), "_blank", "noopener,noreferrer");
    onFechar();
  }

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={onFechar} />
      <form
        onSubmit={enviar}
        className="relative w-full sm:max-w-lg max-h-[92svh] overflow-y-auto rounded-t-[28px] sm:rounded-[28px] border border-white/10 bg-plum p-6 sm:p-8 shadow-2xl"
      >
        <button type="button" onClick={onFechar} aria-label="Fechar" className="absolute right-4 top-4 rounded-full p-2 text-white/60 hover:bg-white/10 hover:text-white">
          <X size={20} />
        </button>
        <p className="kicker">Encomenda</p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-white">A sua sala está a um passo de virar cinema.</h3>
        <p className="mt-2 text-sm text-mist/60">Preencha e a mensagem segue pronta para o nosso WhatsApp.</p>

        <div className="mt-6 space-y-3">
          <input required className="field" placeholder="O seu nome" value={nome} onChange={(e) => setNome(e.target.value)} autoComplete="name" />
          <input required className="field" placeholder="Zona / bairro para a instalação" value={zona} onChange={(e) => setZona(e.target.value)} />

          <div>
            <p className="mb-2 text-xs font-medium text-mist/60">Quantidade</p>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setQtd(n)}
                  className={`rounded-2xl border py-3 text-sm font-semibold transition-colors ${
                    qtd === n ? "border-gold bg-gold/15 text-gold" : "border-white/10 bg-white/[.04] text-white/70 hover:border-white/25"
                  }`}
                >
                  {n} {n === 1 ? "unidade" : "unidades"}
                </button>
              ))}
            </div>
          </div>

          <select className="field appearance-none" value={oferta} onChange={(e) => setOferta(e.target.value)}>
            <option value="" className="bg-plum">Sem oferta</option>
            {site.ofertas.map((o) => (
              <option key={o.id} value={o.id} className="bg-plum">
                {o.titulo} — {o.destaque}
              </option>
            ))}
          </select>

          <textarea className="field" rows={2} placeholder="Observações (opcional)" value={obs} onChange={(e) => setObs(e.target.value)} />
        </div>

        <div className="mt-5 flex items-end justify-between rounded-2xl border border-white/10 bg-ink/50 px-5 py-4">
          <div>
            <p className="text-xs text-mist/50">Valor estimado</p>
            {desconto > 0 && <p className="text-xs text-mist/40 line-through">{kz(bruto)}</p>}
          </div>
          <p className="font-display text-2xl font-semibold grad-gold">{kz(total)}</p>
        </div>

        <button type="submit" className="btn-gold mt-5 w-full">
          Enviar pedido pelo WhatsApp <ArrowRight size={18} />
        </button>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-mist/45">
          <ShieldCheck size={14} /> Sem pagamento agora. Confirmamos tudo consigo.
        </p>
      </form>
    </div>,
    document.body
  );
}
