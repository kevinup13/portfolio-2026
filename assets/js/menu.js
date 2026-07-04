document.addEventListener("DOMContentLoaded", () => {
  const iconMenu = document.querySelector(".icon-menu");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu ul li a");

  if (iconMenu && navMenu) {
    // Alterna a classe 'active' no menu e no botão
    iconMenu.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      iconMenu.classList.toggle("active");
    });

    // Fecha o menu e reseta o ícone ao clicar em um link
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        iconMenu.classList.remove("active");
      });
    });
  }
});