let livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscaLivrosAPI()

async function getBuscaLivrosAPI() {
    const res = await fetch(endpointAPI);

    livros = await res.json();

    let livrosComDesconto = aplicarDesconto(livros);

    exibirOsLivrosNaTela(livrosComDesconto);
}