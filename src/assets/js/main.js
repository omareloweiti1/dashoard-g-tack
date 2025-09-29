const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");

langBtn.addEventListener("click", () => {
  langMenu.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.classList.add("hidden");
  }
});
