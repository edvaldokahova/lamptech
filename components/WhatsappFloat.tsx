import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function WhatsappFloat() {
  return (
    <a
      href={`https://wa.me/${site.contactos.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,.6)] transition-transform hover:scale-110"
    >
      <MessageCircle size={26} />
    </a>
  );
}
