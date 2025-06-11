// script.js
function calcular() {
    var nota1,nota2,nota3,media;
    nota1 = document.getElementById('nota1').value;
    nota2 = document.getElementById('nota2').value;
    nota3 = document.getElementById('nota3').value;

    var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
    var status;

    if (media >= 7) {
        status = "Aprovado";
    } else if (media >= 5) {
        status = "Em exame";
    } else {
        status = "Reprovado";
    }

    document.getElementById("final").textContent = 
    `Média: ${media.toFixed(2)} - Status: ${status}`;

}
