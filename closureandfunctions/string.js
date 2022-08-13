const nome = 'Victor Honorato'

// o .split separa caracters letra por letra em um array 
console.log(nome.split('').join('<=>'))

//separa em duas palavras
const split = nome.split(' ')


// string multilinha usar "`"crase   tamplate string
const opa = `teste: ${nome}
teste1: ${nome.split('')}
teste3: ${nome.length}
`
console.log(opa)
console.log(split)