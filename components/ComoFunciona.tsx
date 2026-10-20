import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative py-20 sm:py-28 bg-gradient-to-b from-transparent via-plum/70 to-transparent">
      <div className="wrap">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="kicker">Como funciona</p>
          <h2 className="h2 mt-4">Do pedido ao play em três passos.</h2>
        </Reveal>

        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          <div aria-hidden className="absolute left-0 right-0 top-[54px] hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block" />
          {site.passos.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 120} className="relative text-center px-4">
              <div className="mx-auto flex h-[108px] w-[108px] items-center justify-center rounded-full border border-white/10 bg-ink shadow-[0_0_60px_-10px_rgba(124,58,237,.6)]">
                <span className="font-display text-4xl font-semibold grad-gold">0{i + 1}</span>
              </div>
              <h3 className="mt-7 font-display text-xl font-semibold text-white">{p.titulo}</h3>
              <p className="mt-2 text-mist/60 leading-relaxed">{p.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
