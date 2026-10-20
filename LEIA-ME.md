# LampTech — site oficial

Site de uma página (mais Termos e Privacidade), sem base de dados. As encomendas seguem prontas para o WhatsApp **934 053 998**.

## Publicar (GitHub → Vercel)
1. Cria um repositório novo no GitHub chamado `lamptech` e sobe TODO o conteúdo desta pasta.
2. Na Vercel: **Add New → Project** → escolhe `lamptech` → **Deploy**. Não precisa de variáveis de ambiente.
3. Quando tiveres o endereço final (ex.: `lamptech.vercel.app` ou um domínio), muda `url` em `lib/site.ts`.

## Testar no computador
```
npm install
npm run dev
```
Abre http://localhost:3000

## Onde mudar as coisas
Tudo está em **`lib/site.ts`**: preço, ofertas, contactos, perguntas frequentes, fotos de clientes, links do Facebook/Instagram e a zona de entrega.
- Redes sociais e zona só aparecem no site quando forem preenchidas.
- Imagens e vídeo estão em `public/media/`.
