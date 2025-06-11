const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarPalpite() {
    const palpite = parseInt(document.getElementById('palpite').value);
    const resultado = document.getElementById('resultado');
    const tentativasDiv = document.getElementById('tentativas');

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        resultado.textContent = 'Digite um número válido entre 1 e 100.';
        resultado.style.color = 'yellow';
        return;
    }

    tentativas++;

    if (palpite === numeroSecreto) {
        resultado.textContent = `Parabéns! Você acertou! 🎉 O número era ${numeroSecreto}.`;
        resultado.style.color = 'green';
        tentativasDiv.textContent = `Tentativas: ${tentativas}`;
    } else if (palpite < numeroSecreto) {
        resultado.textContent = 'O número é maior 🔼';
        resultado.style.color = 'orange';
        tentativasDiv.textContent = `Tentativas: ${tentativas}`;
    } else {
        resultado.textContent = 'O número é menor 🔽';
        resultado.style.color = 'orange';
        tentativasDiv.textContent = `Tentativas: ${tentativas}`;
    }

    document.getElementById('palpite').value = '';
}
