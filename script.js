/* ==========================================================================
   BATIK KIRANA - JAVASCRIPT
   ========================================================================== */

const WHATSAPP_NUMBER = "6285142832608";

const PRODUCTS = [

  {
    id: "prod-1",
    title: "BATIK MODERN TENUN IKAT NAYAKA",
    shortTitle: "BATIK MODERN TENUN...",
    category: "modern",
    categoryLabel: "BATIK MODERN",
    price: 345,
    rating: 5,
    reviews: 89,
    badge: "Populer",
    badgeClass: "bg-badge-popular",
    image: "gambar/modern1.jpg",
    desc: "Kombinasi modern kemeja berkerah sanghai dengan aksen tenun ikat motif geometris bernuansa earth tone untuk gaya kasual dan formal sehari-hari.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    origin: "Jepara(Troso)",
    material: "Katun Linen Premium"
  },

  {
    id: "prod-2",
    title: "BATIK TULIS SWARNA KIRANA",
    shortTitle: "BATIK TULIS SWAR...",
    category: "tulis",
    categoryLabel: "BATIK TULIS",
    price: 485,
    rating: 5,
    reviews: 87,
    badge: "Best Seller",
    badgeClass: "bg-badge-best",
    image: "gambar/Tulis.jpg",
    desc: "Rok A-line feminin berhiaskan perpaduan motif batik kawung dan parang bernuansa soft pink, memberikan tampilan yang manis, dan anggun.",
    sizes: [
     "Size M (LP 70-78cm)",
     "Size L (LP 76-84cm)", 
    ],
    origin: "Cirebon (Trusmi)",
    material: "Katun Primisima Premium"
  },

  {
    id: "prod-3",
    title: "BATIK CAP LESTARI NAVY",
    shortTitle: "BATIK CAP LESTARI...",
    category: "cap",
    categoryLabel: "BATIK CAP",
    price: 575,
    rating: 5,
    reviews: 75,
    badge: "Premium",
    badgeClass: "bg-badge-premium",
    image: "gambar/cap1.jpg",
    desc: "Tunik wanita kerah V-neck bernuansa navy dengan keindahan motif parang klasik dan sentuhan ornamen bunga di bagian tengah yang anggun, rapi, serta memesona.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    origin: "Yogyakarta",
    material: "Katun Primisima Premium"
  },

  {
    id: "prod-4",
    title: "BATIK SET COUPLE LONTAR NAYAKA",
    shortTitle: "BATIK SET COUPLE LON...",
    category: "couple",
    categoryLabel: "BATIK SET COUPLE",
    price: 789,
    rating: 5,
    reviews: 89,
    badge: "Baru",
    badgeClass: "bg-badge-new",
    image: "gambar/couple.png",
    desc: "Paduan eksklusif kemeja pria bermotif geometris dan setelan wanita berpotongan luaran (outer) bersih dengan sabuk aksen senada.",
    sizes: [
      "Pria: M-XXL",
      "Wanita: S-XL"
    ],
    origin: "Surakarta (Solo)",
    material: "Katun Dobby Premium & Semi Sutra"
  },

  {
    id: "prod-5",
    title: "BATIK TRADISIONAL PRABU HITAM SOGAN",
    shortTitle: "BATIK TRADISIONAL PRA...",
    category: "tradisional",
    categoryLabel: "BATIK TRADISIONAL",
    price: 444,
    rating: 5,
    reviews: 74,
    badge: "Populer",
    badgeClass: "bg-badge-popular",
    image: "gambar/tradisional2.jpg",
    desc: "Kemeja pria lengan panjang berlatar hitam pekat dengan ukiran motif gurda dan flora beraksen sogan maskulin, memancarkan kesan gagah, wibawa, serta karismatik.",
    sizes: [
      "Panjang 2.5m x 1.15m"
    ],
    origin: "Surakarta (Solo)",
    material: "Katun Keraton Dobby"
  },

  {
    id: "prod-6",
    title: "BATIK SET COUPLE MAHARAJA SWARNA",
    shortTitle: "BATIK SET COUPLE MAH...",
    category: "couple",
    categoryLabel: "BATIK SET COUPLE",
    price: 825,
    rating: 5,
    reviews: 92,
    badge: "Best Seller",
    badgeClass: "bg-badge-best",
    image: "gambar/couple1.jpg",
    desc: "Satu setel busana pasangan dengan motif klasik sekartaji bernuansa warna bumi (earth tone), memancarkan aura kemewahan yang bersahaja dan tak lekang oleh waktu.",
    sizes: [
      "Pria: M-XXL",
      "Wanita: S-XL"
    ],
    origin: "Yogyakarta",
    material: "Katun Silk Premium & Voal Dobby"
  },

  {
    id: "prod-7",
    title: "BATIK TRADISIONAL KAWUNG SOGAN",
    shortTitle: "BATIK TRADISIONAL KAWU...",
    category: "tradisional",
    categoryLabel: "BATIK TRADISIONAL",
    price: 485,
    rating: 5,
    reviews: 78,
    badge: "Populer",
    badgeClass: "bg-badge-popular",
    image: "gambar/tradisional1.jpg",
    desc: "Kombinasi eksklusif tunik asimetris dan rok batik bernuansa sogan klasik, menghadirkan keagungan motif kawung serta guratan etnik yang mewah dan sarat akan nilai budaya.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    origin: "Surakarta (Solo)",
    material: "Katun Primisima Pewarna Alami"
  },

  {
    id: "prod-8",
    title: "BATIK MODERN KAWUNG KONTEMPORER",
    shortTitle: "BATIK MODERN KAWUNG...",
    category: "modern",
    categoryLabel: "BATIK MODERN",
    price: 385,
    rating: 5,
    reviews: 69,
    badge: "Baru",
    badgeClass: "bg-badge-new",
    image: "gambar/modern2.jpg",
    desc: "Desain rok suji berpotongan A-line anggun dengan aksen ikatan pinggang batik jumputan dan motif bordir flora minimalis untuk tampilan elegan modern.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    origin: "Pekalongan",
    material: "Katun Dobby & Cotton Linen Premium"
  },

  {
    id: "prod-9",
    title: "BATIK TULIS PRABU ANANTA",
    shortTitle: "BATIK TULIS PRABU...",
    category: "tulis",
    categoryLabel: "BATIK TULIS",
    price: 650,
    rating: 5,
    reviews: 76,
    badge: "Premium",
    badgeClass: "bg-badge-premium",
    image: "gambar/Tulis2.jpg",
    desc: "Kemeja lengan panjang pria berlatar gelap yang menampilkan keagungan motif burung garuda dan ornamen flora emas, menghadirkan kesan wibawa, elegan, dan karismatik.",
    sizes: ["Panjang 2.4m x 1.15m", "Jahit Kemeja"],
    origin: "Yogyakarta",
    material: "Katun Primisima Sutra Dobby"
  },

  {
    id: "prod-10",
    title: "BATIK CAP INDIGO PATCHWORK",
    shortTitle: "BATIK CAP INDIGO...",
    category: "cap",
    categoryLabel: "BATIK CAP",
    price: 471,
    rating: 5,
    reviews: 96,
    badge: "Best Seller",
    badgeClass: "bg-badge-best",
    image: "gambar/cap.jpg",
    desc: "Kemeja pria lengan pendek bernuansa navy indigo dengan kombinasi motif geometris, garis, dan flora minimalis berunsur patchwork yang stylish dan santai.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    origin: "Pekalongan",
    material: "Katun Halus Cap"
  },

  {
    id: "prod-11",
    title: "BATIK SET COUPLE ARSANA HANSASANA",
    shortTitle: "BATIK SET COUPLE ARS...",
    category: "couple",
    categoryLabel: "BATIK SET COUPLE",
    price: 899,
    rating: 5,
    reviews: 99,
    badge: "Baru",
    badgeClass: "bg-badge-new",
    image: "gambar/couple2.jpg",
    desc: "Koleksi eksklusif bernuansa soft cream dengan keindahan motif burung angsa (hansa) yang dipadukan sempurna dengan luaran brokat lace yang elegan, menciptakan kesan anggun dan menawan.",
    sizes: ["Pria: M-XXL", "Wanita: S-XL"],
    origin: "Yogyakarta",
    material: "Katun Silk Premium & Chantilly Lace"
  },

  {
    id: "prod-12",
    title: "BATIK TULIS ARUNA PARANG",
    shortTitle: "BATIK TULIS ARU...",
    category: "tulis",
    categoryLabel: "BATIK TULIS",
    price: 575,
    rating: 5,
    reviews: 71,
    badge: "Populer",
    badgeClass: "bg-badge-popular",
    image: "gambar/Tulis3.jpg",
    desc: "Tunik berpita dengan kombinasi elegan motif parang di bagian lengan dan motif flora kontemporer bernuansa biru indigo, menghadirkan tampilan feminin yang berkelas.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    origin: "Pekalongan",
    material: "Katun Primisima Halus"
  },

  {
    id: "prod-13",
    title: "BATIK TRADISIONAL PARANG SOGAN NAVY",
    shortTitle: "BATIK TRADISIONAL PARANG...",
    category: "tradisional",
    categoryLabel: "BATIK TRADISIONAL",
    price: 356,
    rating: 5,
    reviews: 59,
    badge: "Best Seller",
    badgeClass: "bg-badge-best",
    image: "gambar/tradisional.jpg",
    desc: "Keagungan motif parang dan flora klasik kraton bernuansa sogan gelap berpadu warna navy, menghadirkan kesan anggun, wibawa, dan penuh makna.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    origin: "Yogyakarta",
    material: "Katun Primisima Pewarna Alami"
  },
  {
    id: "prod-14",
    title: "BATIK MODERN KAMALA NAVY",
    shortTitle: "BATIK MODERN KAMALA...",
    category: "modern",
    categoryLabel: "BATIK MODERN",
    price: 425,
    rating: 5,
    reviews: 73,
    badge: "Populer",
    badgeClass: "bg-badge-popular",
    image: "gambar/modern3.png",
    desc: "Tunik berpita dengan perpaduan asimetris motif parang dan geometris bernuansa navy, menghadirkan kesan modern, rapi, dan chic untuk tampilan semi-formal.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    origin: "Surakarta (Solo)",
    material: "Katun Primisima Premium"
  },
  {
    id: "prod-15",
    title: "BATIK CAP LENTERA KEBAYA",
    shortTitle: "BATIK CAP LENTERA...",
    category: "cap",
    categoryLabel: "BATIK CAP",
    price: 315,
    rating: 5,
    reviews: 77,
    badge: "Premium",
    badgeClass: "bg-badge-premium",
    image: "gambar/cap2.jpg",
    desc: "Koleksi kebaya potong lurus bernuansa maroon mewah, memadukan motif geometris lembut dengan list lis bagian depan bertema etnik klasik yang mewah dan memesona.",
    sizes: ["Panjang 2.4m x 1.15m", "Jahit Kemeja"],
    origin: "Jepara (Troso)",
    material: "Katun Linen Premium"
  }



];

