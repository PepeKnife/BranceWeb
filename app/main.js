const abrir_menu = document.getElementById("abrir");

const menu = document.getElementById("menu");

abrir_menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    abrir_menu.classList.toggle("fa-x");
})