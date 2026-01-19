// Import config
document.getElementById("bannerImage").src = CONFIG.banner;
document.getElementById("storeTitle").innerText = CONFIG.nama + " || Marketplace";
document.getElementById("profilePic").src = CONFIG.profil;
document.getElementById("profileName").innerHTML =
  CONFIG.nama + ' <i class="fas fa-check-circle" style="color: var(--primary);"></i>';
document.getElementById("aboutText").innerText = CONFIG.tentang;
document.getElementById("alamat").innerText = CONFIG.alamat;
document.getElementById("wa").innerText = CONFIG.sosial_media.whatsapp;
document.getElementById("email").innerText = CONFIG.sosial_media.email;
document.getElementById("ytLink").href = "https://youtube.com/" + CONFIG.sosial_media.youtube;
document.getElementById("tiktokLink").href = "https://tiktok.com/@" + CONFIG.sosial_media.tiktok;
document.getElementById("waLink").href = "https://wa.me/" + CONFIG.sosial_media.whatsapp;
document.getElementById("telegramLink").href = "https://t.me/" + CONFIG.sosial_media.telegram;
document.getElementById("copyright").innerText =
  `© ${new Date().getFullYear()} ${CONFIG.nama}. All Rights Reserved.`;

// DOM Elements
const productsContainer = document.getElementById('productsContainer');
const productModal = document.getElementById('productModal');
const modalIcon = document.getElementById('modalIcon');
const modalName = document.getElementById('modalName');
const modalPrice = document.getElementById('modalPrice');
const modalDescription = document.getElementById('modalDescription');
const variantSelection = document.getElementById('variantSelection');
const addToCartBtn = document.getElementById('addToCartBtn');
const closeModal = document.getElementById('closeModal');
const themeToggle = document.getElementById('themeToggle');
const cartBadge = document.getElementById('cartBadge');
const verifiedBadge = document.getElementById('verifiedBadge');
const verificationModal = document.getElementById('verificationModal');
const closeVerification = document.getElementById('closeVerification');
const testimonialSlider = document.getElementById('testimonialSlider');
const testimonialPrev = document.getElementById('testimonialPrev');
const testimonialNext = document.getElementById('testimonialNext');
const dots = document.querySelectorAll('.dot');
const faqItems = document.querySelectorAll('.faq-item');

// State
let currentSlide = 0;
let selectedProduct = null;
let selectedVariant = null;
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Init
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  renderProducts();
  setupEventListeners();
  updateGreeting();
  loadTheme();
});

// Render products
function renderProducts() {
  let html = '';
  for (const category in productsData) {
    html += `
      <div class="product-category">
        <h2 class="category-title">${category}</h2>
        <div class="products-grid">
          ${productsData[category].map(p => `
            <div class="product-card" data-id="${p.id}">
              <div class="product-icon"><i class="${p.icon}"></i></div>
              <h3 class="product-name">${p.name}</h3>
            </div>
          `).join('')}
        </div>
      </div>`;
  }
  productsContainer.innerHTML = html;
}

// Events
function setupEventListeners() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.onclick = () => openProductModal(+card.dataset.id);
  });

  closeModal.onclick = closeProductModal;
  addToCartBtn.onclick = addToCart;
  themeToggle.onclick = toggleTheme;

  verifiedBadge.onclick = () => verificationModal.style.display = 'block';
  closeVerification.onclick = () => verificationModal.style.display = 'none';

  testimonialPrev.onclick = () => navigateTestimonial(-1);
  testimonialNext.onclick = () => navigateTestimonial(1);

  dots.forEach(dot => {
    dot.onclick = () => goToTestimonial(+dot.dataset.slide);
  });

  faqItems.forEach(item => {
    item.querySelector('.faq-question').onclick = () =>
      item.classList.toggle('active');
  });
}

// Modal
function openProductModal(id) {
  for (const c in productsData) {
    const p = productsData[c].find(x => x.id === id);
    if (p) selectedProduct = p;
  }
  if (!selectedProduct) return;

  modalIcon.innerHTML = `<i class="${selectedProduct.icon}"></i>`;
  modalName.textContent = selectedProduct.name;
  modalDescription.textContent = selectedProduct.description;

  variantSelection.innerHTML = selectedProduct.variants.map((v, i) => `
    <div class="variant-option ${i === 0 ? 'selected' : ''}" data-i="${i}">
      ${v.name} - Rp ${v.price.toLocaleString('id-ID')}
    </div>
  `).join('');

  selectedVariant = 0;
  modalPrice.textContent =
    `Rp ${selectedProduct.variants[0].price.toLocaleString('id-ID')}`;

  document.querySelectorAll('.variant-option').forEach(el => {
    el.onclick = () => {
      document.querySelectorAll('.variant-option').forEach(x => x.classList.remove('selected'));
      el.classList.add('selected');
      selectedVariant = +el.dataset.i;
      modalPrice.textContent =
        `Rp ${selectedProduct.variants[selectedVariant].price.toLocaleString('id-ID')}`;
    };
  });

  productModal.style.display = 'block';
}

function closeProductModal() {
  productModal.style.display = 'none';
}

// Cart
function addToCart() {
  const v = selectedProduct.variants[selectedVariant];
  const idx = cart.findIndex(i =>
    i.productId === selectedProduct.id && i.variantName === v.name
  );

  if (idx >= 0) cart[idx].quantity++;
  else cart.push({
    productId: selectedProduct.id,
    productName: selectedProduct.name,
    variantName: v.name,
    price: v.price,
    quantity: 1,
    icon: selectedProduct.icon
  });

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
  closeProductModal();
}

function updateCartBadge() {
  cartBadge.textContent = cart.reduce((a, b) => a + b.quantity, 0);
}

// Theme
function toggleTheme() {
  const t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
}

function loadTheme() {
  const t = localStorage.getItem('theme');
  if (t) document.documentElement.setAttribute('data-theme', t);
}

// Testimonial
function navigateTestimonial(d) {
  const total = document.querySelectorAll('.testimonial-slide').length;
  currentSlide = (currentSlide + d + total) % total;
  goToTestimonial(currentSlide);
}

function goToTestimonial(i) {
  testimonialSlider.style.transform = `translateX(-${i * testimonialSlider.clientWidth}px)`;
  dots.forEach(d => d.classList.toggle('active', +d.dataset.slide === i));
}

// Greeting
function updateGreeting() {
  const h = new Date().getHours();
  const g = h < 12 ? 'Selamat pagi' : h < 15 ? 'Selamat siang' : h < 19 ? 'Selamat sore' : 'Selamat malam';
  document.getElementById('greeting-text').textContent = g + ' Selamat berbelanja!';
}
