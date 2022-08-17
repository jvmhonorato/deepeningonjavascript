const fs = require('fs');


//função retorna promesa que é determinar quando uma função vai retornar, no caso abaixo retorna um setTimeout com outra função dentro
function time(ms){
    return  new Promise((resolve, reject)=> {
        setTimeout(resolve, ms)
    })}

    //ms é o valor em milisegundos, e resolve é o conteúdo de .then
    time(2000).then(() => console.log('opa'))


    //função 
    const readFile= (file)=>{
        return new Promise((resolve, reject)=>{ 
            fs.readFile(file,(err,contents)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(contents.toString())
                }
            })
        })
    }

    const writeFile = (file,contents) => {
  return new Promise((resolve, reject)=>{
    fs.writeFile(file, contents, (err)=>{
        if(err){
            reject(err)
        }else{
            resolve()
        }
     })
   })
 }

 readFile('promise.js')
 .then((contents) =>writeFile('tst.js', contents))