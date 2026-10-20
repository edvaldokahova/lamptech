import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Política de privacidade — LampTech" };

export default function Privacidade() {
  return (
    <LegalPage titulo="Política de privacidade">
      <p>A LampTech respeita a sua privacidade. Este site não cria contas nem guarda os seus dados numa base de dados.</p>
      <h2>Que dados recolhemos</h2>
      <p>Quando faz uma encomenda, os dados que escreve (nome, zona, quantidade e observações) são colocados numa mensagem que o próprio cliente envia pelo WhatsApp. Só os recebemos se enviar essa mensagem.</p>
      <h2>Para que usamos</h2>
      <p>Usamos estes dados apenas para responder ao pedido, combinar a entrega e a instalação, e prestar suporte.</p>
      <h2>Partilha</h2>
      <p>Não vendemos nem partilhamos os seus dados com terceiros para fins de marketing.</p>
      <h2>Os seus direitos</h2>
      <p>Pode pedir a qualquer momento que apaguemos as suas mensagens e dados. Escreva para {site.contactos.email}.</p>
    </LegalPage>
  );
}
