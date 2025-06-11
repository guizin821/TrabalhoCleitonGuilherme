const form = document.querySelector('#form-tabuada');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // evita recarregar a página

  const num = Number(document.querySelector('#num').value);
  let tabuada = '';

  for (let i = 1; i <= 10; i++) {
    tabuada += `${num} x ${i} = ${num * i}<br>`;
  }

  resultado.innerHTML = tabuada;
});
