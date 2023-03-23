let num=11
res=(!(num%2) ? "Par" : "Impar") //se o resultado é 0 ele retona falso, se 1 ele retorna verdadeiro. o resultado da frente é o verdadeiro, logo Par é 1 e Impar é 0. Como num%2 por num ser = 11, então ele deve retornar verdadeiro, por isso a necessidade da !, para q o resultado retorne negado e a resposta poder ser impar. A ? é um operador ternário.


console.log(res)