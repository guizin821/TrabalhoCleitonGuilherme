function acessar() {
    const nome = document.getElementById("nome").value;
    const ra = document.getElementById("ra").value;

    if (nome && ra) {
        // Abre index2.html em uma nova aba
        window.open("jogos/index.html", "_blank");
    } else {
        alert("Por favor, preencha seu nome e RA.");
    }
}