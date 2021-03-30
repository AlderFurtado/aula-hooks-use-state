import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  // useSate = Estrutura para declarar um state dentro de um componente funcional
  // (0) = valor do state inicial
  // count = variavel onde será armazenado o state que será preservado pelo React
  // setCount = funcão que seta o novo state dentro da variavél atribuida

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
