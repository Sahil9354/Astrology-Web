/* ===============================
   SERVICE CARD CLICK
================================ */
document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    const link = card.dataset.link;
    if (link) window.location.href = link;
  });
});

/* ===============================
   HAMBURGER TOGGLE
================================ */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* ===============================
   MOBILE DROPDOWN TAP
================================ */
document.querySelectorAll(".dropdown > a").forEach(link => {
  link.addEventListener("click", e => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      link.parentElement.classList.toggle("active");
    }
  });
});

/* ===============================
   HERO TEXT LETTER ANIMATION
================================ */
const heroTextEl = document.getElementById("heroText");

if (heroTextEl) {
  const text = heroTextEl.innerText.trim();
  heroTextEl.innerHTML = "";

  [...text].forEach(char => {
    const span = document.createElement("span");
    span.innerHTML = char === " " ? "&nbsp;" : char;
    heroTextEl.appendChild(span);
  });
}

//========= chat button ==============

function sendWhatsApp(serviceName) {
  const phoneNumber = "919818688911";

  const message = `Hello 🙏
I am interested in *${serviceName}*.

Please share:
✔️ Details
✔️ Charges
✔️ Best date & time

Thank you`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

