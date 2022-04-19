gerarValorAleatorio = (tamanho) => {
    return Math.floor(Math.random()* tamanho);
}

pegarPersonagens = () => {
    let paginaAleatoria = gerarValorAleatorio(42);

    return fetch(`https://rickandmortyapi.com/api/character?page=${paginaAleatoria}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type":'application/json'
        }
    }).then((response) => response.json()).then ((data) => {
        for (let i = 1; i <= 3; i++) {
            let personagem = data.results[gerarValorAleatorio(20)];
            document.querySelector(`#img-${i}`).src = personagem.image;
            document.querySelector(`#img-${i}`).alt = personagem.name;
            document.querySelector(`#nome-${i}`).innerHTML= personagem.name;
            document.querySelector(`#especie-${i}`).innerHTML = personagem.species;
            document.querySelector(`#status-${i}`).innerHTML = personagem.status;
        }
    });
}

botao.onclick = pegarPersonagens;
window.onload = pegarPersonagens;