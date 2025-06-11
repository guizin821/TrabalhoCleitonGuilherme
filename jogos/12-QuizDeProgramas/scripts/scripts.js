function calcularPontuacao() {
  const respostasCorretas = {
    q1: "b", // <a>
    q2: "c", // color
    q3: "a", // src
  };

  let pontuacao = 0;

  for (const pergunta in respostasCorretas) {
    const selecionada = document.querySelector(`input[name="${pergunta}"]:checked`);
    if (selecionada && selecionada.value === respostasCorretas[pergunta]) {
      pontuacao++;
    }
  }

  const resultado = document.getElementById("resultado");
  resultado.textContent = `Você acertou ${pontuacao} de ${Object.keys(respostasCorretas).length} perguntas.`;
}
