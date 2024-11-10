alert ("Boas vindas ao site!");
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let mensagemDeErro = "Erro! Preencha todos os campos";
alert (mensagemDeErro);

let nome = prompt ("Qual é o seu nome?");
let idade = prompt ("Qual é a sua idade?");
if(idade >= 18){
    console.log("Você pode tirar sua habilitação!")
}
else{"Ahh!Você ainda não pode tirar habilitação!"}