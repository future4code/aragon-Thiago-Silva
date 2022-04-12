```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido){
  // Escreva seu código aqui
    let aux = 0
    for (let numero of arrayDeNumeros){
       if(numero === numeroEscolhido){
         aux = aux + 1   
       }      
    }   
     if(aux > 0){
       return `O número ${numeroEscolhido} aparece ${aux}x`
     }else {
       return `Número não encontrado`
     }  
   }
```