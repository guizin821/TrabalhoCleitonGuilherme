let jogadorAtual = 'X';
let tabuleiro = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

const tabuleiroDiv = document.getElementById('tabuleiro');
const mensagem = document.getElementById('mensagem');

function criarTabuleiro() {
  tabuleiroDiv.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const celula = document.createElement('div');
      celula.classList.add('celula');
      celula.dataset.linha = i;
      celula.dataset.coluna = j;
      celula.textContent = tabuleiro[i][j];
      celula.addEventListener('click', jogar);
      tabuleiroDiv.appendChild(celula);
    }
  }
}

function jogar(event) {
  const linha = event.target.dataset.linha;
  const coluna = event.target.dataset.coluna;

  if (tabuleiro[linha][coluna] !== '' || verificarFimDeJogo()) return;

  tabuleiro[linha][coluna] = jogadorAtual;
  criarTabuleiro();

  if (verificarVitoria(jogadorAtual)) {
    mensagem.textContent = `Jogador ${jogadorAtual} venceu!`;
  } else if (verificarEmpate()) {
    mensagem.textContent = 'Empate!';
  } else {
    jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
    mensagem.textContent = `Turno do jogador ${jogadorAtual}`;
  }
}

function verificarVitoria(jogador) {
  for (let i = 0; i < 3; i++) {
    if (
      tabuleiro[i][0] === jogador &&
      tabuleiro[i][1] === jogador &&
      tabuleiro[i][2] === jogador
    ) return true;

    if (
      tabuleiro[0][i] === jogador &&
      tabuleiro[1][i] === jogador &&
      tabuleiro[2][i] === jogador
    ) return true;
  }

  if (
    tabuleiro[0][0] === jogador &&
    tabuleiro[1][1] === jogador &&
    tabuleiro[2][2] === jogador
  ) return true;

  if (
    tabuleiro[0][2] === jogador &&
    tabuleiro[1][1] === jogador &&
    tabuleiro[2][0] === jogador
  ) return true;

  return false;
}

function verificarEmpate() {
  return tabuleiro.flat().every(cell => cell !== '');
}

function verificarFimDeJogo() {
  return verificarVitoria('X') || verificarVitoria('O') || verificarEmpate();
}

function reiniciarJogo() {
  jogadorAtual = 'X';
  tabuleiro = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  mensagem.textContent = `Turno do jogador ${jogadorAtual}`;
  criarTabuleiro();
}

reiniciarJogo();
