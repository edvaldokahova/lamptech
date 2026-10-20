import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { OrderButton } from "./OrderProvider";
import Reveal from "./Reveal";

export default function CtaFinal() {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="wrap">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[40px] border border-white/10 px-6 py-16 sm:px-16 sm:py-24 text-center">
            <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,.55),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(232,121,249,.3),transparent_55%)] bg-plum" />
            <Image src="/media/logo-dark.png" alt="" width={160} height={96} className="mx-auto h-20 sm:h-24 w-auto" />
            <h2 className="h2 mx-auto mt-8 max-w-3xl">
              Esta noite, a sessão começa <span className="grad-gold">na sua sala</span>.
            </h2>
            <p className="lead mx-auto mt-5 max-w-xl">Encomende agora. Nós tratamos da entrega, instalação e configuração.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <OrderButton>
                Encomendar a minha TV Box <ArrowRight size={18} />
              </OrderButton>
              <a href={`tel:${site.contactos.telefones[0].tel}`} className="btn-glass">
                <Phone size={16} /> {site.contactos.telefones[0].numero}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
