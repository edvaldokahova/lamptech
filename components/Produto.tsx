import Image from "next/image";
import { Tv, Sparkles, Mic, LayoutGrid, Wifi, Briefcase, RefreshCw } from "lucide-react";
import { site, kz } from "@/lib/site";
import Reveal from "./Reveal";
import { OrderButton } from "./OrderProvider";

const icones = [Sparkles, Mic, LayoutGrid, Wifi, Briefcase, RefreshCw];

export default function Produto() {
  return (
    <section id="produto" className="relative py-20 sm:py-28">
      <div className="wrap">
        <Reveal className="max-w-3xl">
          <p className="kicker">
            <Tv size={14} /> A TV Box
          </p>
          <h2 className="h2 mt-4">
            Pequena por fora.
            <br />
            <span className="grad-violet">Gigante na sua sala.</span>
          </h2>
          <p className="lead mt-5 max-w-2xl">
            Liga-se à televisão por HDMI e à sua rede Wi-Fi. Em minutos, tem um ecrã inteligente com tudo o que gosta de ver,
            controlado pela voz.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="glass relative overflow-hidden p-0">
            <Image
              src="/media/cliente-sofa.webp"
              alt="Cliente com a TV Box LampTech"
              width={978}
              height={1563}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-full max-h-[640px] w-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-7 pt-24">
              <p className="text-sm text-mist/60">{site.produto.precoNota}</p>
              <div className="mt-1 flex flex-wrap items-end justify-between gap-4">
                <p className="font-display text-4xl font-semibold grad-gold">{kz(site.produto.preco)}</p>
                <OrderButton className="btn-gold !py-3">Encomendar</OrderButton>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {site.produto.specs.map((s, i) => {
              const Icon = icones[i % icones.length];
              return (
                <Reveal key={s.titulo} delay={i * 70} className="glass group p-5 sm:p-6 transition-colors hover:border-gold/30">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet/40 to-orchid/20 text-white transition-transform duration-500 group-hover:scale-110">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-base sm:text-lg font-semibold text-white">{s.titulo}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist/60">{s.texto}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
