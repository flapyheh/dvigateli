// ===== ДАННЫЕ ТОВАРОВ =====
const products = [
    { id: 1, brand: 'Hyundai / Kia', category: 'hyundai', name: 'G4FG 1.6 Solaris / Rio (в сборе)', art: 'MP-001', price: 89000, oldPrice: 105000, power: '123 л.с.', volume: '1.6 л', year: '2014', mileage: '78 000 км', badge: 'hit', badgeText: 'Хит продаж' },
    { id: 2, brand: 'Hyundai / Kia', category: 'hyundai', name: 'G4FC 1.4 Solaris / Rio', art: 'MP-002', price: 72000, oldPrice: 85000, power: '107 л.с.', volume: '1.4 л', year: '2013', mileage: '94 000 км' },
    { id: 3, brand: 'Hyundai / Kia', category: 'hyundai', name: 'G4KE 2.4 Sonata YF / Sportage', art: 'MP-003', price: 145000, oldPrice: null, power: '174 л.с.', volume: '2.4 л', year: '2015', mileage: '62 000 км', badge: 'new', badgeText: 'Новое поступление' },
    { id: 4, brand: 'Chevrolet / Opel', category: 'chevrolet', name: 'Z16XER 1.6 Astra H / Zafira B', art: 'MP-004', price: 78000, oldPrice: 92000, power: '115 л.с.', volume: '1.6 л', year: '2012', mileage: '112 000 км' },
    { id: 5, brand: 'Chevrolet / Opel', category: 'chevrolet', name: 'F16D4 1.6 Aveo T300 / Cruze', art: 'MP-005', price: 68000, oldPrice: null, power: '113 л.с.', volume: '1.6 л', year: '2014', mileage: '88 000 км' },
    { id: 6, brand: 'Chevrolet / Opel', category: 'chevrolet', name: 'F18D4 1.8 Cruze / Orlando', art: 'MP-006', price: 85000, oldPrice: 98000, power: '141 л.с.', volume: '1.8 л', year: '2015', mileage: '71 000 км', badge: 'hit', badgeText: 'Хит продаж' },
    { id: 7, brand: 'Toyota', category: 'toyota', name: '2AR-FE 2.5 Camry V50 / RAV4', art: 'MP-007', price: 165000, oldPrice: 195000, power: '181 л.с.', volume: '2.5 л', year: '2016', mileage: '54 000 км' },
    { id: 8, brand: 'Toyota', category: 'toyota', name: '1ZR-FE 1.6 Corolla E150 / Auris', art: 'MP-008', price: 98000, oldPrice: null, power: '124 л.с.', volume: '1.6 л', year: '2014', mileage: '83 000 км' },
    { id: 9, brand: 'Toyota', category: 'toyota', name: '1NZ-FE 1.5 Yaris / Vitz NCP', art: 'MP-009', price: 75000, oldPrice: 88000, power: '109 л.с.', volume: '1.5 л', year: '2013', mileage: '67 000 км', badge: 'new', badgeText: 'Новое поступление' },
    { id: 10, brand: 'Volkswagen / Audi', category: 'vw', name: 'CAXA 1.4 TSI Golf VI / Passat B7', art: 'MP-010', price: 135000, oldPrice: 158000, power: '122 л.с.', volume: '1.4 л', year: '2015', mileage: '74 000 км', badge: 'hit', badgeText: 'Хит продаж' },
    { id: 11, brand: 'Volkswagen / Audi', category: 'vw', name: 'CFNA 1.6 Polo Sedan / Skoda Rapid', art: 'MP-011', price: 92000, oldPrice: null, power: '105 л.с.', volume: '1.6 л', year: '2014', mileage: '96 000 км' },
    { id: 12, brand: 'Nissan', category: 'nissan', name: 'HR16DE 1.6 Tiida C11 / Note E11', art: 'MP-012', price: 88000, oldPrice: 102000, power: '110 л.с.', volume: '1.6 л', year: '2013', mileage: '81 000 км' },
];

