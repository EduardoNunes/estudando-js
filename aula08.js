let n1=10
let n2=11

let res1 = n1 & n2 //bitwise retorna equivalência dos valores em binário ex: 1011 comparado com 1110 retorna 1010 compara cada posição com a respectiva posição do outro

 let res2 = n1 | n2 //vai retornar a comparação das respectivas casas e sempre vai retonar 1 onde tiver 1 e só retorna 0 onde não tiver um em nenhum dos números

 let res3 = n1 << 1 //desloca 1 bit p esquerda 

 let res4 = n1 >> 2 //desloca 2 bits p direita


console.log(res1, res2, res3, res4) //vai retornar o resultado em decimal, mas o cálculo é em binário