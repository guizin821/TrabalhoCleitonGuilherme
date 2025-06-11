function validarCPF() {
    const cpf = document.getElementById('cpf').value.trim();
    const resultado = document.getElementById('resultado');

    if (cpf.length === 11 && /^\d+$/.test(cpf)) {
        resultado.textContent = 'CPF Válido ✅';
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'CPF Inválido ❌';
        resultado.style.color = 'red';
    }
}
