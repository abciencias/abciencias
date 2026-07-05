const botaoMenu = document.querySelector('.menu-botao');
const menu = document.querySelector('.menu');

if (botaoMenu && menu) {
  botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
  });
}
