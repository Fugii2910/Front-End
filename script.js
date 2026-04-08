//javaScipt é uma linguagem de programação que serve para interagir com o HTML e CSS.

//variaveis é uma especie de conteiners para armazenar dados, porem ser declarado como: var, let e const
//  (As declarações let e const são as mais utilizadas atualmente)

//Exemplos:
//let nome = "Mundo"; (Declara a variavel nome e atribui a string mundo a ela)
//const PI = 3,14159; (Declara uma variavel imudavel)
//var idade = 47; (Tem um escopo mais amplo causando comportamentos inesperados em códigos mais elaborados)

function enviar() {
    const name = document.getElementById('userName').value;
    const email = document.getElementById('mail').value;
    const senha = document.getElementById('senhaEmail').value;

    const localMensagem = document.getElementById('mensagemAgradecimento');

    if(name.trim()=== ""){
        alert("Por favor, digite o nome antes de enviar!!");
    return;
  }

   if(email.trim()=== ""){
        alert("Por favor, digite o email antes de enviar!!");
    return;
  } 

   if(senha.trim()=== ""){
        alert("Por favor, digite a senha antes de enviar!!");
    return;
  }


  const mensagem = `Obrigado pelo envio, ${name} ! recebemos seus dados com sucesso.`;
  
  localMensagem.innerText = mensagem;
  localMensagem.style.color = "black";
  localMensagem.style.fontWeight = "bold";
}

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