console.log("Boas vindas ao jogo Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
   let carta1Usuario = comprarCarta()
   let carta2Usuario = comprarCarta()
   let carta1Computador = comprarCarta()
   let carta2Computador = comprarCarta()
   
   let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
   let pontuacaoComputador = carta1Computador.valor + carta2Computador.valor

   console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontuacaoUsuario}`)
   console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - ${pontuacaoComputador}`)
   
      if (pontuacaoUsuario > pontuacaoComputador && pontuacaoUsuario > 21) {
      console.log("O computador ganhou!")
      } else if (pontuacaoUsuario > pontuacaoComputador) {
      console.log("O usuário ganhou!")
      } else if (pontuacaoComputador > pontuacaoUsuario && pontuacaoComputador > 21) {
      console.log("O usuário ganhou!")
      } else if (pontuacaoComputador > pontuacaoUsuario) {
      console.log("O computador ganhou!")
      }  else if (pontuacaoUsuario === pontuacaoComputador) {
      console.log("Empate!")   
      }
   
} else {
console.log("O jogo acabou")
}