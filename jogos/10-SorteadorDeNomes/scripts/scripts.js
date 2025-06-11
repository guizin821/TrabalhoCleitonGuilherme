function sortearNome() {
  const entrada = document.getElementById("nomes").value;
  const resultado = document.getElementById("resultado");

  if (!entrada.trim()) {
    resultado.textContent = "Por favor, digite ao menos um nome.";
    return;
  }

  const nomes = entrada
    .split(",")
    .map(nome => nome.trim())
    .filter(nome => nome.length > 0);

  if (nomes.length === 0) {
    resultado.textContent = "Lista vazia. Digite nomes válidos.";
    return;
  }

  const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
  resultado.textContent = `Nome sorteado: ${sorteado}`;
}
