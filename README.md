# Landing Diogo Nasser

Site estático, sem build: HTML, CSS e JS puros. Abre direto no navegador ou sobe para Vercel/Netlify arrastando a pasta.

## Estrutura

```
index.html              página única, PT-PT por padrão
assets/css/styles.css   tokens no :root, componentes e responsivo
assets/js/main.js       idioma PT/EN, título animado, carrossel, mensagem do WhatsApp
assets/img/             fotos em WebP (com JPG de reserva)
```

## Como funciona

- **Idioma**: botões PT | EN no topo. A escolha fica guardada no navegador e na URL (`?lang=en`). Sem escolha, segue o idioma do navegador. Todos os textos estão no objeto `I18N` do `main.js`; o HTML traz o PT para SEO e para quem está sem JS.
- **Hero**: título entra palavra a palavra; carrossel infinito das casas vendidas em CSS (`@keyframes marquee`), para ao passar o rato e fica parado com `prefers-reduced-motion`. A velocidade é calculada pela largura (~40px/s).
- **WhatsApp**: todos os botões abrem `wa.me/351911524107` com mensagem pronta no idioma ativo. O bloco "Quanto vale a tua casa?" monta a mensagem em formato de nota com tipologia, freguesia e área.
- **Revelação ao rolar**: `animation-timeline: view()` só onde o navegador suporta; nos outros o conteúdo aparece normal.
- **Fonte**: pilha do sistema com Segoe UI em primeiro, a mesma do exemplo do 21st.dev. No Mac aparece a San Francisco.

## A confirmar com o Diogo antes de publicar

- Função da Lucinda na equipa
- Números e prémios (não usei nenhuma estatística não verificável)
- Se o link do Doutor Finanças deve continuar a ser o de parceiro (é o que está no Linktree dele)
- Fotos: as atuais vêm do Instagram. Pedir ensaio (retrato do Diogo e da equipa)
- Domínio: diogonasserimobiliario.com está em 404 e pode receber este site

## Trocar ou acrescentar casas vendidas

Duplicar um `<li class="marquee__item">` no `index.html`, apontar para a nova imagem em `assets/img/` (600x751, WebP + JPG) e escrever o `alt` em PT e em `data-alt-en`. O JS duplica a lista sozinho para o loop.
