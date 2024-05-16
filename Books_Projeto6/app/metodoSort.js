let btnOrdenarPreço = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPreço.addEventListener('click', orderLivrosPorPreco);

function orderLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a , b) => a.preco - b.preco);

    exibirOsLivrosNaTela(livrosOrdenados);
}