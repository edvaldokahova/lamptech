import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Produto from "@/components/Produto";
import ComoFunciona from "@/components/ComoFunciona";
import Ofertas from "@/components/Ofertas";
import Clientes from "@/components/Clientes";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";
import { OrderProvider } from "@/components/OrderProvider";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: site.produto.nome,
  brand: { "@type": "Brand", name: "LampTech" },
  image: `${site.url}/media/produto.webp`,
  description: "TV Box Android com imagem até 8K, comando por voz e instalação em casa.",
  offers: { "@type": "Offer", priceCurrency: "AOA", price: site.produto.preco, availability: "https://schema.org/InStock" },
};

export default function Home() {
  return (
    <OrderProvider>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Produto />
        <ComoFunciona />
        <Ofertas />
        <Clientes />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsappFloat />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </OrderProvider>
  );
}
