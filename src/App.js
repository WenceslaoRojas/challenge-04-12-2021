import React, { useState } from "react";
import estilosApp from "./App.module.css";
import { evaluador } from "./Action";
function App() {
  const [input, setInput] = useState();
  const [check, setCheck] = useState();

  return (
    <div className={estilosApp.container}>
      <div className={estilosApp.center}>
        <h1>(Evaluador de balances)</h1>
        <form
          className={estilosApp.form}
          onSubmit={(e) => {
            e.preventDefault();
            evaluador(input, setCheck);
          }}
        >
          <input
            onChange={(e) => setInput(e.target.value)}
            className={estilosApp.input}
            placeholder='Ingresa una frase...'
            type='text'
            name='prueba'
          />

          <button className={estilosApp.btn} type='submit'>
            Check
          </button>
        </form>
        <span className={estilosApp.span} hidden={false}>
          {check}
        </span>
      </div>
      <h3>Wenceslao Rojas - Full Stack Developer </h3>
    </div>
  );
}

export default App;
