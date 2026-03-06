// script.js

// ================== NAVBAR SCROLL EFFECT ==================
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ================== MOBILE MENU ==================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // animação hamburger (opcional)
    hamburger.classList.toggle('active');
});

// fechar menu ao clicar em link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ================== ACTIVE LINK ON SCROLL ==================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    let scrollY = window.scrollY;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}
window.addEventListener('scroll', updateActiveLink);
updateActiveLink();

// ================== REVEAL ON SCROLL ==================
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', reveal);
reveal();

// ================== BACK TO TOP BUTTON ==================
const backTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        backTop.classList.add('show');
    } else {
        backTop.classList.remove('show');
    }
});
backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ================== CARDÁPIO DATA (itens premium) ==================
const cardapioItems = [
    // Entradas
    { cat: 'entradas', img: 'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg', nome: 'Bolinho de carne seca', desc: '4 unidades com cream cheese e geleia de pimenta', preco: 42.0 },
    { cat: 'entradas', img: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg', nome: 'Linguiça artesanal acebolada', desc: 'linguiça de cordeiro com cebola roxa', preco: 38.0 },
    { cat: 'entradas', img: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg', nome: 'Dadinho de tapioca', desc: 'com melaço de cana e queijo coalho', preco: 34.0 },
    // Principais
    { cat: 'principais', img: 'https://images.pexels.com/photos/618776/pexels-photo-618776.jpeg', nome: 'Picanha na brasa', desc: '300g com farofa, vinagrete e banana à milanesa', preco: 98.0 },
    { cat: 'principais', img: 'https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg', nome: 'Costela premium', desc: 'meia costela bovina com molho barbecue e mandioca', preco: 129.0 },
    { cat: 'principais', img: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg', nome: 'Filé com fritas', desc: 'filé mignon (200g) com batatas rústicas', preco: 79.0 },
    // Drinks
    { cat: 'drinks', img: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg', nome: 'Negroni da casa', desc: 'gin, campari, vermute tinto e laranja', preco: 38.0 },
    { cat: 'drinks', img: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg', nome: 'Caipirinha especial', desc: 'cachaça artesanal com limão e acerola', preco: 28.0 },
    { cat: 'drinks', img: 'https://images.pexels.com/photos/4114205/pexels-photo-4114205.jpeg', nome: 'Gin tropical', desc: 'gin com abacaxi, hortelã e água tônica', preco: 42.0 },
    // Bebidas
    { cat: 'bebidas', img: 'https://images.pexels.com/photos/1267354/pexels-photo-1267354.jpeg', nome: 'Chopp gelado', desc: 'pilsen 400ml', preco: 14.0 },
    { cat: 'bebidas', img: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg', nome: 'Refrigerante', desc: 'lata 350ml', preco: 8.0 },
    { cat: 'bebidas', img: 'https://images.pexels.com/photos/4114205/pexels-photo-4114205.jpeg', nome: 'Água com gás', desc: 'garrafa 500ml', preco: 6.0 }
];

// render cardápio
function renderCardapio(filter = 'todos') {
    const grid = document.getElementById('cardapio-grid');
    grid.innerHTML = '';
    const filtered = filter === 'todos' ? cardapioItems : cardapioItems.filter(i => i.cat === filter);
    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card-item';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.nome}" loading="lazy">
            <div class="card-info">
                <h3>${item.nome}</h3>
                <p>${item.desc}</p>
                <span class="preco">R$ ${item.preco.toFixed(2)}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}
renderCardapio();

// filtros cardápio
document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderCardapio(btn.dataset.cat);
    });
});

// ================== EVENTOS ==================
const eventos = [
    { dia: 'Quinta', nome: 'Voz e violão', desc: 'MPB e pop rock', icon: 'fa-guitar' },
    { dia: 'Sexta', nome: 'Sertanejo ao vivo', desc: 'Dupla convidada', icon: 'fa-microphone-alt' },
    { dia: 'Sábado', nome: 'Noite da Brasa', desc: 'Banda completa', icon: 'fa-drum' },
    { dia: 'Domingo', nome: 'Happy hour especial', desc: 'DJ + promoção de chopp', icon: 'fa-music' }
];
const eventosGrid = document.getElementById('eventos-grid');
eventos.forEach(ev => {
    const card = document.createElement('div');
    card.className = 'evento-card';
    card.innerHTML = `
        <i class="fas ${ev.icon}"></i>
        <h3>${ev.nome}</h3>
        <p class="dia">${ev.dia}</p>
        <p>${ev.desc}</p>
    `;
    eventosGrid.appendChild(card);
});

// ================== GALERIA ==================
const galeriaImgs = [
    'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
    'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    'https://images.pexels.com/photos/827513/pexels-photo-827513.jpeg',
    'https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg',
    'https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg',
    'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg'
];
const galeriaGrid = document.getElementById('galeria-grid');
galeriaImgs.forEach(src => {
    const item = document.createElement('div');
    item.className = 'galeria-item';
    item.innerHTML = `<img src="${src}" alt="Galeria Brasa Nobre" loading="lazy">`;
    galeriaGrid.appendChild(item);
});

// ================== DEPOIMENTOS ==================
const depoimentos = [
    { nome: 'Ana Carolina', texto: 'Melhor restaurante de Barreiras! Ambiente sofisticado e a picanha é sensacional.', estrelas: 5 },
    { nome: 'Rafael Mendes', texto: 'Drinks incríveis, atendimento top e música ao vivo de qualidade. Virei cliente fiel.', estrelas: 5 },
    { nome: 'Juliana Costa', texto: 'Local perfeito para comemorações. Comida excelente e lugar instagramável.', estrelas: 5 }
];
const depoimentosGrid = document.getElementById('depoimentos-grid');
depoimentos.forEach(d => {
    const card = document.createElement('div');
    card.className = 'depoimento-card';
    let stars = '';
    for (let i = 0; i < d.estrelas; i++) stars += '★';
    card.innerHTML = `
        <div class="estrelas">${stars}</div>
        <p>"${d.texto}"</p>
        <h4>— ${d.nome}</h4>
    `;
    depoimentosGrid.appendChild(card);
});

// ================== FORM RESERVA COM FEEDBACK ==================
const form = document.getElementById('formReserva');
const feedbackDiv = document.getElementById('reservaFeedback');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // validação simples
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const pessoas = document.getElementById('pessoas').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;

    if (!nome || !telefone || !pessoas || !data || !horario) {
        feedbackDiv.style.color = '#c0392b';
        feedbackDiv.innerText = 'Por favor, preencha todos os campos obrigatórios.';
        return;
    }

    // sucesso
    feedbackDiv.style.color = 'var(--dourado)';
    feedbackDiv.innerHTML = '✅ Mesa reservada com sucesso! Em breve confirmaremos por WhatsApp.';
    form.reset();

    // limpar mensagem após 5s
    setTimeout(() => {
        feedbackDiv.innerText = '';
    }, 5000);
});

// ================== WHATSAPP FLOAT ==================
// já está no HTML com link direto

// ================== FIM ==================