"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { site } from "@/lib/site";

export default function Faq() {
  const [aberto, setAberto] = useState<number | null>(0);
  return (
    <section id="perguntas" className="py-20 sm:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="kicker">Perguntas frequentes</p>
          <h2 className="h2 mt-4">Tudo o que precisa de saber.</h2>
          <p className="lead mt-5">Ficou alguma dúvida? Fale connosco no WhatsApp, respondemos rápido.</p>
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {site.faq.map((f, i) => {
            const on = aberto === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setAberto(on ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={on}
                >
                  <span className="font-display text-lg text-white">{f.q}</span>
                  <Plus size={20} className={`shrink-0 text-gold transition-transform duration-300 ${on ? "rotate-45" : ""}`} />
                </button>
                <div className={`grid transition-all duration-500 ${on ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden leading-relaxed text-mist/65">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
