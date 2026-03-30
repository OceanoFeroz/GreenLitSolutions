const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".site-nav a").forEach((link) => {
  const target = link.getAttribute("href");
  if (target === currentPage) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

const contactForm = document.querySelector("[data-contact-form]");
const statusMessage = document.querySelector("[data-form-status]");

if (contactForm && statusMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    statusMessage.textContent =
      "Thank you. Your message has been noted for follow-up. Replace this front-end form handling with your preferred email or CRM integration later.";
    contactForm.reset();
  });
}

const slides = Array.from(document.querySelectorAll(".slide"));
let activeSlideIndex = 0;

if (slides.length > 1) {
  window.setInterval(() => {
    slides[activeSlideIndex].classList.remove("is-active");
    activeSlideIndex = (activeSlideIndex + 1) % slides.length;
    slides[activeSlideIndex].classList.add("is-active");
  }, 6500);
}