/* ========== STATE ========== */
let cart = [];
let activeCategory = "all";
let searchQuery = "";
let discountPercent = 0;

/* ========== INIT ========== */
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("productsGrid")) {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const search = params.get("search");
    if (category) activeCategory = category;
    if (search) {
      searchQuery = search.toLowerCase();
      const searchInput = document.getElementById("searchInput");
      if (searchInput) searchInput.value = search;
    }
    renderProducts();
  }

  if (typeof lucide !== "undefined") lucide.createIcons();

  /* Mobile menu */
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileDrawer.classList.toggle("hidden");
    });
  }

  /* Search */
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase();
      if (document.getElementById("productsGrid")) renderProducts();
    });
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !document.getElementById("productsGrid")) {
        const value = searchInput.value.trim();
        window.location.href = value
          ? `produk.html?category=all&search=${encodeURIComponent(value)}`
          : "produk.html?category=all";
      }
    });
  }

  /* Cart */
  const cartBtn = document.getElementById("cartBtn");
  if (cartBtn) cartBtn.addEventListener("click", () => toggleCart(true));

  /* Login */
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) loginBtn.addEventListener("click", openLoginModal);
  const loginModal = document.getElementById("loginModal");
  if (loginModal) loginModal.addEventListener("click", closeLoginModal);
  updateLoginUI();

  /* ScrollSpy — underline aktif sesuai section */
  const navLinks = document.querySelectorAll("#mainNavbar a.nav-link-custom[href^='#']");
  const spySections = [];
  navLinks.forEach((link) => {
    const id = (link.getAttribute("href") || "").slice(1);
    const sec = id ? document.getElementById(id) : null;
    if (sec) spySections.push({ id, el: sec, link });
  });

  const setActiveNav = () => {
    const offset = 120;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    let current = spySections.length ? spySections[0].id : "";
    for (let i = 0; i < spySections.length; i++) {
      if (scrollY >= spySections[i].el.offsetTop - offset) current = spySections[i].id;
    }
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
  };
  if (spySections.length) {
    setActiveNav();
    window.addEventListener("scroll", setActiveNav, { passive: true });
  }

  /* Parallax fixed-feel: background tampak diam di layar */
  const heroSection = document.getElementById("beranda");
  const heroImg = document.querySelector(".hero-bg img");
  if (heroSection && heroImg) {
    let currentY = 0;
    let targetY = 0;
    let rafId = null;

    const updateParallax = () => {
      currentY += (targetY - currentY) * 0.14;
      if (Math.abs(targetY - currentY) < 0.2) currentY = targetY;
      heroImg.style.transform = "translate3d(0," + currentY.toFixed(2) + "px,0) scale(1.12)";
      if (Math.abs(targetY - currentY) > 0.2) {
        rafId = requestAnimationFrame(updateParallax);
      } else {
        rafId = null;
      }
    };

    const onScroll = () => {
      const rect = heroSection.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        targetY = -rect.top * 0.5;
      }
      if (!rafId) rafId = requestAnimationFrame(updateParallax);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* Animasi banner saat load */
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    requestAnimationFrame(() => heroContent.classList.add("hero-animate-in"));
  }

  /* Animate on Scroll */
  const aosTargets = document.querySelectorAll(
    ".product-col, .sp-card, .testimonial-card, .cat-card, .section-title, .about-img-wrap, .about-label, .about-heading, .about-text, .pillars-box, .pillar-item, .trust-strip, .quote-box, .faq-item, .faq-cta, .contact-info-card, .contact-form-card, .map-embed-wrap, .social-proof-copy, .badge-pill, .search-wrap, .btn-lihat-semua, .filter-chip"
  );
  const animTypes = ["aos-up", "aos-left", "aos-right", "aos-zoom"];
  aosTargets.forEach((el, i) => {
    el.classList.add("aos-init", animTypes[i % animTypes.length], "aos-delay-" + ((i % 5) + 1));
  });

  if ("IntersectionObserver" in window) {
    const aosObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-visible");
            aosObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );
    aosTargets.forEach((el) => {
      aosObserver.observe(el);
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 40) {
        el.classList.add("aos-visible");
        aosObserver.unobserve(el);
      }
    });
  } else {
    aosTargets.forEach((el) => el.classList.add("aos-visible"));
  }
});

