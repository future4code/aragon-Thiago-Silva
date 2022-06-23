function invertePalavra (palavra) {
    let palavraInvertida = ""
    for(let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i]
    }
    return palavraInvertida
}

console.log(invertePalavra("Hello world!"))


function invertePalavraFuncaoNativaJS (world) {
    worldReverted = world.split('').reverse().join('')

    return worldReverted
}

console.log(invertePalavraFuncaoNativaJS("Olá, Mundo!"))