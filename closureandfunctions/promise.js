


//função retorna promesa que é determinar quando uma função vai retornar no cso abaixo retorna um setTimeout com outra função dentro
function time(ms){
    return  new Promise((resolve, reject)=> {
        setTimeout(resolve, ms)
    })}

    //ms é o valor em milisegundos, e resolve é o conteúdo de .then
    time(2000).then(() => console.log('opa'))