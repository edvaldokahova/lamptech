import Image from "next/image";
import { ArrowRight, Check, Mic, Sparkles, Wifi } from "lucide-react";
import { site, kz } from "@/lib/site";
import { OrderButton } from "./OrderProvider";

export default function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden pt-28 sm:pt-36 pb-20 sm:pb-28 min-h-[100svh] flex items-center">
      {/* Luz de projetor + brilhos */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[720px] w-[1100px] -translate-x-1/2 animate-beam bg-[conic-gradient(from_180deg_at_50%_0%,transparent_38%,rgba(167,139,250,.28)_47%,rgba(232,121,249,.22)_53%,transparent_62%)] blur-2xl" />
        <div className="absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-violet/30 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[460px] w-[460px] rounded-full bg-orchid/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="wrap grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="kicker">
            <span className="h-px w-8 bg-gold" /> TV Box Android · Instalação em casa
          </p>
          <h1 className="mt-6 font-display text-[44px] leading-[.98] sm:text-7xl lg:text-[84px] font-semibold tracking-tight text-white">
            A sua sala.
            <br />
            Agora, um <span className="grad-gold italic">cinema</span>.
          </h1>
          <p className="lead mt-7 max-w-xl">
            Transforme qualquer televisão numa Smart TV com imagem até 8K, comando por voz e as suas aplicações favoritas.
            Nós levamos, instalamos e configuramos.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <OrderButton>
              Quero a minha TV Box <ArrowRight size={18} />
            </OrderButton>
            <a href="#como-funciona" className="btn-glass">
              Como funciona
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-mist/60">
            {["Instalação incluída", "Suporte + garantia", "Entrega em mão"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check size={16} className="text-gold" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div aria-hidden className="absolute inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-violet/60 via-orchid/30 to-gold/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-[36px] border border-white/15 shadow-[0_40px_120px_-30px_rgba(124,58,237,.7)]">
            <Image
              src="/media/produto.webp"
              alt="TV Box LampTech com comando por voz"
              width={1120}
              height={1256}
              priority
              sizes="(max-width: 1024px) 90vw, 520px"
              className="h-auto w-full"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/80 to-transparent" />
          </div>

          <div className="glass absolute -left-4 sm:-left-10 top-10 flex items-center gap-3 px-4 py-3 animate-float">
            <Sparkles size={18} className="text-gold" />
            <span className="text-sm font-medium text-white">Até 8K Ultra HD</span>
          </div>
          <div className="glass absolute -right-3 sm:-right-8 top-1/2 flex items-center gap-3 px-4 py-3 animate-float [animation-delay:1.5s]">
            <Mic size={18} className="text-orchid" />
            <span className="text-sm font-medium text-white">“Hey Google”</span>
          </div>
          <div className="glass absolute bottom-6 left-6 right-6 flex items-center justify-between px-5 py-4">
            <div>
              <p className="text-[11px] uppercase tracking-[.2em] text-mist/50">Instalação incluída</p>
              <p className="font-display text-2xl font-semibold grad-gold">{kz(site.produto.preco)}</p>
            </div>
            <Wifi size={22} className="text-mist/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
