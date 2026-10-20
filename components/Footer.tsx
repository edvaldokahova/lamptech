import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  const { contactos, redes } = site;
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="wrap grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Image src="/media/logo-dark.png" alt="LampTech" width={150} height={90} className="h-16 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist/55">
            TV Boxes Android com entrega, instalação e suporte. A tecnologia do futuro, na sua sala hoje.
          </p>
          {(redes.facebook || redes.instagram) && (
            <div className="mt-6 flex gap-3">
              {redes.facebook && (
                <a href={redes.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full border border-white/10 p-2.5 text-mist/70 hover:border-gold/50 hover:text-white">
                  <Facebook size={18} />
                </a>
              )}
              {redes.instagram && (
                <a href={redes.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-white/10 p-2.5 text-mist/70 hover:border-gold/50 hover:text-white">
                  <Instagram size={18} />
                </a>
              )}
            </div>
          )}
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-mist/40">Contactos</p>
          {contactos.telefones.map((t) => (
            <a key={t.numero} href={t.label === "WhatsApp" ? `https://wa.me/${contactos.whatsapp}` : `tel:${t.tel}`} className="flex items-center gap-2.5 text-mist/70 hover:text-white">
              {t.label === "WhatsApp" ? <MessageCircle size={16} className="shrink-0 text-gold" /> : <Phone size={16} className="shrink-0 text-gold" />}
              {t.numero}
            </a>
          ))}
          <a href={`mailto:${contactos.email}`} className="flex items-center gap-2.5 text-mist/70 hover:text-white">
            <Mail size={16} className="shrink-0 text-gold" /> {contactos.email}
          </a>
          {contactos.zona && (
            <p className="flex items-start gap-2.5 text-mist/70">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" /> {contactos.zona}
            </p>
          )}
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-mist/40">Legal</p>
          <Link href="/termos" className="block text-mist/70 hover:text-white">Termos e condições</Link>
          <Link href="/privacidade" className="block text-mist/70 hover:text-white">Política de privacidade</Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-mist/35">
        © {new Date().getFullYear()} LampTech · {site.slogan}
      </div>
    </footer>
  );
}
