// Obtém a referência para o elemento HTML com o id "botao"
const botao = document.getElementById("botao");

// Adiciona um ouvinte de evento de clique ao botão, que chama a função "valoresPassados"
botao.addEventListener("click", valoresPassados);

// Definição da função "valoresPassados"
function valoresPassados() {
  // Obtém o valor do elemento de input com o id "username"
  let userName = document.getElementById("username").value;

  // Armazena o valor obtido no armazenamento local com a chave "usernamevalue"
  localStorage.setItem("usernamevalue", userName);

  // Retorna false para impedir o comportamento padrão do formulário (se houver)
  return false;
}

// Imprime o número 2 no console
console.log(2);
