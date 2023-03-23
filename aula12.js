const jogador1={nome:"Bruno", energia:100, vidas:6, magia:150}
const jogador2={nome:"Bruce", energia:100, vidas:5, velocidade:80}
const jogador3={...jogador1, ...jogador2}// com o operador spread "..." ele atribui os valores iguais sem repetir conservando o ultimo valor e os diferentes como magia e velocidade ele concatena

const soma=(v1,v2,v3)=>{
    return v1+v2+v3
}

let valores=[1,5,4]

console.log(soma(...valores))//vai atribuir os valores 1,5,4 nas variáveis v1,v2,v3 na respectiva ordem. 


const objs1 = document.getElementsByTagName("div")//pega elementos HTML
const objs2 = [...document.getElementsByTagName("div")]//pega elementos HTML porém os elementos se comportarão como array

//obs.: A vantagem é que trabalhando com o spread haverão muito mais possibilidades de funções para se trabalhar

objs1.//Dê ctrl + espaço entre o ./ e veja a diferença das funções desse pra a de baixo
objs2.//Dê ctrl + espaço entre o ./

console.log(objs1)
console.log(objs2)