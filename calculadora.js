var valor, resultado;

function botao(num){
    valor = document.calc.visor.value += num;
}
function reset(){
    document.calc.visor.value = '';
}

function calcula(){
    resultado = eval(valor);
    document.calc.visor. value = resultado
}
function excluinumero(){
    valor = document.calc.visor.value = num - num;
}