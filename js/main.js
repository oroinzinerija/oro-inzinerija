// Burger menu
const burger = document.getElementById("burger");
const menu = document.getElementById("main-menu");
if (burger && menu) {
  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    burger.classList.toggle("open");
  });
}

// Filtrai
const manufacturerSelect = document.getElementById("manufacturer");
const airflowSelect = document.getElementById("airflow");
const efficiencySelect = document.getElementById("efficiency");
const boxes = document.querySelectorAll(".content-box");

function filterBoxes() {
  const mVal = manufacturerSelect?.value;
  const aVal = airflowSelect?.value;
  const eVal = efficiencySelect?.value;

  boxes.forEach(box => {
    let show = true;

    if (mVal && mVal !== "all" && box.dataset.manufacturer !== mVal) show = false;

    if (aVal && aVal !== "all") {
      const airflow = parseInt(box.dataset.airflowValue);
      if (aVal === "0-200" && airflow > 200) show = false;
      if (aVal === "200-400" && (airflow < 200 || airflow > 400)) show = false;
      if (aVal === "400+" && airflow < 400) show = false;
    }

    if (eVal && eVal !== "all" && box.dataset.efficiency !== eVal) show = false;

    box.style.display = show ? "block" : "none";
  });
}

manufacturerSelect?.addEventListener("change", filterBoxes);
airflowSelect?.addEventListener("change", filterBoxes);
efficiencySelect?.addEventListener("change", filterBoxes);

// Scroll efektas
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if(window.scrollY > 50){
    header?.classList.add("scrolled");
  } else {
    header?.classList.remove("scrolled");
  }
});

// Aktyvus puslapis nav meniu
const navLinks = document.querySelectorAll(".header-nav a");
navLinks.forEach(link => {
  if(link.href === window.location.href){
    link.classList.add("active");
  }
});
