function resolver(){

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    let sinal = document.getElementById("sinais").value;

    let resultado;


    if(num1 == "" || num2 == ""){
        alert("Digite os dois números para o resultado!");
    }

    if(sinal == "soma"){

        resultado = n1 + n2;

    } else if (sinal == "subtracao"){

        resultado = n1 - n2;

    } else if (sinal == "multiplicacao") {
        if(n2==0){
            alert("Resultado inexistente");
        }

        resultado = n1 * n2;

    } else if (sinal == "divisao"){

        resultado = n1 / n2;

    }

    document.getElementById("Resultado").innerHTML = resultado;



}
resolver();