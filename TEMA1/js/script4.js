//variável global que busca o elemento do visor
let inputResultado = document.getElementById("inputCalculadora");

// objeto que registra os valores e funções do calculo
let calculo = {
  valorSalvo: null,
  funcaoParaCalcular: null,
};

//Ao carregar a página, atribui eventos aos botões por meio dos seus identificadores (IDS)
window.addEventListener("load", function () {
  atribuirEventos();
});

function atribuirEventos() {
  //atribuir eventos aos numeros

  document.getElementById("btnValor0").addEventListener("click", inserirNumero);
  document.getElementById("btnValor1").addEventListener("click", inserirNumero);
  document.getElementById("btnValor2").addEventListener("click", inserirNumero);
  document.getElementById("btnValor3").addEventListener("click", inserirNumero);
  document.getElementById("btnValor4").addEventListener("click", inserirNumero);
  document.getElementById("btnValor5").addEventListener("click", inserirNumero);
  document.getElementById("btnValor6").addEventListener("click", inserirNumero);
  document.getElementById("btnValor7").addEventListener("click", inserirNumero);
  document.getElementById("btnValor8").addEventListener("click", inserirNumero);
  document.getElementById("btnValor9").addEventListener("click", inserirNumero);

  //atribuir eventos aos botoes de operadores, ponto e resultado
  document.getElementById("btnPonto").addEventListener("click", inserirNumero);
  document.getElementById("btnSoma").addEventListener("click", clicarOperador);
  document
    .getElementById("btnDividir")
    .addEventListener("click", clicarOperador);
  document
    .getElementById("btnMultiplicar")
    .addEventListener("click", clicarOperador);
  document
    .getElementById("btnSubtrair")
    .addEventListener("click", clicarOperador);
  document.getElementById("btnLimpar").addEventListener("click", limparDados);
  document
    .getElementById("btnResultado")
    .addEventListener("click", clicarResultado);
}

//adiciona valor ao numero

function inserirNumero() {
  //Se o valor não for um numero, substitui pelo valor do conteudo do botao
  if (isNaN(inputResultado.value)) {
    inputResultado.value = event.target.textContent;
    //senão adiciona o valor aos demais
  } else {
    //se o valor for zero, substitui o valor do visor pelo numero clicado
    if (inputResultado.value == 0) {
      inputResultado.value = event.target.textContent;
    } else {
      inputResultado.value += event.target.textContent;
    }
  }
}

//operação de soma
function somar(valor1, valor2) {
  return valor1 + valor2;
}

//operação de subtração
function subtrair(valor1, valor2) {
  return valor1 - valor2;
}

//operação de multiplicação
function multiplicar(valor1, valor2) {
  return valor1 * valor2;
}

//operação de divisão
function dividir(valor1, valor2) {
  if (valor2 === 0) {
    return "erro, não é possivel dividir um numero por zero!";
  } else {
    return valor1 / valor2;
  }
}

function limparDados() {
  inputResultado.value = "";
  calculo.valorSalvo = null;
  calculo.funcaoParaCalcular = null;
}

//atribui a função de acordo com o tipo de operador clicado
function atribuirOperação(operador) {
  if (operador === "+") {
    calculo.funcaoParaCalcular = somar;
  } else if (operador === "-") {
    calculo.funcaoParaCalcular = subtrair;
  } else if (operador === "*") {
    calculo.funcaoParaCalcular = multiplicar;
  } else {
    calculo.funcaoParaCalcular = dividir;
  }
}

//atualiza valores de calculo
function clicarOperador() {
  if (!isNaN(inputResultado.value)) {
    if (calculo.valorSalvo == null) {
      calculo.valorSalvo = Number(inputResultado.value);
    } else if (calculo.funcaoParaCalcular != null) {
      calculo.valorSalvo = calculo.funcaoParaCalcular(
        calculo.valorSalvo,
        Number(inputResultado.value)
      );
    }
  }
  let operador = event.target.textContent;
  atribuirOperação(operador);
  inputResultado.value = operador;
}

//exibe resultado no visor
function clicarResultado() {
  if (!isNaN(inputResultado.value) && calculo.funcaoParaCalcular != null) {
    let resultado = calculo.funcaoParaCalcular(
      calculo.valorSalvo,
      Number(inputResultado.value)
    );
    inputResultado.value = resultado;
    calculo.valorSalvo = resultado;
    calculo.funcaoParaCalcular = null;
  }
}
