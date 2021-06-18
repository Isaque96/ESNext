function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp');
            if (Math.random() < chanceErro) {
                reject("Ocorreu um erro!");
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e);
        }
    })
}

funcionarOuNao("Testando...", 0.5)
.then(v => console.log(`Valor: ${v}`))
.then(
    v => console.log(v),
    err => console.log(`Erro Esp.: ${err}`) 
    // Com o bloco try/catch ele cai no primeiro tratamento
)
.then(() => console.log("Quase fim!"))
.catch(err => console.log(`Erro Geral: ${err}`))
.then(() => console.log("Fim!"));