/* ========== KOMPATIBILITAS ========== */
/* ========== RENDER PRODUK (compat) ========== */
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const cards = grid.querySelectorAll(".product-col");
  let visibleCount = 0;

  cards.forEach((card) => {
    const category = card.getAttribute("data-category") || "";
    const badge = card.getAttribute("data-badge") || "";
    const title = (card.getAttribute("data-title") || "").toLowerCase();
    const desc = (card.getAttribute("data-desc") || "").toLowerCase();

    const matchCategory =
      activeCategory === "all" ||
      category === activeCategory ||
      (activeCategory === "bestseller" && badge === "Best Seller") ||
      (activeCategory === "couple" && category === "couple");

    const matchSearch = !searchQuery || title.includes(searchQuery) || desc.includes(searchQuery);
    const show = matchCategory && matchSearch;
    card.classList.toggle("hidden", !show);
    if (show) visibleCount += 1;
  });

  const empty = document.getElementById("productsEmpty");
  if (empty) empty.classList.toggle("hidden", visibleCount > 0);

  document.querySelectorAll("#filterChips .filter-chip").forEach((chip) => {
    const onclick = chip.getAttribute("onclick") || "";
    chip.classList.toggle("active", onclick.includes("'" + activeCategory + "'"));
  });

  if (typeof lucide !== "undefined") lucide.createIcons();
}

