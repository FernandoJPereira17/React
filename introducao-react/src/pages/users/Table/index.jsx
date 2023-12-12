// import { useUsersTable } from "./hooks/useTable";

export function UserTable( {users, deleteUser} ){

    // const {users, deleteUser } = useUsersTable();

    return(
        <table>
            <thead>
            <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
            </tr>
            </thead>
            <tbody>
                {users.map((user)=>(
                <tr key={user.id}>
                     <td>{user.name}</td>
                     <td>{user.lastName}</td>
                     <td>
                        <button className="gap-3 border bottom-5 rounded-md bg-sky-900 shadow border-sky-900"
                                >Editar</button>
                         <button className="gap-3 border bottom-5 rounded-md bg-sky-900 shadow border-sky-900" 
                                onClick={()=> deleteUser(user.id)}>Excluir</button>
                     </td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

