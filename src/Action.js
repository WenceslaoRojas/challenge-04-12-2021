export function evaluador(input, setCheck) {
  // Si el input es undefined retorna "balanceado"
  if (input === undefined) return setCheck("balanceado");
  // Si el input incluye parentesis comienza una evaluacion, sino retorna "balanceado"
  if (input.includes("(") || input.includes(")")) {
    let balance = 0;
    //Bucle para evaluar todos los caracteres
    for (let i = 0; i < input.length; i++) {
      // si el caracter evaluado es parentesis entra en la condicion de evaluacion
      if (input[i] === "(" || input[i] === ")")
        if (input[i - 1] !== ":")
          //Si no tiene dos puntos antes o despues (no es emoji) suma o resta al balance
          balance = input[i] === "(" ? balance + 1 : balance - 1;
        else if (
          input[i] === ")" &&
          (input[i - 2] === "(" || input[i - 2] !== undefined) &&
          (input[i + 1] !== ")" || input[i + 1] !== undefined)
        )
          balance = input[i] === "(" ? balance + 1 : balance - 1;
        else if (input[i] !== "(" && input[i - 1] !== ":") {
          // si es parentesis de apertura (emoji triste) hacemos la misma evaluacion
          balance = input[i] === "(" ? balance + 1 : balance - 1;
        }
    }
    // evaluamos si se resto lo mismo que se sumo o quedo desbalanceado y retornamos el estado "check" con el valor correspondiente
    return setCheck(balance === 0 ? "balanceado" : "desbalanceado");
  }
  setCheck("balanceado");
}
