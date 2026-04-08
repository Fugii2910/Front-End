//javaScipt é uma linguagem de programação que serve para interagir com o HTML e CSS.

//variaveis é uma especie de conteiners para armazenar dados, porem ser declarado como: var, let e const
//  (As declarações let e const são as mais utilizadas atualmente)

//Exemplos:
//let nome = "Mundo"; (Declara a variavel nome e atribui a string mundo a ela)
//const PI = 3,14159; (Declara uma variavel imudavel)
//var idade = 47; (Tem um escopo mais amplo causando comportamentos inesperados em códigos mais elaborados)

function enviar() {
    //capturar os valores
    const name = document.getElementById('userName').value;
    const email = document.getElementById('mail').value.trim();
    const confirmaEmail = document.getElementById('confirmaEmail').value.trim();
    const confirmaSenha = document.getElementById('confirmaSenha').value.trim();
    const senha = document.getElementById('senhaEmail').value;


    //capturar elementos de erros
    const errorName = document.getElementById('errorName')
    const errorEmail = document.getElementById('errorEmail');
    const errorSenha = document.getElementById('errorSenha')

    //limpar mensagens de erro anteiores
    limparErros();

    const localMensagem = document.getElementById('mensagemAgradecimento');

    //validação
    let valido = true 
    
    //validação nome (obrigatório)
    if(name === '' || name.length < 3){
        errorName.style.display = 'block'
        errorName.textContent = 'Nome é obrigatório (minimo 3 caracteres).'
        document.getElementById('userName').style.borderColor = 'red'
        valido=false
    }

    //validação do email
    if(email === ''){
        errorEmail.style.display = 'block'
        errorEmail.textContent = 'Email é obrigatório.'
        document.getElementById('email').style.borderColor = 'red'
        valido=false
    }else if(email!==confirmaEmail){
        errorEmail.style.display = 'block'
        errorEmail.textContent = 'Os emails não se coincidem'
        document.getElementById('email').style.borderColor = 'red'
        document.getElementById('confirmaEmail').style.borderColor = 'red'
        valido=false
        }

    

    if(senha === '' || senha.length <8){
        errorSenha.style.display = 'block'
        errorSenha.textContent = 'Obrigatório uma senha (Minimo 8 caracteres)'
        document.getElementById('senha').style.borderColor = 'red'
        valido=false
    }else if(senha!==confirmaSenha){
    errorSenha.style.display = 'block'
    errorSenha.textContent = 'As senhas não são iguais'
    document.getElementById('senha').style.borderColor = 'red'
    document.getElementById('confirmaSenha').style.borderColor = 'red'
    valido=false
    }

    //tudo estiver okk
    if(valido){
        alert('Fórmulario enviado com sucesso' + name)
        //caso queira enviar o formulario para um servidor:
        //document.querySelector('form').submit();
        return true 
    }else{
return false 
    }

   //limpar mensagens de erro 
   function limparErros(){
    const erros=document.querySelectorAll('p[id^"error]')
    erros.forEach (erro=>{
        erro.style.display = 'none'
    }
   )}

//modo tela escura
const btn = document.getElementById('theme-toggle'); //seleciona o botao pelo id
btn.addEventListener('click', () =>{ //adiciona escutador  de evento paramo cliente
  document.body.classList.toggle('darkMode') //o metodo toggle adiciona a classe se ela não existir e remove se ela ja estiver la
  document.documentElement.classList.toggle('darkMode')

  if(document.documentElement.classList.container('darkMode')){ //muda o texto do botao conforme o tema
    btn.textContent = "Ativa modo claro"
  }else{
    btn.textContent = "Ativa modo escuro"
  }
});
}