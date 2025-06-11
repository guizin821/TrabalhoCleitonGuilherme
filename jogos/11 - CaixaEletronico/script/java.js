function simularSaque() {
  const valorInput = document.getElementById('valor');
  let valor = parseInt(valorInput.value);
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '';

  if (isNaN(valor) || valor < 2) {
    resultadoDiv.textContent = 'Valor inválido. Mínimo: R$2.';
    resultadoDiv.style.color = 'yellow';
    return;
  }

  const notas = [100, 50, 20, 10, 5, 2];
  const distribuicao = {};

  for (let nota of notas) {
    let qtd = Math.floor(valor / nota);
    if (qtd > 0) {
      distribuicao[nota] = qtd;
      valor -= qtd * nota;
    }
  }

  if (valor !== 0) {
    resultadoDiv.textContent = 'Não é possível sacar esse valor com as notas disponíveis.';
    resultadoDiv.style.color = 'red';
    return;
  }

  resultadoDiv.style.color = 'white';
  for (let nota of notas) {
    if (distribuicao[nota]) {
      const linha = document.createElement('p');
      linha.textContent = `${distribuicao[nota]} nota(s) de R$${nota}`;
      resultadoDiv.appendChild(linha);
    }
  }

  valorInput.value = '';
}
