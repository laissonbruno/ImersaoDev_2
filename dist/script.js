function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico / 1.609;
  var elementValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "O Resultado aproximado em milhas é: " +
    valorEmReal.toFixed(0) +
    " Milhas por hora";
  elementValorConvertido.innerHTML = valorConvertido;
}