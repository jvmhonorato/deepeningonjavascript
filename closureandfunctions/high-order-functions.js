// HOF

//EX1
const valores = [1,2,3,4]

//mapeia os valores e seta a ação, nocaso abaixo multiplica por dois
const dobro = valores.map( valor => valor * 2)

console.log(dobro)


//EX2 vai retornar fora do vetor na vertical, pra cada valor uma representação
valores.forEach(valor => console.log(valor) )



//EX3
//somar os valores do vetor uns com os outros
const soma = valores.reduce((prev, curr) => prev+curr)

console.log(soma)


//EX4
//faz uma cascata prmeiro dobrando com .map() e depois somando com .reduce()

const soma2 = valores
.map( valor => valor * 2)
.reduce((prev, curr) => prev+curr)

console.log(soma2)

//EX5
//Usamos tambem o filter() pra filtra só os pares
const soma3 = valores.filter(valor => valor % 2 ===0)
.map( valor => valor * 2)
.reduce((prev, curr) => prev+curr)

console.log(soma3)