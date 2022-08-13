// fs file system interagem com os dados da maquina
const fs = require('fs');


console.log('inicio')


// busca na rais do dirétorio com uma função pra gerar erro caso não encontre ou renderizar se encontrar. FUNÇÃO RODA INICIALMENTE NO EVENT LOOP
/*
//readdir asincrona
fs.readdir('./',function(err, lista){
    if(err){
        console.log(err)
    }else{
        console.log(lista)
    }
    
} )
*/
//readdirSync executa de forma sincrona na thread principal ou seja diferentemente da forma asyncrona ele não vcai pro event loop
console.log(fs.readdirSync('/'))


console.log('fim')