/* ========== FILTER ========== */
function filterByCategory(cat) {
  if (!document.getElementById("productsGrid")) {
    window.location.href = `produk.html?category=${encodeURIComponent(cat)}`;
    return;
  }
  activeCategory = cat;
  renderProducts();
}

/* ========== SORT ========== */
function handleSort(val) {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll(".product-col"));
  const empty = document.getElementById("productsEmpty");

  if (val === "rekomendasi") {
    cards.sort((a, b) =>
      (a.getAttribute("data-id") || "").localeCompare(b.getAttribute("data-id") || "")
    );
  } else if (val === "harga-asc") {
    cards.sort(
      (a, b) =>
        (parseInt(a.getAttribute("data-price"), 10) || 0) -
        (parseInt(b.getAttribute("data-price"), 10) || 0)
    );
  } else if (val === "harga-desc") {
    cards.sort(
      (a, b) =>
        (parseInt(b.getAttribute("data-price"), 10) || 0) -
        (parseInt(a.getAttribute("data-price"), 10) || 0)
    );
  }

  cards.forEach((card) => grid.appendChild(card));
  if (empty) grid.appendChild(empty);
  renderProducts();
}

/* ========== LIKE GALERI ========== */
function likeGallery(btn) {
  const spans = btn.querySelectorAll("span");
  if (spans.length < 2) return;
  const liked = btn.classList.toggle("liked");
  let number = parseInt(spans[1].innerText, 10) || 0;
  spans[1].innerText = liked ? number + 1 : Math.max(0, number - 1);
}

