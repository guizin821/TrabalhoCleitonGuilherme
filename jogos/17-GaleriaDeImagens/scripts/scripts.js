const imagens = [
  { src: "https://media.istockphoto.com/id/517188688/pt/foto/paisagem-de-montanha.jpg?s=2048x2048&w=is&k=20&c=2TGA0cyeoOVzKZTZpMMNKy-Tj9nNT7NO33Z7Lf3f9nE=", categoria: "natureza" },
  { src: "https://img.odcdn.com.br/wp-content/uploads/2024/05/shutterstock_2261596665-1.jpg", categoria: "natureza" },
  { src: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", categoria: "tecnologia" },
  { src: "https://images.pexels.com/photos/4842496/pexels-photo-4842496.jpeg", categoria: "tecnologia" },
  { src: "https://media.istockphoto.com/id/2171701134/pt/foto/young-woman-lying-on-bed-is-daydreaming-looking-up-away-from-camera.jpg?s=2048x2048&w=is&k=20&c=U5TX7SSwjUtsil5DPvWfkmSTqkoO9sWhEzYRIuGWVqk=", categoria: "pessoas" },
  { src: "https://media.istockphoto.com/id/1634748319/pt/foto/close-up-beautiful-young-african-american-woman-smiling.jpg?s=2048x2048&w=is&k=20&c=1Kq4urp0sKONov0sQ4Lq87aX8oMpVzaJ51NpvfRLR60=", categoria: "pessoas" },
];

const galeria = document.getElementById("galeria");

function carregarImagens() {
  imagens.forEach((img, index) => {
    const imagemEl = document.createElement("img");
    imagemEl.src = img.src;
    imagemEl.classList.add("imagem");
    imagemEl.dataset.categoria = img.categoria;
    galeria.appendChild(imagemEl);
  });
}

function filtrarCategoria(categoria) {
  const todasImagens = document.querySelectorAll(".imagem");

  todasImagens.forEach((img) => {
    if (categoria === "todas" || img.dataset.categoria === categoria) {
      img.classList.remove("oculto");
    } else {
      img.classList.add("oculto");
    }
  });
}

carregarImagens();
