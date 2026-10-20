// ============================================================
// LAMPTECH — todo o conteúdo editável do site está AQUI.
// Mudar preço, ofertas, contactos ou textos = editar este ficheiro.
// ============================================================

export const site = {
  nome: "LampTech",
  slogan: "Trazendo o futuro",
  url: "https://lamptech.vercel.app", // trocar pelo domínio quando existir

  contactos: {
    whatsapp: "244934053998", // número usado nos botões de encomenda
    telefones: [
      { label: "Chamadas", numero: "934 255 726", tel: "+244934255726" },
      { label: "WhatsApp", numero: "934 053 998", tel: "+244934053998" },
      { label: "Chamadas", numero: "952 247 029", tel: "+244952247029" },
    ],
    email: "lamptech2@gmail.com",
    zona: "", // ex.: "Luanda — entregas e instalação em toda a cidade" (ainda por confirmar)
  },

  redes: {
    facebook: "", // colar o link da página quando o cliente enviar
    instagram: "",
  },

  produto: {
    nome: "TV Box LampTech",
    modelo: "Mortal T1",
    preco: 55000,
    precoNota: "TV Box + instalação e configuração em sua casa",
    specs: [
      { titulo: "Até 8K Ultra HD", texto: "Imagem nítida e cores vivas com HDR." },
      { titulo: "Comando por voz", texto: "Diga “Hey Google” e encontre o que quer ver." },
      { titulo: "Android TV", texto: "Google Play, YouTube e as suas aplicações favoritas." },
      { titulo: "Wi-Fi rápido", texto: "Streaming estável, sem cabos pela sala." },
      { titulo: "Portátil", texto: "Leve-a consigo e use em qualquer televisor." },
      { titulo: "Sempre atualizada", texto: "Atualizações constantes do sistema Android." },
    ],
  },

  ofertas: [
    {
      id: "leve-2",
      titulo: "Leve 2 TV Boxes",
      destaque: "15% OFF",
      texto: "Uma para a sala, outra para o quarto. Desconto imediato na compra de duas unidades.",
      unidades: 2,
      desconto: 0.15,
    },
    {
      id: "familia",
      titulo: "Pacote Família Premium",
      destaque: "Instalação grátis",
      texto: "15% de desconto na segunda unidade, com instalação e configuração gratuitas.",
    },
    {
      id: "recompra",
      titulo: "Recompra facilitada",
      destaque: "10% OFF",
      texto: "Perdeu ou danificou a sua TV Box? O novo aparelho sai com 10% de desconto.",
    },
  ],

  passos: [
    { titulo: "Encomende em 1 minuto", texto: "Preencha o pedido. A mensagem chega pronta ao nosso WhatsApp." },
    { titulo: "Instalamos em sua casa", texto: "A equipa LampTech liga, configura e explica tudo ao detalhe." },
    { titulo: "Carregue no play", texto: "A sua televisão passa a ser Smart. Pipocas por sua conta." },
  ],

  faq: [
    { q: "Funciona na minha televisão?", a: "Sim. Qualquer televisor com entrada HDMI passa a ser uma Smart TV, mesmo os modelos mais antigos." },
    { q: "Preciso de internet?", a: "Sim. A TV Box liga-se à sua rede Wi-Fi de casa." },
    { q: "A instalação está incluída?", a: "Está. Instalamos e configuramos a TV Box em sua casa, sem custo adicional." },
    { q: "Tem garantia e suporte?", a: "Sim. Cada TV Box tem suporte e garantia exclusiva LampTech. Pergunte-nos as condições no WhatsApp." },
    { q: "E se perder ou danificar o aparelho?", a: "Com a Recompra facilitada, o novo aparelho sai com 10% de desconto." },
    { q: "Como faço a encomenda?", a: "Clique em “Encomendar”, preencha os seus dados e a mensagem segue pronta para o nosso WhatsApp." },
  ],

  clientes: [
    "/media/cliente-1.6.webp",
    "/media/cliente-2.6.webp",
    "/media/cliente-0.6.webp",
    "/media/cliente-10.6.webp",
    "/media/cliente-16.6.webp",
    "/media/cliente-9.6.webp",
  ],
};

export type Oferta = (typeof site.ofertas)[number];

export function kz(v: number) {
  return new Intl.NumberFormat("pt-AO", { maximumFractionDigits: 0 }).format(v).replace(/\s/g, ".") + " Kz";
}

export function waLink(texto: string) {
  return `https://wa.me/${site.contactos.whatsapp}?text=${encodeURIComponent(texto)}`;
}
