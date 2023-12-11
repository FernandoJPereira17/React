import { useUsersForm } from "./useUsersForm";

export function Form (){
    const { user, handleUser, handleSubmit } = useUsersForm();
    return (
        <form
          onSubmit={handleSubmit}
          className="
            flex flex-col gap-2 
            px-4 py-3 border rounded-md 
            justify-center items-center bg-white shadow"
        >
          <div className="flex flex-col  gap-1 w-full">
            <label htmlFor="name"> Nome </label>
            <input
              className="outline-none border border-black rounded  px-2 py-1"
              type="text"
              placeholder="Seu nome aqui"
              id="name"
              name="name"
              onChange={handleUser}
              value={user.name}
            />
          </div>
          <div className="flex flex-col  gap-1 w-full">
            <label htmlFor="lastname"> Sobrenome </label>
            <input
              className="outline-none border border-black rounded  px-2 py-1"
              type="text"
              placeholder="Seu nome aqui"
              id="lastName"
              name="lastName"
              onChange={handleUser}
              value={user.lastName}
            />
          </div>
          <button
            className="
            w-full h-10 flex border 
            rounded-md shadow justify-center 
            items-center text-white bg-sky-950 cursor-pointer"
          >
            Enviar
          </button>
        </form>
    );
}
