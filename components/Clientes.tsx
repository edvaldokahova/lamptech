import Image from "next/image";
import { Users } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Clientes() {
  return (
    <section id="clientes" className="relative py-20 sm:py-28 bg-gradient-to-b from-transparent via-plum/60 to-transparent">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="kicker">
            <Users size={14} /> Clientes LampTech
          </p>
          <h2 className="h2 mt-4">Salas que já viraram cinema.</h2>
          <p className="lead mt-5">Pessoas reais, entregas reais. Cada TV Box sai das nossas mãos para a sua casa.</p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-[minmax(0,320px)_1fr]">
          <Reveal className="mx-auto w-full max-w-[320px]">
            <div className="relative rounded-[42px] border border-white/15 bg-black p-2.5 shadow-[0_30px_100px_-20px_rgba(124,58,237,.6)]">
              <video
                className="aspect-[9/16] w-full rounded-[34px] object-cover"
                src="/media/clientes.mp4"
                poster="/media/clientes-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {site.clientes.map((src, i) => (
              <Reveal key={src} delay={(i % 3) * 90} className="group relative overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src={src}
                  alt={`Cliente LampTech ${i + 1}`}
                  width={720}
                  height={1280}
                  sizes="(max-width: 640px) 50vw, 260px"
                  className="aspect-[3/4] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
