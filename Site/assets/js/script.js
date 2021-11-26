//var - escopo global, ou seja o nome pode ser acessado em qualquer lugar 
//let - escopo local, ou seja, o nome pode ser acessado de forma local
//const - é uma constante 
//podemos acesar elemento por Tag,  Id, Classe, Nome, Seletor
//Case Sensitive = reconhece letras maiusculas e minusculas

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false 

nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
    let txt = document.querySelector("#txtNome")
    if(nome.value.lenght <=2){
       txt.innerHTML = "Nome inválido"
       txt.style.color = "red"
    }
    else {
        txt.innerHTML = "Nome válido"
        txt.style.color = "green"
        nomeOk = true
    }

}
function validaEmail(){
    let txtEmail = document.querySelector("#email")
    if(email.value.indexof("@") == -1){
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color="red"
    }
    else{
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color="green"
        emailOk = true

         }
function validaAssunto(){
    let txtAssunto = document.querySelector("#assunto")

    if(assunto.value.lenght >=150 ){
        txtAssunto.innerHTML = "Texto muito grande, digite no mácimo 150 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }
    else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar (){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário enviado com sucesso!")
    }
    else {
        alert("Preencha corretamente o formulário!")

    }

}

}