/* ========== KERANJANG ========== */
function addToCart(productId, size) {
  const product = PRODUCTS.find((x) => x.id === productId);
  if (!product) return;

  const existing = cart.find((x) => x.id === productId && x.size === size);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, size, qty: 1 });
  }
  updateCartUI();
  showToast(`"${product.title}" (${size}) berhasil ditambahkan!`);
}

function updateCartUI() {
  const badge = document.getElementById("cartBadge");
  if (badge) {
    badge.innerText = cart.reduce((total, item) => total + item.qty, 0);
  }

  const list = document.getElementById("cartItemsList");
  if (!list) return;

  if (cart.length === 0) {
    list.innerHTML = `<div class="cart-empty">Keranjang masih kosong</div>`;
  } else {
    list.innerHTML = cart
      .map(
        (item) => `
      <div class="cart-item">
        <img src="${item.image}" alt="">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.title}</h4>
          <p class="cart-item-size">Ukuran: ${item.size}</p>
          <p class="cart-item-price">RP ${item.price * item.qty}.000</p>
          <div class="cart-qty">
            <button type="button" onclick="changeQty('${item.id}', '${item.size}', -1)">-</button>
            <span>${item.qty}</span>
            <button type="button" onclick="changeQty('${item.id}', '${item.size}', 1)">+</button>
          </div>
        </div>
        <button type="button" class="cart-remove-btn" onclick="removeFromCart('${item.id}', '${item.size}')" aria-label="Hapus item" title="Hapus">
          <i data-lucide="trash-2" style="width:16px;height:16px;"></i>
        </button>
      </div>`
      )
      .join("");
    if (typeof lucide !== "undefined") lucide.createIcons();
  }

  const subtotal = cart.reduce((total, item) => total + item.price * item.qty, 0);
  const discount = (subtotal * discountPercent) / 100;
  const total = subtotal - discount;
  const totals = document.getElementById("cartTotals");
  if (totals) {
    totals.innerHTML = `
      <div class="total-row"><span>Subtotal:</span><span>RP ${subtotal}.000</span></div>
      ${
        discountPercent > 0
          ? `<div class="total-row discount-row"><span>Diskon (${discountPercent}%):</span><span>-RP ${discount}.000</span></div>`
          : ""
      }
      <div class="total-row total-final"><span>Total:</span><span>RP ${total}.000</span></div>`;
  }
}

