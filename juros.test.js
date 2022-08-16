const juros = require('./juros');

test('jurosSimples', () => {
    //parâmetros a serem multiplicados
    const  C = 100
    const i = 0.10
    const t = 1

    //resultado da função jurosSimples
    const jurosEsperados = 10

    //estanciar em jurosCalc o resultado da função jurosSimples que importei atraves de juros pra esse teste
    const jurosCalc = juros.jurosSimples(C, i, t)

    //verificar se o esperado combina com o declarado
    expect(jurosCalc).toBe(jurosEsperados)
}) 

test('montanteSimples', () => {
     //parâmetros a serem multiplicados
    const C = 100
    const i = 0.10
    const t = 1

    //resultado esperado da função
    const montanteEsperado =  110

    //uestanciando o jest.fn() em jurosSimples 
    const jurosSimples = jest.fn()

    //implementando a constante jurosSimples o mockIMplemetation com + 10
    jurosSimples.mockImplementation(()=> 10)

    //estanciando na const montanteSimples a função montanteSImples({jurosSimples + 10}) que vem de juros.js automaticamnete com o jest + 10 agregado a ela
    const montanteSimples = juros.pure.montanteSimples({jurosSimples})

    //estancia a a função montanteSimples(C, i, t) com os parâmetros já mockados pelo jest a constante montante
    const montante = montanteSimples(C, i, t)

    console.log('montante', montante)
    // espera que o valor gerado pela consulta do filtro seja igual aos valores C, i, t
    expect(jurosSimples.mock.calls[0]).toEqual([C,i,t])
    expect(montante).toBe(montanteEsperado)
})


test('montanteJurosCompostos', () => {
    const C = 1000
    const i = 0.10
    const t = 1
    const jurosEsperados = 1100
    const jurosCalc = juros.montanteJurosCompostos(C,i,t)
    expect(jurosCalc).toBe(jurosEsperados)
})

test('jurosCompostos', () => {
    const C = 1000
    const i = 0.10
    const t = 1
   
    //tornando a dependencia uma função jest 
    const montanteJurosCompostos =jest.fn()
    //implementando o resultado mockado esperado
    montanteJurosCompostos.mockImplementation(() => 1100)

    //estanciei na constante jurosComposto  a função jurosComposto({montanteJurosCompostos}) com sua dependencia ja mockada pelo jest e esperando o 1100 
    const jurosCompostos = juros.pure.jurosCompostos({ montanteJurosCompostos })

    //passando os parâmetros 
    const jurosCalc = jurosCompostos(C,i,t)

    //Filtra a função mockada pra ver se a chamada correponde aos valores declarados
    expect(montanteJurosCompostos.mock.calls[0]).toEqual([C,i,t])
    expect(jurosCalc).toBe(100)
})