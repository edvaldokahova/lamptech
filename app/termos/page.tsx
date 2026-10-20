import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Termos e condições — LampTech" };

export default function Termos() {
  return (
    <LegalPage titulo="Termos e condições">
      <p>Ao encomendar através deste site, o cliente aceita os termos abaixo.</p>
      <h2>Encomendas</h2>
      <p>O pedido feito no site é enviado para o WhatsApp da LampTech. A encomenda só fica confirmada depois de a LampTech confirmar a disponibilidade, o valor final e a data de entrega.</p>
      <h2>Preços e ofertas</h2>
      <p>Os preços estão em Kwanzas (Kz). As ofertas são válidas por tempo limitado e não são acumuláveis, salvo indicação em contrário. O valor mostrado no formulário é uma estimativa; o valor final é confirmado pela LampTech.</p>
      <h2>Entrega e instalação</h2>
      <p>A instalação e a configuração estão incluídas no preço da TV Box. A data e a zona de instalação são combinadas com o cliente.</p>
      <h2>Garantia e suporte</h2>
      <p>Cada TV Box tem suporte e garantia LampTech. As condições e a duração da garantia são comunicadas no momento da compra.</p>
      <h2>Conteúdos</h2>
      <p>A TV Box dá acesso a aplicações e serviços de terceiros. O acesso a serviços pagos depende das respetivas subscrições, contratadas pelo cliente junto de cada fornecedor.</p>
      <h2>Contacto</h2>
      <p>Para qualquer questão: {site.contactos.email} ou WhatsApp {site.contactos.telefones[1].numero}.</p>
    </LegalPage>
  );
}