function changeQty(id, size, delta) {
  const item = cart.find((x) => x.id === id && x.size === size);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((x) => !(x.id === id && x.size === size));
  }
  updateCartUI();
}

function removeFromCart(id, size) {
  cart = cart.filter((x) => !(x.id === id && x.size === size));
  updateCartUI();
  showToast("Item dihapus dari keranjang");
}

function toggleCart(show) {
  const drawer = document.getElementById("cartDrawer");
  if (!drawer) return;
  drawer.classList.toggle("hidden", !show);
}

function applyVoucher() {
  const input = document.getElementById("voucherInput");
  if (!input) return;
  const value = input.value.trim().toUpperCase();
  if (value === "KIRANA10" || value === "BATIK10") {
    discountPercent = 10;
    showToast("Voucher 10% Aktif!");
  } else {
    showToast("Voucher tidak valid!");
  }
  updateCartUI();
}

/* ========== MODAL PRODUK ========== */
function openProductModal(id) {
  const product = PRODUCTS.find((x) => x.id === id);
  if (!product) return;
  const content = document.getElementById("modalProductContent");
  if (!content) return;

  const sizes = product.sizes && product.sizes.length ? product.sizes : ["All Size"];
  const sizeButtons = sizes
    .map((s, i) => {
      const safe = String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
      return `<button type="button" class="size-option${i === 0 ? " active" : ""}" data-size="${safe}" onclick="selectModalSize(this)">${safe}</button>`;
    })
    .join("");

  content.innerHTML = `
    <div class="row g-4">
      <div class="col-12 col-sm-6">
        <img src="${product.image}" class="modal-product-img" alt="${product.title}">
      </div>
      <div class="col-12 col-sm-6 d-flex flex-column justify-content-between">
        <div>
          <span class="modal-product-cat">${product.categoryLabel}</span>
          <h2 class="modal-product-title">${product.title}</h2>
          <div class="modal-product-price">RP ${product.price}.000</div>
          <p class="modal-product-desc">${product.desc}</p>
          <div class="modal-product-meta">
            <div><strong>Asal:</strong> ${product.origin}</div>
            <div><strong>Bahan:</strong> ${product.material}</div>
          </div>
          <div class="modal-size-wrap">
            <div class="modal-size-label">Pilih Ukuran</div>
            <div class="modal-size-list" role="group" aria-label="Pilih ukuran">${sizeButtons}</div>
          </div>
        </div>
        <button type="button"
          onclick="addToCartFromModal('${product.id}')"
          class="btn-modal-cart">Tambah ke Keranjang</button>
      </div>
    </div>`;

  const modal = document.getElementById("productModal");
  if (modal) modal.classList.remove("hidden");
  if (typeof lucide !== "undefined") lucide.createIcons();
}

