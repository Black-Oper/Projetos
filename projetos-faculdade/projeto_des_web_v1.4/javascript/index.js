// Obtém o valor armazenado no localStorage com a chave "usernamevalue" e atribui a variável "usuario"
let usuario = localStorage.getItem("usernamevalue");

// Obtém a referência para o elemento HTML com o id "signin"
const result = document.getElementById("signin");

// Define a função "nomeUsuario" que atualiza o conteúdo do elemento HTML com o valor de "usuario"
function nomeUsuario() {
  result.innerHTML = `User: ${usuario}`;
}

// Chama a função "nomeUsuario" para exibir o nome do usuário
nomeUsuario();

// Imprime o valor de "usuario" no console
console.log(usuario);
