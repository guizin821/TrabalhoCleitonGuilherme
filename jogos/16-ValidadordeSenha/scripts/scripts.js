function validarSenha(event) {
  event.preventDefault(); // evita envio do formulário

  const senha = document.getElementById("senha").value;
  const mensagens = document.getElementById("mensagens");

  // Expressões regulares para os critérios
  const temMaiuscula = /[A-Z]/;
  const temMinuscula = /[a-z]/;
  const temNumero = /[0-9]/;
  const temEspecial = /[!@#$%^&*(),.?":{}|<>]/;

  // Lista de mensagens para mostrar
  const resultados = [];

  if (senha.length >= 8) {
    resultados.push({ texto: "Tem ao menos 8 caracteres", valido: true });
  } else {
    resultados.push({ texto: "Deve ter ao menos 8 caracteres", valido: false });
  }

  if (temMaiuscula.test(senha)) {
    resultados.push({ texto: "Contém letra maiúscula", valido: true });
  } else {
    resultados.push({ texto: "Precisa conter pelo menos uma letra maiúscula", valido: false });
  }

  if (temMinuscula.test(senha)) {
    resultados.push({ texto: "Contém letra minúscula", valido: true });
  } else {
    resultados.push({ texto: "Precisa conter pelo menos uma letra minúscula", valido: false });
  }

  if (temNumero.test(senha)) {
    resultados.push({ texto: "Contém número", valido: true });
  } else {
    resultados.push({ texto: "Precisa conter pelo menos um número", valido: false });
  }

  if (temEspecial.test(senha)) {
    resultados.push({ texto: "Contém caractere especial", valido: true });
  } else {
    resultados.push({ texto: "Precisa conter pelo menos um caractere especial", valido: false });
  }

  // Monta as mensagens no DOM
  mensagens.innerHTML = "";
  resultados.forEach(item => {
    const p = document.createElement("p");
    p.textContent = item.texto;
    p.className = item.valido ? "mensagem-sucesso" : "mensagem-erro";
    mensagens.appendChild(p);
  });
}
