const falar = (palavra) => {
    console.log(palavra)
}
falar('Hello world')

// arrow function
const somar = (num1, num2) => {
    return num1 + num2
}


// outra fomra de declarar arrow functions
const somar2 = (num1, num2) => num1 + num2


//função retornado encremento
const mediaLouca = (soma, num) => {
    soma++
    num++
    return soma/num
}

// o segundo parâmentro da função retorna uma função.
const animal = (nome, grunido) => nome + grunido()


console.log(animal('Leão: ',()=> 'rugiu'))

console.log(falar('Olá meu nome é JVMH'))


console.log(somar(4,5))

console.log(somar2(4,5))