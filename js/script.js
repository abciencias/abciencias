const botaoMenu = document.querySelector('.menu-botao');
const menu = document.querySelector('.menu');

if (botaoMenu && menu) {
  botaoMenu.addEventListener('click', () => {
    const aberto = menu.classList.toggle('aberto');
    botaoMenu.setAttribute('aria-expanded', aberto ? 'true' : 'false');
  });
}


// Contador regressivo para a realização da II ABCiências.
// Data da Mostra: 30/10/2026.
const dataEvento = new Date('2026-10-30T08:00:00');


function doisDigitos(valor) {
  return String(valor).padStart(2, '0');
}


function atualizarContador() {

  const ids = ['dias', 'horas', 'minutos', 'segundos'];

  if (!ids.every(id => document.getElementById(id))) {
    return;
  }


  const agora = new Date();
  const diferenca = dataEvento - agora;


  if (diferenca <= 0) {

    document.getElementById('dias').textContent = '00';
    document.getElementById('horas').textContent = '00';
    document.getElementById('minutos').textContent = '00';
    document.getElementById('segundos').textContent = '00';

    return;
  }


  const dias = Math.floor(
    diferenca / (1000 * 60 * 60 * 24)
  );


  const horas = Math.floor(
    (diferenca / (1000 * 60 * 60)) % 24
  );


  const minutos = Math.floor(
    (diferenca / (1000 * 60)) % 60
  );


  const segundos = Math.floor(
    (diferenca / 1000) % 60
  );


  document.getElementById('dias').textContent =
    doisDigitos(dias);


  document.getElementById('horas').textContent =
    doisDigitos(horas);


  document.getElementById('minutos').textContent =
    doisDigitos(minutos);


  document.getElementById('segundos').textContent =
    doisDigitos(segundos);

}


atualizarContador();

setInterval(atualizarContador, 1000);


// Animações de entrada dos elementos da página.
const observador = new IntersectionObserver(
  (entradas) => {

    entradas.forEach((entrada) => {

      if (entrada.isIntersecting) {
        entrada.target.classList.add('visivel');
      }

    });

  },
  {
    threshold: 0.15
  }
);


document.querySelectorAll('.revelar').forEach(
  el => observador.observe(el)
);
