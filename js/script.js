const botaoMenu = document.querySelector('.menu-botao');
const menu = document.querySelector('.menu');

if (botaoMenu && menu) {
  botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
  });
}
// ======================
// CONTADOR ABCIÊNCIAS
// ======================

const dataEvento = new Date("2026-09-15T08:00:00");

function atualizarContador() {

    const agora = new Date();

    const diferenca = dataEvento - agora;

    if (diferenca <= 0) return;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);

    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);

    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

atualizarContador();

setInterval(atualizarContador,1000);
