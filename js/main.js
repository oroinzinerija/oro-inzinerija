// ==================== BURGER MENU ====================
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger") || document.querySelector(".burger");
  const menu = document.getElementById("main-menu") || document.querySelector(".header-nav");

  if (!burger || !menu) return; // jei elementai neegzistuoja, nutraukiame

  // Atidarome / uždarome meniu paspaudus burger ikoną
  burger.addEventListener("click", (e) => {
    e.stopPropagation(); // nesukelia click ant body
    menu.classList.toggle("active");
    burger.classList.toggle("open");
  });

  // Uždarome meniu, jei paspaudžiame už jo
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

  // Uždarome meniu paspaudus nuorodą viduje
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      burger.classList.remove("open");
    });
  });
});