// ===== SVG ДВИГАТЕЛЯ =====
function engineSvg() {
    return `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
            <linearGradient id="gp${Math.random().toString(36).slice(2,6)}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#4a5568"/>
                <stop offset="100%" stop-color="#1a202c"/>
            </linearGradient>
        </defs>
        <rect x="40" y="50" width="120" height="80" rx="6" fill="#2d3748"/>
        <rect x="50" y="20" width="20" height="40" rx="2" fill="#2d3748"/>
        <rect x="75" y="20" width="20" height="40" rx="2" fill="#2d3748"/>
        <rect x="105" y="20" width="20" height="40" rx="2" fill="#2d3748"/>
        <rect x="130" y="20" width="20" height="40" rx="2" fill="#2d3748"/>
        <circle cx="60" cy="28" r="5" fill="#d22630"/>
        <circle cx="85" cy="28" r="5" fill="#d22630"/>
        <circle cx="115" cy="28" r="5" fill="#d22630"/>
        <circle cx="140" cy="28" r="5" fill="#d22630"/>
        <rect x="25" y="75" width="15" height="35" rx="2" fill="#1a202c"/>
        <rect x="160" y="75" width="15" height="35" rx="2" fill="#1a202c"/>
        <rect x="70" y="80" width="60" height="25" rx="3" fill="#1a202c"/>
        <path d="M 40 130 L 160 130 L 145 150 L 55 150 Z" fill="#1a202c"/>
    </svg>`;
}

// ===== СОСТОЯНИЕ =====
let cart = [];
try { cart = JSON.parse(localStorage.getItem('cart') || '[]'); } catch(e) { cart = []; }
let currentFilter = 'all';

// ===== РЕНДЕР ТОВАРОВ =====
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const filtered = currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);
    grid.innerHTML = filtered.map(p => `
        <div class="product">
            ${p.badge ? `<div class="product-badge ${p.badge}">${p.badgeText}</div>` : ''}
            <div class="product-image">${engineSvg()}</div>
            <div class="product-info">
                <div class="product-brand">${p.brand}</div>
                <div class="product-name">${p.name}</div>
                <div class="product-art">арт. ${p.art} · пробег ${p.mileage}</div>
                <div class="product-specs">
                    <span>${p.power}</span>
                    <span>${p.volume}</span>
                    <span>${p.year} г.</span>
                </div>
                <div class="product-bottom">
                    <div class="product-price">
                        ${p.oldPrice ? `<span class="price-old">${p.oldPrice.toLocaleString('ru')} ₽</span>` : ''}
                        <span class="price-now">${p.price.toLocaleString('ru')} ₽</span>
                    </div>
                    <button class="btn-cart" onclick="addToCart(${p.id})" aria-label="Добавить в корзину">В корзину</button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterProducts(category, btn) {
    currentFilter = category;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts();
}

// ===== КОРЗИНА =====
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const existing = cart.find(item => item.id === id);
    if (existing) existing.qty++;
    else cart.push({ ...product, qty: 1 });
    saveCart();
    updateCartUI();
    showToast('Добавили в корзину');
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(id);
    else { saveCart(); updateCartUI(); }
}

function saveCart() {
    try { localStorage.setItem('cart', JSON.stringify(cart)); } catch(e) {}
}

function getTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function pluralize(n, forms) {
    const n10 = Math.abs(n) % 10;
    const n100 = Math.abs(n) % 100;
    if (n100 > 10 && n100 < 20) return forms[2];
    if (n10 > 1 && n10 < 5) return forms[1];
    if (n10 === 1) return forms[0];
    return forms[2];
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cartCount').textContent = count;
    const headerCount = document.getElementById('cartHeaderCount');
    if (headerCount) {
        headerCount.textContent = count > 0 ? `· ${count} ${pluralize(count, ['товар','товара','товаров'])}` : '';
    }

    const itemsEl = document.getElementById('cartItems');
    const footerEl = document.getElementById('cartFooter');

    if (cart.length === 0) {
        itemsEl.innerHTML = `<div class="cart-empty">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <h3>Пока пусто</h3>
            <p>Добавьте двигатель из каталога — он появится здесь</p>
        </div>`;
        footerEl.hidden = true;
    } else {
        itemsEl.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-img">${engineSvg()}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${(item.price * item.qty).toLocaleString('ru')} ₽</div>
                    <div class="cart-qty">
                        <button class="qty-btn" onclick="changeQty(${item.id}, -1)" aria-label="Уменьшить">−</button>
                        <span class="qty-val">${item.qty}</span>
                        <button class="qty-btn" onclick="changeQty(${item.id}, 1)" aria-label="Увеличить">+</button>
                        <button class="cart-remove" onclick="removeFromCart(${item.id})">убрать</button>
                    </div>
                </div>
            </div>
        `).join('');
        document.getElementById('cartTotal').textContent = getTotal().toLocaleString('ru') + ' ₽';
        footerEl.hidden = false;
    }
}

