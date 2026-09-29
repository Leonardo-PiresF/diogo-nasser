/* Diogo Nasser · landing
   - idioma PT-PT / EN (query ?lang=, preferência guardada, idioma do browser)
   - título do hero entra palavra a palavra
   - carrossel infinito de casas vendidas
   - mensagem de WhatsApp montada com os dados da casa */
(() => {
  const WA_NUMBER = '351911524107';

  const I18N = {
    pt: {
      'meta.title': 'Diogo Nasser · Consultor Imobiliário na Grande Lisboa',
      skip: 'Saltar para o conteúdo',
      'nav.how': 'Como funciona', 'nav.sales': 'Vendas', 'nav.team': 'Equipa', 'nav.contact': 'Avaliação',
      'hero.tag': 'Equipa Nasser · KW Exclusive · Grande Lisboa',
      'hero.title': 'Vendo a tua casa como se fosse minha.',
      'hero.desc': 'Avaliação em 24 horas, estratégia de venda e acompanhamento até à escritura. Estas casas já mudaram de dono.',
      'hero.cta': 'Pedir avaliação no WhatsApp', 'hero.cta2': 'Conhecer a equipa',
      'hero.band': 'Casas vendidas pelo Diogo Nasser',
      'how.eyebrow': 'Como funciona', 'how.title': 'Do primeiro contacto à escritura.',
      'how.lede': 'Um processo com prazos claros, pensado para vender pelo melhor valor e sem dores de cabeça.',
      'how.s1t': 'Envias os dados', 'how.s1': 'Tipologia, freguesia e área, pelo WhatsApp. Sem formulários nem registos.',
      'how.s2t': 'Valor em 24 horas', 'how.s2': 'Recebes o valor estimado da tua casa, com o raciocínio por trás.',
      'how.s3t': 'Visita e estratégia', 'how.s3': 'Visitamos a casa e preparamos tudo a 100% antes de ir para o mercado.',
      'how.s4t': 'Até à escritura', 'how.s4': 'Acompanhamos a burocracia e a viabilidade do crédito do comprador até ao fim.',
      'sales.eyebrow': '+1 vendido', 'sales.title': 'Cada venda tem uma história.', 'sales.lede': 'Três, contadas como o Diogo as publicou.',
      'sales.a.k': 'Acima do pedido',
      'sales.a.t': 'Um processo complexo em termos burocráticos, mas rápido na venda. Fechada 30.000 € acima do asking price.',
      'sales.a.q': '“Nunca trabalhei com alguém tão eficaz.” A proprietária.',
      'sales.b.k': 'Carnaxide · T3', 'sales.b.big': '4 meses',
      'sales.b.t': 'Do primeiro contacto à escritura, da viabilidade do crédito ao fim, com o apoio do Estado aos jovens. A primeira casa do casal.',
      'sales.c.k': 'Cacém · Penthouse T4', 'sales.c.big': 'Recorde',
      'sales.c.t': 'A maior venda do Cacém até hoje, segundo o Diogo. Mais do que um número, a prova de que o trabalho bem preparado se paga.',
      'team.cap': 'Diogo Nasser e Lucinda, Equipa Nasser.',
      'team.eyebrow': 'Quem vende a tua casa', 'team.title': 'Da Deloitte à Equipa Nasser.',
      'team.p1': 'Licenciatura e mestrado em Gestão, uma carreira na Deloitte. Há dois anos, o Diogo trocou esse caminho pelo imobiliário. Com medo e com dúvidas, mas com uma certeza: aquele futuro não o ia fazer feliz.',
      'team.p2': 'Hoje não vende sozinho. A Equipa Nasser, na KW Exclusive, prepara cada casa antes de ir para o mercado, trata da burocracia e acompanha o processo até à escritura.',
      'team.quote': '“Não crescemos sozinhos. Aprendemos juntos, melhoramos juntos, construímos juntos.”',
      'team.m1r': 'Consultor · líder da equipa',
      'team.m1': 'Licenciatura e mestrado em Gestão, ex-Deloitte. Especialista convidado do Summit Imobiliário Portugal 2026 e do podcast The Real Deal.',
      'team.m2r': 'Equipa Nasser',
      'team.m2': '“Trabalhadora, exigente e com uma dedicação ao trabalho que, ainda hoje, me surpreende.” Diogo, no primeiro ano da Lucinda na equipa.',
      'team.m3r': 'Clientes compradores',
      'team.m3': 'Lidera os processos de quem compra. O primeiro negócio foi um T3 na Moita, com 100% de financiamento para a cliente.',
      'zones.title': 'Onde vendemos',
      'cta.eyebrow': 'Avaliação em 24 horas', 'cta.title': 'Quanto vale a tua casa?',
      'cta.lede': 'Preenche três dados. Abrimos o WhatsApp com a mensagem pronta e recebes o valor em 24 horas.',
      'cta.credit': 'Vais comprar? Simula quanto os bancos te emprestam.',
      'cta.type': 'Tipologia', 'cta.house': 'Moradia', 'cta.parish': 'Freguesia', 'cta.parishPh': 'ex.: Benfica', 'cta.area': 'Área (m²)',
      'cta.submit': 'Pedir avaliação no WhatsApp',
      'footer.role': 'Consultor imobiliário · Equipa Nasser',
      fab: 'Pedir avaliação',
      msgGeneric: 'Olá Diogo, quero saber quanto vale a minha casa.',
      msg: (t, f, a) => `Olá Diogo, quero saber quanto vale a minha casa.\nTipologia: ${t}\nFreguesia: ${f || '…'}\nÁrea: ${a || '…'} m²`
    },
    en: {
      'meta.title': 'Diogo Nasser · Real Estate Consultant in Greater Lisbon',
      skip: 'Skip to content',
      'nav.how': 'How it works', 'nav.sales': 'Sales', 'nav.team': 'Team', 'nav.contact': 'Valuation',
      'hero.tag': 'Team Nasser · KW Exclusive · Greater Lisbon',
      'hero.title': 'I sell your home as if it were mine.',
      'hero.desc': 'A valuation within 24 hours, a sales strategy and support all the way to the deed. These homes already have new owners.',
      'hero.cta': 'Request a valuation on WhatsApp', 'hero.cta2': 'Meet the team',
      'hero.band': 'Homes sold by Diogo Nasser',
      'how.eyebrow': 'How it works', 'how.title': 'From first contact to the deed.',
      'how.lede': 'A process with clear deadlines, built to sell at the best price without the headaches.',
      'how.s1t': 'Send the details', 'how.s1': 'Type, parish and size, on WhatsApp. No forms, no sign-up.',
      'how.s2t': 'Value in 24 hours', 'how.s2': 'You get your home’s estimated value, with the reasoning behind it.',
      'how.s3t': 'Visit and strategy', 'how.s3': 'We visit the home and get everything 100% ready before it goes on the market.',
      'how.s4t': 'Through to the deed', 'how.s4': 'We handle the paperwork and the buyer’s mortgage viability until the end.',
      'sales.eyebrow': '+1 sold', 'sales.title': 'Every sale has a story.', 'sales.lede': 'Three of them, told the way Diogo posted them.',
      'sales.a.k': 'Above asking',
      'sales.a.t': 'A complex process in terms of paperwork, but a fast sale. Closed €30,000 above the asking price.',
      'sales.a.q': '“I’ve never worked with anyone this efficient.” The owner.',
      'sales.b.k': 'Carnaxide · 3-bed', 'sales.b.big': '4 months',
      'sales.b.t': 'From first contact to the deed, mortgage viability included, with the state support for young buyers. The couple’s first home.',
      'sales.c.k': 'Cacém · 4-bed penthouse', 'sales.c.big': 'Record',
      'sales.c.t': 'The biggest sale in Cacém to date, according to Diogo. More than a number, proof that well-prepared work pays off.',
      'team.cap': 'Diogo Nasser and Lucinda, Team Nasser.',
      'team.eyebrow': 'Who sells your home', 'team.title': 'From Deloitte to Team Nasser.',
      'team.p1': 'A bachelor’s and a master’s in Management, a career at Deloitte. Two years ago Diogo swapped that path for real estate. Afraid and full of doubts, but sure of one thing: that future would not make him happy.',
      'team.p2': 'Today he doesn’t sell alone. Team Nasser, at KW Exclusive, gets every home ready before it goes on the market, handles the paperwork and sees the process through to the deed.',
      'team.quote': '“We don’t grow alone. We learn together, improve together, build together.”',
      'team.m1r': 'Consultant · team lead',
      'team.m1': 'Bachelor’s and master’s in Management, ex-Deloitte. Invited expert at Summit Imobiliário Portugal 2026 and on The Real Deal podcast.',
      'team.m2r': 'Team Nasser',
      'team.m2': '“Hard-working, demanding, and with a dedication to the work that still surprises me.” Diogo, on Lucinda’s first year with the team.',
      'team.m3r': 'Buyer clients',
      'team.m3': 'Leads the buyer-side processes. Her first deal was a 3-bed in Moita, with 100% financing for the client.',
      'zones.title': 'Where we sell',
      'cta.eyebrow': 'Valuation in 24 hours', 'cta.title': 'What is your home worth?',
      'cta.lede': 'Fill in three details. We open WhatsApp with the message ready and you get the figure within 24 hours.',
      'cta.credit': 'Buying? See how much the banks will lend you.',
      'cta.type': 'Type', 'cta.house': 'House', 'cta.parish': 'Parish', 'cta.parishPh': 'e.g. Benfica', 'cta.area': 'Size (m²)',
      'cta.submit': 'Request a valuation on WhatsApp',
      'footer.role': 'Real estate consultant · Team Nasser',
      fab: 'Request a valuation',
      msgGeneric: "Hi Diogo, I'd like to know what my home is worth.",
      msg: (t, f, a) => `Hi Diogo, I'd like to know what my home is worth.\nType: ${t}\nParish: ${f || '…'}\nSize: ${a || '…'} m²`
    }
  };

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* sem armazenamento */ } }
  };

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  let lang = 'pt';

  /* ---------- título palavra a palavra ---------- */
  const DELAYS = [0, 70, 160, 270, 400, 550, 720, 910, 1110, 1330];
  function splitTitle(el, text) {
    el.textContent = '';
    el.setAttribute('aria-label', text);
    text.split(' ').forEach((w, i, arr) => {
      const s = document.createElement('span');
      s.className = 'word';
      s.setAttribute('aria-hidden', 'true');
      s.style.setProperty('--d', `${DELAYS[i] ?? 1330 + i * 60}ms`);
      s.textContent = i < arr.length - 1 ? `${w} ` : w;
      el.append(s);
    });
  }

  /* ---------- idioma ---------- */
  function applyLang(next) {
    lang = I18N[next] ? next : 'pt';
    const d = I18N[lang];
    document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en';
    document.title = d['meta.title'];

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const v = d[el.dataset.i18n];
      if (typeof v !== 'string') return;
      if (el.hasAttribute('data-split')) splitTitle(el, v);
      else el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach((el) => { el.placeholder = d[el.dataset.i18nPh]; });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', d[el.dataset.i18nAria]); });
    document.querySelectorAll('img[data-alt-en]').forEach((img) => {
      if (!img.dataset.altPt) img.dataset.altPt = img.alt;
      img.alt = lang === 'en' ? img.dataset.altEn : img.dataset.altPt;
    });
    document.querySelectorAll('.lang__btn').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    document.querySelectorAll('.js-wa').forEach((a) => { a.href = waLink(d.msgGeneric); });
    updatePreview();
  }

  document.querySelectorAll('.lang__btn').forEach((b) => {
    b.addEventListener('click', () => {
      applyLang(b.dataset.lang);
      store.set('dn-lang', lang);
      const url = new URL(location.href);
      url.searchParams.set('lang', lang);
      history.replaceState(null, '', url);
    });
  });

  /* ---------- carrossel ---------- */
  function setupMarquee() {
    const track = document.querySelector('.marquee__track');
    if (!track) return;
    const items = [...track.children];
    items.forEach((li) => {
      const c = li.cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      c.querySelectorAll('img').forEach((img) => { img.alt = ''; img.removeAttribute('data-alt-en'); img.removeAttribute('fetchpriority'); img.loading = 'lazy'; });
      track.append(c);
    });
    // mesma velocidade em qualquer largura: ~40px por segundo
    const setDur = () => track.style.setProperty('--marquee-dur', `${Math.round(track.scrollWidth / 2 / 40)}s`);
    setDur();
    window.addEventListener('resize', setDur, { passive: true });
    if (!reduceMotion) track.classList.add('is-looping');
  }

  /* ---------- mensagem de WhatsApp ---------- */
  const form = document.getElementById('composer');
  const preview = document.getElementById('preview');
  function currentMsg() {
    if (!form) return I18N[lang].msgGeneric;
    const f = new FormData(form);
    const tip = f.get('tipologia');
    const tipLabel = tip === 'Moradia' ? I18N[lang]['cta.house'] : tip;
    return I18N[lang].msg(tipLabel, String(f.get('freguesia') || '').trim(), String(f.get('area') || '').trim());
  }
  const send = document.getElementById('composer-send');
  function updatePreview() {
    const m = currentMsg();
    if (preview) preview.textContent = m;
    if (send) send.href = waLink(m); // link real: funciona mesmo onde pop-ups são bloqueados
  }
  if (form) {
    form.addEventListener('input', updatePreview);
    form.addEventListener('change', updatePreview);
    form.addEventListener('submit', (e) => { e.preventDefault(); send && send.click(); });
  }

  /* ---------- botão flutuante: some quando o pedido já está à vista ---------- */
  const fab = document.querySelector('.fab');
  const hero = document.querySelector('.hero');
  const cta = document.getElementById('avaliacao');
  if (fab && 'IntersectionObserver' in window) {
    const seen = new Set();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => (en.isIntersecting ? seen.add(en.target) : seen.delete(en.target)));
      fab.classList.toggle('is-hidden', seen.size > 0);
    }, { threshold: 0.15 });
    [hero, cta].forEach((el) => el && io.observe(el));
  }

  /* ---------- arranque ---------- */
  const fromQuery = new URLSearchParams(location.search).get('lang');
  const fromStore = store.get('dn-lang');
  const fromBrowser = (navigator.language || '').toLowerCase().startsWith('pt') ? 'pt' : 'en';
  setupMarquee();
  applyLang(fromQuery || fromStore || fromBrowser);
})();
