"use restrict"

//exemplo1
if(true) {
    let nome1 = "Eduardo1"//let não permite uso em outros escopos
}

if(true) {
    var nome2 = "Eduardo2"//let permite uso em outros escopos
}

console.log(nome2, nome1)//nome 1 não será encontrado por estar usando a forma de declaração let, para que o programa rode deve ser usado var ou tirar nome1 do cosole.log


//exemplo2
function teste() {
    let nome = "Eduardo"
    if(true) {
        console.log("dentro do IF da gunção teste: " + nome)//funciona por estar dentro da função teste que é onde a variável foi declarada ou seja, está no mesmo escopo
    }
    console.log("Fora do if mas ainda dentro da função teste " + nome)//funcioa por estar dentro da função teste também
}

teste()

console.log("fora da função teste " + nome)//não funciona, pois a variável foi declarada em um escopo onde essa utilização dela não está incluso
