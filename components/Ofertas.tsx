import Image from "next/image";
import { Gift, ArrowRight } from "lucide-react";
import { site, kz } from "@/lib/site";
import Reveal from "./Reveal";
import { OrderButton } from "./OrderProvider";

export default function Ofertas() {
  return (
    <section id="ofertas" className="relative py-20 sm:py-28 overflow-hidden">
      <div aria-hidden className="absolute right-[-10%] top-10 -z-10 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[140px]" />
      <div className="wrap grid gap-12 lg:grid-cols-[.9fr_1.1fr] items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[36px] border border-white/10">
            <Image src="/media/cliente-oferta.webp" alt="TV Box LampTech com comando, cabo HDMI e transformador" width={1024} height={1024} sizes="(max-width: 1024px) 100vw, 480px" className="h-auto w-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <span className="absolute left-5 top-5 rounded-full bg-ink/85 backdrop-blur px-4 py-2 text-xs font-semibold uppercase tracking-[.2em] text-gold">Só este mês</span>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="kicker">
              <Gift size={14} /> Ofertas especiais
            </p>
            <h2 className="h2 mt-4">
              Mais ecrãs.
              <br />
              <span className="grad-gold">Menos custo.</span>
            </h2>
            <p className="lead mt-5">Por tempo limitado. Escolha a oferta e ela já segue no seu pedido.</p>
          </Reveal>

          <div className="mt-10 space-y-4">
            {site.ofertas.map((o, i) => {
              const preco =
                "unidades" in o && o.unidades && "desconto" in o && o.desconto
                  ? { antes: site.produto.preco * o.unidades, depois: site.produto.preco * o.unidades * (1 - o.desconto) }
                  : null;
              return (
                <Reveal key={o.id} delay={i * 90}>
                  <div className="glass group flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between transition-colors hover:border-gold/40">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-xl font-semibold text-white">{o.titulo}</h3>
                        <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">{o.destaque}</span>
                      </div>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-mist/60">{o.texto}</p>
                      {preco && (
                        <p className="mt-3 text-sm">
                          <span className="text-mist/40 line-through">{kz(preco.antes)}</span>{" "}
                          <span className="ml-1 font-semibold text-white">{kz(preco.depois)}</span>
                        </p>
                      )}
                    </div>
                    <OrderButton oferta={o.id} className="btn-glass shrink-0 group-hover:border-gold/50">
                      Aproveitar <ArrowRight size={16} />
                    </OrderButton>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
