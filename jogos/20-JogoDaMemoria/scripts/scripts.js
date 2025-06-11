const tabuleiro = document.getElementById('tabuleiro');
const mensagem = document.getElementById('mensagem');

const simbolos = ['▲', '■', '●', '◆', '★', '⬤', '⬛', '⬜'];


let cartas = [];
let cartasViradas = [];
let cartasEncontradas = 0;
let bloqueado = false;

function embaralhar(array) {
  for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function criarCartas() {
  // Duplicar os símbolos para pares
  cartas = embaralhar([...simbolos, ...simbolos]);
  tabuleiro.innerHTML = '';
  cartasViradas = [];
  cartasEncontradas = 0;
  mensagem.textContent = '';

  cartas.forEach((simbolo, index) => {
    const carta = document.createElement('div');
    carta.classList.add('carta');
    carta.dataset.simbolo = simbolo;
    carta.dataset.index = index;
    carta.textContent = ''; // virada para baixo

    carta.addEventListener('click', () => virarCarta(carta));
    tabuleiro.appendChild(carta);
  });
}

function virarCarta(carta) {
  if (bloqueado) return;
  if (cartasViradas.includes(carta)) return;
  if (carta.classList.contains('virada')) return;

  carta.classList.add('virada');
  carta.textContent = carta.dataset.simbolo;
  cartasViradas.push(carta);

  if (cartasViradas.length === 2) {
    bloquearTabuleiro(true);
    setTimeout(() => checarCartas(), 800);
  }
}

function checarCartas() {
  const [carta1, carta2] = cartasViradas;

  if (carta1.dataset.simbolo === carta2.dataset.simbolo) {
    // Encontrou par
    cartasEncontradas += 2;
    cartasViradas = [];
    bloquearTabuleiro(false);

    if (cartasEncontradas === cartas.length) {
      mensagem.textContent = 'Parabéns! Você encontrou todos os pares!';
    }
  } else {
    // Virar para baixo novamente
    carta1.classList.remove('virada');
    carta1.textContent = '';
    carta2.classList.remove('virada');
    carta2.textContent = '';
    cartasViradas = [];
    bloquearTabuleiro(false);
  }
}

function bloquearTabuleiro(valor) {
  bloqueado = valor;
}

function reiniciar() {
  criarCartas();
}

criarCartas();
