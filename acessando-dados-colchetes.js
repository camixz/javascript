const clientes = {
    nome: 'camilly',
    idade: 17,
    CPF: '123.456.789-40',
    email: 'camilly@gmail.com',
}

//console.log(`O nome do cliente é ${cliente['nome']} e a idade é ${cliente['idade']} anos`);

//criar um array com os dados
const chaves = ['nome','idade','cpf','email'];
chaves.forEach((chave) =>{
    console.log(`A chave ${chave} tem valor ${clientes[chave]}`)
})
 