function selectModalSize(btn) {
  if (!btn || !btn.parentElement) return;
  btn.parentElement.querySelectorAll(".size-option").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
}

function addToCartFromModal(productId) {
  const active = document.querySelector("#modalProductContent .size-option.active");
  const size = active ? active.getAttribute("data-size") : null;
  if (!size) {
    showToast("Pilih ukuran terlebih dahulu!");
    return;
  }
  addToCart(productId, size);
  closeProductModal();
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  if (modal) modal.classList.add("hidden");
}

/* ========== CHECKOUT ========== */
function openCheckout() {
  toggleCart(false);
  const modal = document.getElementById("checkoutModal");
  if (modal) modal.classList.remove("hidden");
}

function closeCheckout() {
  const modal = document.getElementById("checkoutModal");
  if (modal) modal.classList.add("hidden");
}

function submitCheckoutOrder(e) {
  e.preventDefault();
  const name = document.getElementById("chkName").value;
  const wa = document.getElementById("chkWa").value;
  const address = document.getElementById("chkAddress").value;
  const courier = document.getElementById("chkCourier").value;
  const payment = document.getElementById("chkPayment").value;

  const itemsText = cart
    .map((item, index) => `${index + 1}. ${item.title} (${item.size}) x${item.qty}`)
    .join("\n");
  const subtotal = cart.reduce((total, item) => total + item.price * item.qty, 0);
  const discount = (subtotal * discountPercent) / 100;
  const total = subtotal - discount;

  const message = encodeURIComponent(
    `*PESANAN BATIK KIRANA*\n\n` +
      `*Nama:* ${name}\n` +
      `*WA:* ${wa}\n` +
      `*Alamat:* ${address}\n` +
      `*Kurir:* ${courier}\n` +
      `*Bayar:* ${payment}\n\n` +
      `*Produk:*\n${itemsText}\n\n` +
      `*Total:* RP ${total}.000`
  );

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  cart = [];
  updateCartUI();
  closeCheckout();
}

