//initial é um vaga que receberá um valor futuramente
function func1(initial) {
    //initial representa o valor que será digitado entre perêntese la em baixo
    let contador = initial
   
    return function(){
        //vai adicionar  +1 a cada chamada
        contador++
        //retorn o valor digitado +1
        return contador
    }
}
const func = func1(10)
console.log(func())
console.log(func())



//O parâmentro name será o valor a ser atribuído 
function animal (name){
    //inicio do contador
    let count = 0
    return{
        //retornar contador ainda indefinido
        getCount: function(){
            return count
        }, 
        //incrementa +1 ao contador
        increment: function(){
            count++
        },
        //prepara o name pra receber um valor
        getName: function(){
            return name
        }
    }
}

//EX1

//estânciei a função acima
const gato = animal('gato')
//conectei ao incrementono contador
gato.increment()
// chamei a função estanciada pra retornar +1 ao valor atual e retornar o nome como o valor impposto ao name
console.log(gato.getCount(), gato.getName())

//EX2

const cachorro = animal('cachorro')
cachorro.increment()
console.log(cachorro.getCount(), cachorro.getName())