/* =========================================
   MENU MOBILE (Mostrar/Esconder)
   ========================================= */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navLinks = document.querySelectorAll('.nav-link')

/* Validar se as constantes existem (para evitar erros) */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        // Adiciona a classe que mostra o menu (precisamos criar o CSS para isso abaixo)
        navMenu.classList.toggle('show-menu')
    })
}

/* Remover menu ao clicar em um link */
function linkAction(){
    // Quando clicar em qualquer link do menu, esconde o menu
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkAction))