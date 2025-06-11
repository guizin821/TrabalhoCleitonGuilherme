let listaDeItens = [];

function adicionarItem() {
    const input = document.getElementById('item');
    const item = input.value.trim();

    if (item === '') {
        alert('Digite um item válido!');
        return;
    }

    listaDeItens.push(item);
    input.value = '';
    atualizarLista();
}

function removerItem(index) {
    listaDeItens.splice(index, 1);
    atualizarLista();
}

function atualizarLista() {
    const ul = document.getElementById('itens');
    ul.innerHTML = '';

    listaDeItens.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item}
            <button onclick="removerItem(${index})">Excluir</button>
        `;
        ul.appendChild(li);
    });
}
