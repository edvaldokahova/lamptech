import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LegalPage({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <main className="wrap max-w-3xl py-20 sm:py-28">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-mist/60 hover:text-white">
        <ArrowLeft size={16} /> Voltar ao início
      </Link>
      <h1 className="h2 mt-8">{titulo}</h1>
      <p className="mt-3 text-sm text-mist/40">Última atualização: outubro de 2026</p>
      <div className="mt-10 space-y-6 leading-relaxed text-mist/70 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-white">
        {children}
      </div>
    </main>
  );
}
