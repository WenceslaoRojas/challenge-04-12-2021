export function evaluador(input, setCheck) {
  // Si el input es undefined retorna "balanceado"
  if (input === undefined) return setCheck("balanceado");
  // Si el input incluye parentesis comienza una evaluacion, sino retorna "balanceado"
  if (input.includes("(") || input.includes(")")) {
    let balance = 0;
    //Variable que nos indica la posicion del primer parentesis en la cadena
    let indexPrimerParentesis = input.length - 1;
    let indexUltimoParentesis = 0;
    //Bucle para evaluar todos los caracteres
    for (let i = 0; i < input.length; i++) {
      // debugger;
      // si el caracter evaluado es parentesis entra en la condicion de evaluacion
      if (input[i] === "(" || input[i] === ")") {
        //Buscamos el primer y el ultimo parentesis de la cadena
        indexPrimerParentesis =
          indexPrimerParentesis > i ? i : indexPrimerParentesis;
        indexUltimoParentesis =
          indexUltimoParentesis < i ? i : indexUltimoParentesis;
        if (input[i - 1] !== ":") {
          //Si no tiene dos puntos antes o despues (no es emoji) suma o resta al balance
          balance = input[i] === "(" ? balance + 1 : balance - 1;
        } else if (
          input[i] === ")" &&
          (input[i - 2] === "(" || typeof input[i - 2] === undefined)
        ) {
          // si tiene dos puntos y parentesis de cierre (emoji feliz) evaluamos que no haya otro parentesis cerca que "cierre" ese parentesis, en caso de haber los vamos a sumar o restar en el balance
          balance = input[i] === "(" ? balance + 1 : balance - 1;
        } else if (input[i] === "(" && input[i - 1] !== ":") {
          alert(")");
          // si es parentesis de apertura (emoji triste) hacemos la misma evaluacion
          balance = input[i] === "(" ? balance + 1 : balance - 1;
        }
      }
      //Antes de la proxima iteracion verifica si es el ultimo caracter de la cadena o si hay un espacio, de ser asi evalua si el primer parentesis encontrado es uno de apertura, y si el ultimo es un de cierre, si se cumple esa evaluacion evalua si el ultimo parentesis fue tomado como emoji. Si todas las evaluaciones son ciertas no lo cuenta como emoji, sino como par del otro parentesis, restando 1 al balance y "reseteando" los valores de index.
      if (
        i === input.length - 1 &&
        input[indexPrimerParentesis] === "(" &&
        input[indexUltimoParentesis] === ")" &&
        input[indexUltimoParentesis - 1] === ":" &&
        balance !== 0
      ) {
        indexPrimerParentesis = input.length - 1;
        indexUltimoParentesis = 0;
        balance = balance - 1;
      }
    }
    // evaluamos si se resto lo mismo que se sumo o quedo desbalanceado y retornamos el estado "check" con el valor correspondiente
    return setCheck(balance === 0 ? "balanceado" : "desbalanceado");
  }
  setCheck("balanceado");
}
