import { userUsers } from "../../../hooks/useUsers";
import { UserTable } from "../../users/Table";
import { Form } from "../../users/form";

export default function UsersPage(){

    const { user, users, deleteUser, handleSubmit, handleUser } = userUsers();

    return ( 
    <>
    <h1>Página de usuários</h1>
    <Form handleSubmit={handleSubmit} handleUser={handleUser} user={user} />
    <UserTable deleteUser={deleteUser} users={users} />
    </>

    );
}

