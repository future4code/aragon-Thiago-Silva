const calculadora = (operador, x, y) => {

    operador = process.argv[2]
    x = Number(process.argv[3])
    y = Number(process.argv[4])

    if(operador === "add") {
        return x + y
    } else if(operador === "sub") {
        return x - y
    } else if(operador === "mult") {
        return x * y
    } else if(operador === "div") {
        return x / y
    }
}

console.log(calculadora())