
/*
//1) Qual o resultado da execução deste trecho de código e porquê?
function test() { 
    
  console.log(a) 
  console.log(foo())
  let a = 1
  const foo = function foo() {
    return 3
  }
}

test()
*/
//R=> as variaveis e constantes sempre ficam acima dentro do bloco de função pra não enclasurar, a variável tem que vim antes da chamada pra não dar undefined por segurança usar o let , ja a função consegue fazr o hook e por segurança deixar ela estanciada




/*
//2) Qual o resultado?
var a = 1;
function someFunction(number) {
  function otherFunction(input) {
    //sempre a o scolpe filho poderá ler o scolpe pai sendo assim podemos setar o valor externo de var de 1 para 5
    return a
  }
  
  a = 5
  //Retornou a função decorrente da função inicial(pai)
  return otherFunction;
}
//estanciou o valor final depois de setado da variável 'a' o parâmetro  number é só pra confundir, o que interessa e o resultado da função de dentro da função pai
var firstResult = someFunction(9)
var result = firstResult(2)
console.log(firstResult())
console.log(result)
*/


/*
//3) Qual o resultado? Explique sua resposta.
var fullname = 'Tulio Faria'
var obj = {
  fullname: 'Jose Silva',
  prop: {
    fullname: 'Nome Sobrenome',
    getFullname: function() {

        //o this referencia o objeto dessa estrutura ou seja do objeto prop que é: Nome Sobrenome e NÃO o fullname externo 
      return this.fullname;
    }
  }
};
// pra rodar dentro do contexto prop usa o metodo abaixo:
console.log(obj.prop.getFullname())


var test = obj.prop.getFullname

//pegar no contexto interno ao prop
console.log(test.bind(obj.prop)())

//pegar no contexto externo ao prop
console.log(test.bind(obj)())

//R=> Evitar usar o this pra não dar side effect
*/


//4) O que sairá no console neste exemplo a seguir:
var a = 1
function b() {
  a = 10
  //retorna nada pois tem ';'no final do return
  return;
  //função que não faz nada
  function a() {}
}
b()
console.log(a)

//=>Hosting vai vazer retonr '1' se o console.log(a) fosse dentro da função ele tirária a visibilidade externa da var = 1 aconteceria o hosting e retornaria function a 