import axios from "axios";
import { useEffect, useState } from "react";

export function userUsers() {
  const [users, setUsers] = useState([]);

  async function fetchUser() {
    const response = await axios.get(
      "https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users"
    );

    setUsers(response.data);
  }

  const [user, setUser] = useState({
    name: "",
    lastName: "",
  });

  async function deleteUser(id) {
    await axios.delete(
      `https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users/${id}`
    );
    await fetchUser();
  }

  function handleUser(e) {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

function clearFields(){
  user.name='';
  user.lastName='';
}

  function handleSubmit(e) {
    e.preventDefault();
    if (user.name.length > 2 && user.lastName.length >=3){
      createUser();
      clearFields();
      toast.success('Usuário criado com Sucesso!', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
          });
    }
  }

  async function createUser() {
    const response = await axios.post(
      "https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users",

      user
    );
    await fetchUser();
  }

  useEffect(() => {
    fetchUser();
    deleteUser();
  }, []);

  return { user, users, handleUser, handleSubmit, deleteUser };
}
