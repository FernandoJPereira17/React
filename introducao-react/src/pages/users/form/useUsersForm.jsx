import axios from "axios";
import { useState } from "react";

export function useUsersForm() {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
  });

  function handleUser(e) {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    createUser();
  }

  async function createUser() {
    const response = await axios.post(
      "https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users",

      user
    );
    console.log(response);
  }

  return { user, handleUser, handleSubmit };
}
