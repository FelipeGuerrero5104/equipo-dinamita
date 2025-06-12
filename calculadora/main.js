let numero1 = parseFloat(prompt("Ingrese el primer número"));

let numero2 = parseFloat(prompt("Ingrese el segundo número"));

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function division(a, b) {
  return a / b;
}

function multiplicacion(a, b) {
  return a * b;
}

if (isNaN(numero1) || isNaN(numero2)) {
  alert("Error: Uno o ambos valores no son números válidos.Intente nuevamente");
} else if (numero1 === 0 || numero2 === 0) {
  alert(
    "Error: Ninguno de los numeros puede ser 0, ya que 0 no se puede usar para dividir."
  );
} else {
  let resultadoSuma = suma(numero1, numero2);
  let resultadoResta = resta(numero1, numero2);
  let resultadoDivision = division(numero1, numero2);
  let resultadoMultiplicacion = multiplicacion(numero1, numero2);

  /* alert(`Suma: ${resultadoSuma}
Resta: ${resultadoResta}
División: ${resultadoDivision}
Multiplicación: ${resultadoMultiplicacion}`);
 */

  document.getElementById("resultado-suma").textContent = resultadoSuma;
  document.getElementById("resultado-resta").textContent = resultadoResta;
  document.getElementById("resultado-multiplicacion").textContent =
    resultadoMultiplicacion;
  document.getElementById("resultado-division").textContent = resultadoDivision;
}