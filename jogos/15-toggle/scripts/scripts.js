document.addEventListener('DOMContentLoaded', () => {
  const botoes = document.querySelectorAll('.btn');
  botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const secao = document.getElementById(targetId);
      secao.classList.toggle('visible');
    });
  });
});
