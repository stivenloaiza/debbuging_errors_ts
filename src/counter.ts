export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)


  const resultAdd = addNumbers(10, 0);
  console.log(resultAdd);
  const resultDivide = divideNumbers(10, 0); // Provoca un error en tiempo de ejecución (división por cero)
  console.log(resultDivide);
  printUserName(null);
}


// Errores de Sintaxis
function addNumbers(a: number, b: number { // Falta un paréntesis de cierre
  return a + b;
}

// Errores Lógicos
function isEven(num: number): boolean {
  return num % 2 === 1; // Error lógico: debería ser `num % 2 === 0` para verificar si es par
}

// Errores en Tiempo de Ejecución (Runtime Errors)
function divideNumbers(a: number, b: number): number {
  return a / b; // No maneja la división por cero
}


// Errores de Referencia (Null Reference)
interface User {
  name: string;
  age: number;
}
function printUserName(user: User | null) {
  console.log(user.name); // Error de referencia: posible acceso a propiedad de un objeto null
}
