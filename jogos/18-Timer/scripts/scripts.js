let totalSegundos = 0;
let intervalo = null;

function atualizarDisplay() {
  const display = document.getElementById("display");
  let minutos = Math.floor(totalSegundos / 60);
  let segundos = totalSegundos % 60;

  const minStr = minutos.toString().padStart(2, '0');
  const segStr = segundos.toString().padStart(2, '0');
  display.textContent = `${minStr}:${segStr}`;
}

function iniciar() {
  if (intervalo) return; // evita múltiplos intervalos

  const inputMin = document.getElementById("minutos");
  const inputSeg = document.getElementById("segundos");
  const mensagem = document.getElementById("mensagem");

  if (totalSegundos === 0) {
    let minutos = parseInt(inputMin.value);
    let segundos = parseInt(inputSeg.value);

    if (isNaN(minutos)) minutos = 0;
    if (isNaN(segundos)) segundos = 0;

    if (minutos < 0 || segundos < 0 || segundos > 59) {
      mensagem.textContent = "Por favor, insira valores válidos.";
      return;
    }

    totalSegundos = minutos * 60 + segundos;
    if (totalSegundos === 0) {
      mensagem.textContent = "Digite um tempo maior que zero.";
      return;
    }
  }

  mensagem.textContent = "";
  atualizarDisplay();

  intervalo = setInterval(() => {
    totalSegundos--;

    if (totalSegundos < 0) {
      clearInterval(intervalo);
      intervalo = null;
      mensagem.textContent = "Tempo esgotado!";
      return;
    }

    atualizarDisplay();
  }, 1000);
}

function pausar() {
  clearInterval(intervalo);
  intervalo = null;
}

function resetar() {
  pausar();
  totalSegundos = 0;
  atualizarDisplay();
  document.getElementById("mensagem").textContent = "";
  document.getElementById("minutos").value = "";
  document.getElementById("segundos").value = "";
}
