document.getElementById('form-imc').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    if (!peso || !altura || altura <= 0) {
        document.getElementById('resultado').innerText = 'Preencha os campos corretamente.';
        return;
    }

    var imc = calcularIMC(peso, altura);
    mostrarResultado(imc);
});

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function mostrarResultado(imc) {
    var resultado = '';

    if (imc < 18.5) {
        resultado = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        resultado = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        resultado = 'Sobrepeso';
    } else {
        resultado = 'Obesidade';
    }

    document.getElementById('resultado').innerText = 'Seu IMC é ' + imc.toFixed(2) + ' - ' + resultado;
}
