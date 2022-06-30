function listarTodasAsPropriedades(obj){
    return Object.getOwnPropertyNames(obj)
	}

console.log(listarTodasAsPropriedades({id:1, nome:"astrodev"}))


function listarPropriedades(obj){
    return Object.keys(obj)
	}

console.log(listarPropriedades({id:1, nome:"astrodev", email:"will@gmail.com"}))