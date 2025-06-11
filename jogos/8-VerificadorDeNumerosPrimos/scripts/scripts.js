function verificarPrimo() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(numero) || numero < 1) {
      resultado.textContent = "Por favor, digite um número inteiro positivo.";
      return;
    }
  
    if (numero === 1) {
      resultado.textContent = "1 não é um número primo.";
      return;
    }
  
    let primo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        primo = false;
        break;
      }
    }
  
    resultado.textContent = primo
      ? `${numero} é um número primo!`
      : `${numero} não é um número primo.`;
  }
  