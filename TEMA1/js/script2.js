let input = document.querySelector("input[name=tarefa]");
let btn = document.querySelector("#botao");
let lista = document.getElementById("lista");
let card = document.querySelector(".card");
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];


//Função que adiciona as tarefas em tela, adicionando novo irem após digitá-la e apertar o botão para adicionar. 
function renderizarTarefas(){
  lista.innerHTML = "";

  for (tarefa of tarefas){
    let itemLista = document.createElement("li"); // cria o elemento "li"
    itemLista.setAttribute("class", "list-group-item list-group-item-action"); // adiciona classe do Bootstrap pré definida
    itemLista.onclick = function(){
      deletarTarefa(this);
    } // clicando no item irá deletá-lo

    let itemTexto = document.createTextNode(tarefa); // Cria o texto no item
    itemLista.appendChild(itemTexto);
    lista.appendChild(itemLista);
  }
}
renderizarTarefas(); // renderiza as tarefas, se já existirem. 



btn.onclick = function () {
  let novaTarefa = input.value; // pega o valor que esta digitado no input 

  if (novaTarefa !== "") {
    tarefas.push(novaTarefa); // verifica se o valor do input não esta vazio, se for falso adiciona nova tarefa
    renderizarTarefas();
    input.value = "";//limpa o input após apertar btn
    removeSpans();
    salvarDadosNoStorage();
  } else { // se o valor do input estiver vazio
    removeSpans(); 
    let span = document.createElement("span"); //cria o elemento span com alerta
    span.setAttribute("class", "alert alert-warning");
    let msg = document.createTextNode("Você precisa digitar a tarefa que deseja registrar!");
    span.appendChild(msg);
    card.appendChild(span);
  }
};

function removeSpans(){
  let spans = document.querySelectorAll("span");
  for (let i = 0; i <spans.length; i++){
    card.removeChild(spans[i]); // Cria o elemento span
  }
}

function deletarTarefa(tar){
  tarefas.splice(tarefas.indexOf(tar.textContent), 1);
  renderizarTarefas();
  salvarDadosNoStorage(); // apaga a tarefa ao clicar na mesma
}

function salvarDadosNoStorage(){ // fução que adiciona no localStorage as tarefas
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}