function toggleCart() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    const isActive = drawer.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll', isActive);
}

// ===== МОБИЛЬНОЕ МЕНЮ =====
function toggleMobileMenu() {
    const nav = document.getElementById('mainNav');
    const burger = document.getElementById('burgerBtn');
    const isOpen = nav.classList.toggle('mobile-open');
    burger.classList.toggle('active', isOpen);
    document.body.classList.toggle('no-scroll', isOpen);
}

function closeMobileMenu() {
    const nav = document.getElementById('mainNav');
    if (nav.classList.contains('mobile-open')) {
        nav.classList.remove('mobile-open');
        document.getElementById('burgerBtn').classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
}

// ===== ОФОРМЛЕНИЕ =====
function openCheckout() {
    if (cart.length === 0) return;
    document.getElementById('checkoutTotal').textContent = getTotal().toLocaleString('ru') + ' ₽';
    document.getElementById('checkoutModal').classList.add('active');
    document.getElementById('cartDrawer').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
    document.body.classList.add('no-scroll');
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('active');
    document.body.classList.remove('no-scroll');
}

function onModalBgClick(e) {
    if (e.target.id === 'checkoutModal') closeCheckout();
}

function submitOrder(e) {
    e.preventDefault();
    const body = document.getElementById('checkoutBody');
    const total = getTotal();
    body.innerHTML = `
        <div class="modal-success">
            <div class="modal-success-icon">✓</div>
            <h3>Заявка принята</h3>
            <p>Спасибо, мы получили ваш заказ на сумму <strong>${total.toLocaleString('ru')} ₽</strong>.<br>Менеджер перезвонит в ближайшие 15–30 минут, чтобы уточнить детали по доставке и оплате.</p>
            <button class="btn btn-primary" style="margin-top: 22px;" onclick="closeCheckout(); location.reload();">Понятно</button>
        </div>
    `;
    cart = [];
    saveCart();
    updateCartUI();
}

function submitConsult(e) {
    e.preventDefault();
    e.target.reset();
    showToast('Заявка отправлена, скоро перезвоним');
}

// ===== ТОСТ =====
let toastTimeout;
function showToast(text) {
    const toast = document.getElementById('toast');
    document.getElementById('toastText').textContent = text;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== КЛАВИАТУРА =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (document.getElementById('checkoutModal').classList.contains('active')) closeCheckout();
        else if (document.getElementById('cartDrawer').classList.contains('active')) toggleCart();
        else closeMobileMenu();
    }
});

// ===== ФИЛЬТРЫ =====
document.getElementById('filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (btn) filterProducts(btn.dataset.filter, btn);
});

// ===== РЕСАЙЗ =====
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 900) closeMobileMenu();
    }, 150);
});

// ===== INIT =====
renderProducts();
updateCartUI();
