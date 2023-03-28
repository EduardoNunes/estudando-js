//Parâmetros rest utilizando stretch que são os 3 pontos antes de valores
function soma(...valores){ //recebe os valores na chamada da função em forma de array
    let tam=valores.length //Armazena o tamanho dos valores
    let res=0
    for(let i=0;i<tam;i++){ //soma os valores de cada posição
        res+=valores[i]
    }
    return res // retorna a soma
}

console.log(soma(10,5,4,3,5))

//USANDO FOR IN SIMPLIFICA A ESCRITA

/* function soma(...valores){ 
    let res=0
    for(let v of valores){
        res+=v
    }
    return res
}

console.log(soma(10,5,4,3,5)) */