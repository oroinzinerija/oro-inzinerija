// ==================== DOM READY ====================
document.addEventListener("DOMContentLoaded", () => {

  // ==================== BURGER MENU ====================
  const burger = document.getElementById("burger") || document.querySelector(".burger");
  const menu = document.getElementById("main-menu") || document.querySelector(".header-nav");

  if (burger && menu) {
    burger.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("active");
      burger.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (
        menu.classList.contains("active") &&
        !menu.contains(e.target) &&
        !burger.contains(e.target)
      ) {
        menu.classList.remove("active");
        burger.classList.remove("open");
      }
    });

    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        burger.classList.remove("open");
      });
    });
  }

  // ==================== BACK-TO-TOP BUTTON ====================
  const backToTop = document.createElement("div");
  backToTop.className = "back-to-top";
  backToTop.innerHTML = "↑";
  document.body.appendChild(backToTop);

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Rodyti / slėpti back-to-top pagal scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) backToTop.classList.add("show");
    else backToTop.classList.remove("show");
  });

  // ==================== SCROLL INDICATOR ====================
  const scrollIndicator = document.createElement("div");
  scrollIndicator.className = "scroll-indicator";
  document.body.appendChild(scrollIndicator);

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollIndicator.style.width = scrollPercent + "%";
  });

  // ==================== LAZY LOAD IMAGES ====================
  const lazyImages = document.querySelectorAll("img.lazy-load");
  const lazyObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add("lazy-loaded");
        observer.unobserve(img);
      }
    });
  }, { threshold: 0.1 });

  lazyImages.forEach(img => lazyObserver.observe(img));

  // ==================== SCROLL ANIMATIONS ====================
  const scrollAnimElements = document.querySelectorAll(
    ".scroll-fade, .scroll-scale, .scroll-slide-left, .scroll-slide-right"
  );

  const scrollAnimObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  scrollAnimElements.forEach(el => scrollAnimObserver.observe(el));

  // ==================== DARK MODE TOGGLE ====================
  const darkToggleBtn = document.querySelector("#dark-toggle");
  if (darkToggleBtn) {
    darkToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      // Optional: save preference
      localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode")
      );
    });

    // Load preference
    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark-mode");
    }
  }

});
