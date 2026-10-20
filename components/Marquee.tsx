const itens = [
  "Qualquer TV vira Smart",
  "Imagem até 8K HDR",
  "Comando por voz Google",
  "YouTube e Google Play",
  "Instalação em casa",
  "Suporte e garantia LampTech",
];

export default function Marquee() {
  const linha = [...itens, ...itens];
  return (
    <div className="relative border-y border-white/10 bg-plum/60 py-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {linha.map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-lg sm:text-xl text-white/80">
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
