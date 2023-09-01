function calculation() {

    if (result != undefined){
        calculo = prompt("Tipo de calculo + - * /")
        y = Number(prompt("number2"))
    if (calculo === "+"){
        result = result + y
        console.log("The result is:", result)
    }
    else if (calculo === "-"){
        result = result - y
        console.log("The result is:", result)
    }
    else if (calculo === "*"){
        result = result * y
        console.log("The result is:", result)
    }else if (calculo === "/"){
        result = result / y
        console.log("The result is:", result)
    }
    else{
        console.log("Calculo inválido")
    }
    return result
}
    else{
    x = Number(prompt("Number1"))
    calculo = prompt("Tipo de calculo + - * /")
    y = Number(prompt("number2"))
        if (calculo === "+"){
            result = x + y
            console.log("The result is:", result)
        }
        else if (calculo === "-"){
            result = x - y
            console.log("The result is:", result)
        }
        else if (calculo === "*"){
            result = x * y
            console.log("The result is:", result)
        }else if (calculo === "/"){
            result = x / y
            console.log("The result is:", result)
        }
        else{
            console.log("Calculo inválido")
        }
        return result
    }
}
let result;
let ask = prompt("Quer calcular? Yes or No")

while (ask === "yes") {
    calculation()
    ask = prompt("Quer continuar? yes or no")
}

