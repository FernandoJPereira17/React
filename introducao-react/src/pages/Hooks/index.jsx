import { useState } from "react";

export default function Hooks(){
    const [counter, setCounter] = useState(0);

    function handleIncrease(){
        setCounter((prev)=> prev + 1);
    }

    function handleDecrease(){
        setCounter((prev)=> prev - 1);
    }
    function handleZero(){
        setCounter(0)
    }

    return (
        <>
        <h2>UseState</h2>
        <div className="flex gap-2 items-center">
            <button className="text-xl" onClick={handleDecrease}>-</button>
            <p>{counter}</p>
            <button className="text-xl" onClick={handleIncrease}>+</button>
            <button className="text-xl flex" onClick={handleZero}>Iniciar</button>
        </div>
        </>
    );
}
