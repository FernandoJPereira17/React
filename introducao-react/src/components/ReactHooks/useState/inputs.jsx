import { useDebugValue, useEffect, useState } from "react";

export function Inputs() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    celular: "",
    email: "",
    date:"",
  });

  function handleInput(e){
    setUser((prev)=> {
        return {
            ...prev, [e.target.name]: e.target.value };
    });
  }

  useEffect(()=>{
    console.log(user);

  },[user.name, user.lastName]);

//   function handleName(e) {
//     setName(e.target.value);
//   }

//   function handleLastName(e) {
//     setLastName(e.target.value)
//   }

function handleDateShow(value){
    const date = new Date (value).toLocaleDateString("pt-br", {
       dateStyle: "short",
       hour12:false,
       timeZone:"UTC", 
    });
        return date;
}

  return (
    <>
      <h2>Lidando com Inputs no React com useState</h2>

      <div className="flex flex-col gap-2">
        <input
          className=" px-2 py-1 border border-black rounded-md outline-none"
          type="text"
          name="name"
          placeholder="Nome"
          value={user.name}
          onChange={handleInput}
        //   onChange={(e) => setName(e.target.value)}
        />
        <input
          className=" px-2 py-1 border border-black rounded-md outline-none"
          type="text"
          name="lastName"
          placeholder="Sobrenome"
          value={user.lastName}
          onChange={handleInput}
        //   onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className=" px-2 py-1 border border-black rounded-md outline-none"
          type="tel"
          name="celular"
          placeholder="Celular"
          value={user.celular}
          onChange={handleInput}
        //   onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className=" px-2 py-1 border border-black rounded-md outline-none"
          type="email"
          name="email"
          placeholder="E-mail"
          value={user.email}
          onChange={handleInput}
        //   onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className=" px-2 py-1 border border-black rounded-md outline-none"
          type="date"
          name="date"
          placeholder="Data Nascimento"
          value={user.date}
          onChange={handleDateShow}
        //   onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="gap-3">
        <p className="text-lg items-cente">Nome: {user.name}</p>
        <p className="text-lg items-center">Sobrenome:{user.lastName}</p>
        <p className="text-lg items-center">Celular:{user.celular}</p>
        <p className="text-lg items-center">E-mail:{user.email}</p>
        <p className="text-lg items-center">Data Nasc:{user.date ? handleDateShow(user.date) : ""}</p>
      </div>
    </>
  );
}

{
  /**
   * Salvar as informações dos respectivos inputs
   * criar uma div
   * dentro da div colocar 2 p's
   * em cada P rendenrizar um dos valores
   * <p>name</p>
   * <p>lastName</p>
   *
   */
}

