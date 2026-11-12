// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => nav.classList.toggle('open'));

// News modal
const posts = {
  mei: {
    title: 'Novo limite de faturamento do MEI: veja o que muda em 2027 e 2028',
    body: `<p>O limite de faturamento do Microempreendedor Individual (MEI) vai aumentar. A mudança foi oficializada pela Lei Complementar nº 238, publicada em 21 de outubro de 2026.</p>
    <p>O teto anual, que atualmente é de R$ 81 mil, passará para R$ 110 mil em 2027. Em 2028, chegará a R$ 140 mil.</p>
    <p>Entre as principais medidas estão o aumento do limite anual, remissão de determinados débitos do MEI com a União, possibilidade de contratação de até dois empregados no âmbito rural e alterações em regras de licitações.</p>
    <p><strong>Calendário:</strong><br>2026: R$ 81.000<br>2027: R$ 110.000<br>2028: R$ 140.000</p>
    <p><em>Conteúdo baseado no material publicado pela Astecon Contabilidade.</em></p>`
  },
  contato: {
    title: 'Como entrar em contato com o escritório de contabilidade Astecon em Campo Grande MS',
    body: `<p>O escritório da Astecon está localizado na Rua Paissandú, Nº 136, Campo Grande - MS.</p>
    <p><strong>Telefone:</strong> (67) 3384-5075<br><strong>WhatsApp:</strong> (67) 99845-0219<br><strong>Instagram:</strong> @asteconms</p>
    <p>Atendimento personalizado para rural, indústria, comércio e prestação de serviços.</p>
    <p><em>Conteúdo baseado no material publicado pela Astecon Contabilidade.</em></p>`
  },
  rural: {
    title: 'Perguntas e Respostas sobre Rural – Guia Prático 2026',
    body: `<p><strong>1. Qual o limite de receita bruta para produtor rural não pagar IBS/CBS?</strong><br>Até R$ 3.600.000,00 por ano-calendário.</p>
    <p><strong>2. Se meu comprador quiser créditos IBS/CBS na compra do meu produto?</strong><br>Você deverá optar pelo IBS/CBS senão não gera créditos para o comprador.</p>
    <p><strong>3. Mas se eu optar pelo IBS/CBS quanto vou precisar pagar?</strong><br>Aqui nós somos especialistas, faça seu planejamento tributário conosco.</p>
    <p>WhatsApp: (67) 99845-0219 · Telefone: (67) 3384-5075</p>
    <p><em>Conteúdo baseado no material publicado pela Astecon Contabilidade.</em></p>`
  },
  alugueis: {
    title: 'Perguntas e Respostas sobre Aluguéis - Guia Prático 2026',
    body: `<p>Guia prático sobre tributação de aluguéis e obrigações acessórias. Entre em contato para receber a orientação completa.</p>
    <p>WhatsApp: (67) 99845-0219<br>Telefone: (67) 3384-5075<br>E-mail: asteconms@terra.com.br</p>
    <p><em>Para o texto integral, entre em contato com a Astecon.</em></p>`
  }
};

const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.news-item').forEach(btn => {
  btn.addEventListener('click', () => {
    const post = posts[btn.dataset.post];
    if (post) {
      modalBody.innerHTML = `<h3>${post.title}</h3>${post.body}`;
      modal.classList.add('open');
    }
  });
});

modalClose.addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });

// Form
document.getElementById('form')?.addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  const text = `Olá! Meu nome é ${f.nome.value}.%0AEmail: ${f.email.value}%0AAssunto: ${f.assunto.value}%0A%0A${f.msg.value}`;
  window.open(`https://wa.me/5567998450219?text=${text}`, '_blank');
  f.reset();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); nav.classList.remove('open'); }
  });
});
