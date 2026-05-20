/* =========================
   SIZE BUTTON ACTIVE
========================= */

const sizeButtons = document.querySelectorAll(".size-list button");

sizeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sizeButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  });
});

/* =========================
   FILTER BUTTON ACTIVE
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  });
});

/* =========================
   CART QUANTITY
========================= */

const qtyContainers = document.querySelectorAll(".cart-qty");

qtyContainers.forEach((container) => {
  const minusBtn = container.children[0];
  const qtyText = container.children[1];
  const plusBtn = container.children[2];

  let qty = parseInt(qtyText.textContent);

  plusBtn.addEventListener("click", () => {
    qty++;

    qtyText.textContent = qty;
  });

  minusBtn.addEventListener("click", () => {
    if (qty > 1) {
      qty--;

      qtyText.textContent = qty;
    }
  });
});

/* =========================
   CHECKOUT BUTTON
========================= */

const checkoutButton = document.querySelector(".btn-checkout");

if (checkoutButton) {
  checkoutButton.addEventListener("click", () => {
    alert("Pesanan berhasil dibuat!");
  });
}

/* =========================
   SEARCH PRODUCT
========================= */

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const keyword = searchInput.value.toLowerCase();

    const productCards = document.querySelectorAll(".produk-card");

    productCards.forEach((card) => {
      const productName = card
        .querySelector(".product-name")
        .textContent.toLowerCase();

      if (productName.includes(keyword)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

/* =========================
   MODAL DETAIL
========================= */

const modal = document.getElementById("productModal");

const modalTitle = document.getElementById("modalTitle");

const modalPrice = document.getElementById("modalPrice");

const detailButtons = document.querySelectorAll(".detail-btn");

const closeModal = document.querySelector(".close-modal");

/* OPEN MODAL */

detailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".produk-card");

    const productName = card.querySelector(".product-name").textContent;

    const productPrice = card.querySelector("p").textContent;

    modalTitle.textContent = productName;

    modalPrice.textContent = productPrice;

    modal.classList.add("show");
  });
});

/* CLOSE BUTTON */

if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
  });
}

/* CLOSE OUTSIDE */

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

/* =========================
   DARK MODE
========================= */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    /* ICON */

    if (document.body.classList.contains("dark-mode")) {
      themeToggle.textContent = "☀️";
    } else {
      themeToggle.textContent = "🌙";
    }
  });
}

/* =========================
   HAMBURGER MENU
========================= */

const hamburger = document.getElementById("hamburger");

const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}
