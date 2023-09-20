const campoLogin = document.getElementById("login")
const campoSenha = document.getElementById("password")
const campoNovoLogin = document.getElementById("novoLogin")
const campoNovaSenha = document.getElementById("novaSenha")
const campoRepSenha = document.getElementById("repSenha")

let usuarios = [];

function login(){
    let mensagem = "Usuário ou senha incorreta!";
    for(let usuario of usuarios){
        if(usuario.login == campoLogin.value && usuario.senha == campoSenha.value){
            mensagem = "Logado com sucesso!"
            window.location.href ="./logado/home.html";
            break;
        }
    }
    alert(mensagem)
}

function cadastra(){
if(campoNovaSenha.value = campoRepSenha.value){
    let usuario = {
        login : campoNovoLogin.value,
        senha : campoNovaSenha.value
    }
    usuarios.push(usuario);
    alert("Usuáiro cadastrado com sucesso!")
}
else{
    alert("Você digitou duas senhas diferentes!")
}
}