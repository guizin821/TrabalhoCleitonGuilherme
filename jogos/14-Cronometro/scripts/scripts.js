let segundos = 0;
let minutos = 0;
let intervalo = null;

function atualizarDisplay() {
  const display = document.getElementById("display");
  const minStr = minutos.toString().padStart(2, '0');
  const segStr = segundos.toString().padStart(2, '0');
  display.textContent = `${minStr}:${segStr}`;
}

function iniciar() {
  if (intervalo) return; // evita múltiplos intervalos

  intervalo = setInterval(() => {
    segundos++;
    if (segundos === 60) {
      segundos = 0;
      minutos++;
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
  segundos = 0;
  minutos = 0;
  atualizarDisplay();
}