function checkoutDirectWa() {
  if (cart.length === 0) {
    showToast("Keranjang masih kosong!");
    return;
  }
  const itemsText = cart
    .map((item, index) => `${index + 1}. ${item.title} (${item.size}) x${item.qty}`)
    .join("\n");
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = (subtotal * discountPercent) / 100;
  const total = subtotal - discount;
  const message = encodeURIComponent(
    `*PESANAN BATIK KIRANA*\n\n${itemsText}\n\n*Total:* RP ${total}.000`
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
}

/* ========== FORM KONTAK ========== */
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("contactName").value;
  const wa = document.getElementById("contactWa").value;
  const topic = document.getElementById("contactTopic").value;
  const message = document.getElementById("contactMsg").value;
  const waMessage = encodeURIComponent(
    `*Pesan Kontak Batik Kirana*\nNama: ${name}\nWA: ${wa}\nTopik: ${topic}\nPesan: ${message}`
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`, "_blank");
}

/* ========== TOAST ========== */
function showToast(msg) {
  const toast = document.getElementById("toastNotification");
  const message = document.getElementById("toastMessage");
  if (!toast || !message) return;
  message.innerText = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

/* ========== LOGIN / REGISTER ========== */
const AUTH_USERS_KEY = "batikKiranaUsers";
const AUTH_SESSION_KEY = "batikKiranaSession";

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_USERS_KEY) || "[]");
  } catch (e) {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
}

function getSession() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_SESSION_KEY) || "null");
  } catch (e) {
    return null;
  }
}

function setSession(user) {
  if (user) localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(user));
  else localStorage.removeItem(AUTH_SESSION_KEY);
  updateLoginUI();
}

function updateLoginUI() {
  const session = getSession();
  const loginBtn = document.getElementById("loginBtn");
  if (!loginBtn) return;

  if (session) {
    loginBtn.classList.add("is-logged-in");
    loginBtn.setAttribute("title", session.name || session.email);
    loginBtn.setAttribute("aria-label", "Akun saya");
    loginBtn.innerHTML = '<i data-lucide="user-check" style="width:24px;height:24px;"></i>';
  } else {
    loginBtn.classList.remove("is-logged-in");
    loginBtn.setAttribute("title", "Login");
    loginBtn.setAttribute("aria-label", "Login");
    loginBtn.innerHTML = '<i data-lucide="user" style="width:24px;height:24px;"></i>';
  }
  if (typeof lucide !== "undefined") lucide.createIcons();
}

function openLoginModal() {
  const modal = document.getElementById("loginModal");
  if (!modal) return;
  const session = getSession();
  const loginView = document.getElementById("loginFormView");
  const regView = document.getElementById("registerFormView");
  const loggedView = document.getElementById("loggedInView");
  const title = document.getElementById("loginModalTitle");

  if (session) {
    if (loginView) loginView.classList.add("hidden");
    if (regView) regView.classList.add("hidden");
    if (loggedView) loggedView.classList.remove("hidden");
    if (title) title.innerText = "Akun Saya";
    const nameEl = document.getElementById("loggedInName");
    const emailEl = document.getElementById("loggedInEmail");
    if (nameEl) nameEl.innerText = session.name || "Pengguna";
    if (emailEl) emailEl.innerText = session.email || "";
  } else {
    showLoginView();
  }
  modal.classList.remove("hidden");
  if (typeof lucide !== "undefined") lucide.createIcons();
}

function closeLoginModal() {
  const modal = document.getElementById("loginModal");
  if (modal) modal.classList.add("hidden");
}

function showLoginView() {
  const loginView = document.getElementById("loginFormView");
  const regView = document.getElementById("registerFormView");
  const loggedView = document.getElementById("loggedInView");
  const title = document.getElementById("loginModalTitle");
  if (loginView) loginView.classList.remove("hidden");
  if (regView) regView.classList.add("hidden");
  if (loggedView) loggedView.classList.add("hidden");
  if (title) title.innerText = "Masuk ke Batik Kirana";
}

function showRegisterView() {
  const loginView = document.getElementById("loginFormView");
  const regView = document.getElementById("registerFormView");
  const loggedView = document.getElementById("loggedInView");
  const title = document.getElementById("loginModalTitle");
  if (loginView) loginView.classList.add("hidden");
  if (regView) regView.classList.remove("hidden");
  if (loggedView) loggedView.classList.add("hidden");
  if (title) title.innerText = "Daftar Akun Baru";
}

function handleRegister(e) {
  e.preventDefault();
  const name = (document.getElementById("regName") || {}).value || "";
  const email = ((document.getElementById("regEmail") || {}).value || "").trim().toLowerCase();
  const password = (document.getElementById("regPassword") || {}).value || "";

  if (!name.trim() || !email || password.length < 4) {
    showToast("Lengkapi data dengan benar!");
    return;
  }
  const users = getUsers();
  if (users.some((u) => u.email === email)) {
    showToast("Email sudah terdaftar. Silakan masuk.");
    showLoginView();
    return;
  }
  users.push({ name: name.trim(), email, password });
  saveUsers(users);
  setSession({ name: name.trim(), email });
  showToast("Pendaftaran berhasil! Selamat datang, " + name.trim());
  closeLoginModal();
}

function handleLogin(e) {
  e.preventDefault();
  const email = ((document.getElementById("loginEmail") || {}).value || "").trim().toLowerCase();
  const password = (document.getElementById("loginPassword") || {}).value || "";
  if (!email || password.length < 4) {
    showToast("Email dan password wajib diisi!");
    return;
  }
  const users = getUsers();
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    showToast("Email atau password salah!");
    return;
  }
  setSession({ name: user.name, email: user.email });
  showToast("Berhasil masuk. Halo, " + user.name + "!");
  closeLoginModal();
}

function handleLogout() {
  setSession(null);
  showToast("Anda telah keluar.");
  closeLoginModal();
}