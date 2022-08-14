function time(ms){
    return  new Promise((resolve, reject)=> {
        setTimeout(()=> resolve(ms), ms)
    })}




// o async transforma a função em uma promise
async function ola (){
// estanciei a função time de forma asyncrona 
    const ms = await time(2000)
    console.log('terminou',ms)

}
console.log(ola())

const fs = require('fs')

//função com uma promessa path se transformará em lista na proxima função
function readdir(path) {
    //retorna uma funçao promise onde os parâmetro resolve e reject servirão  pra gerar uma instrução a ser  manifestada de acordo com a chamada da proxima função hey()
    return new Promise((resolve, reject)=>{
        //path será lista = ./  e o segundo parâmetro será function onde ela em cnojunto com resolve e o reject servirá pra rodar ou não código
        fs.readdir(path, function(err,lista){
            if(err){
                reject(err)
            }else{
                resolve(lista)
            }
        })
    })
}
async function hey (){
    //a função readdir pra ler o diretorio será estanciada na const lista 
const lista = await readdir('./')
// o retorn da função hey() é esse console log  caso der errado caira no reject e mostrará o error caso passe mostrará a lista
console.log(lista)
}
console.log(hey())