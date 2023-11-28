import { useState } from "react";
import { Inputs } from "../../components/ReactHooks/useState/inputs";

export default function Hooks() {
  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState(0);

  function handleIncrease() {
    setCounter((prev) => prev + 1);
  }

  function handleDecrease() {
    setCounter((prev) => prev - 1);
  }
  function handleZero() {
    setCounter(0);
  }

  function handleAmount(){
    setCounter((prev)=> prev + Number(amount));
    // setCounter((prev)=> prev + parseInt(amount));
    // setCounter((prev)=> prev + parseFloat(amount));
    };

    function handleAdd(){
        setCounter((prev)=> prev + 10);
    }

    function handleMenos(){
        setCounter((prev)=> prev - 10);
    }

  {
    /**
     * Criar um botão que ao clicar nele vai ser ADICIONADO o valor de 10
     * ao counter
     * Criar um botão que ao clicar vai ser REMOVIDO o valor de 10 do counter
     */
  }
  return (
    <>
      <h2 className="text-xl gap-2 flex">UseState</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="px-2 py-1 border bg-sky-800 rounded text-white" onClick={handleAmount}>
          Enviar
        </button>
      </div>

      <div>
        <button className="px-2 py-1 border bg-sky-800 rounded text-white" onClick={handleAdd}>
          +10
        </button>
        <button className="px-2 py-1 border bg-sky-800 rounded text-white" onClick={handleMenos}>
          -10
        </button>
      </div>

      <div className="flex gap-2 items-center">
        <button className="text-xl flex" onClick={handleDecrease}>
          -
        </button>
        <p className="text-lg">{counter}</p>
        <button className="text-xl flex" onClick={handleIncrease}>
          +
        </button>
      </div>
      <button
        className="text-xl flex align-super border rounded-md px-10 py-1 solid bg-sky-400"
        onClick={handleZero}
      >
        Zerar Contador
      </button>

      <button className="px-2 py-1 border bg-sky-800 rounded text-white" onClick={handleAdd}>
          Modificar para 10
        </button>
        
        <Inputs/>
    </>
  );
}
