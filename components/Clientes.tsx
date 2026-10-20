import Image from "next/image";
import { Users } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Clientes() {
  // Lista duplicada para o carrossel andar sem fim (o CSS desloca exatamente metade)
  const fotos = [...site.clientes, ...site.clientes];

  return (
    <section id="clientes" className="relative py-20 sm:py-28 bg-gradient-to-b from-transparent via-plum/60 to-transparent overflow-hidden">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="kicker">
            <Users size={14} /> Clientes LampTech
          </p>
          <h2 className="h2 mt-4">Salas que já viraram cinema.</h2>
          <p className="lead mt-5">Pessoas reais, entregas reais. Cada TV Box sai das nossas mãos para a sua casa.</p>
        </Reveal>
      </div>

      <div className="group relative mt-14">
        {/* Gradientes nas pontas: as fotos entram e saem suavemente */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-48 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-48 bg-gradient-to-l from-ink via-ink/70 to-transparent" />

        <div className="flex w-max animate-carrossel gap-4 sm:gap-6 group-hover:[animation-play-state:paused]">
          {fotos.map((src, i) => (
            <div
              key={i}
              aria-hidden={i >= site.clientes.length}
              className="relative w-[220px] sm:w-[280px] shrink-0 overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_60px_-25px_rgba(124,58,237,.6)]"
            >
              <Image
                src={src}
                alt={i < site.clientes.length ? `Cliente LampTech ${i + 1}` : ""}
                width={720}
                height={1280}
                sizes="280px"
                className="aspect-[3/4] h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/60 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
