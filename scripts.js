// Referencia al botón de volver al inicio
const scrollToTopButton = document.getElementById("scrollToTop");

// Mostrar el botón solo cuando el usuario baja 300px
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "flex";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Volver al inicio al hacer clic
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
