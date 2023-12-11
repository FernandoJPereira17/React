import { useEffect, useState } from "react";
import axios from "axios";
import { Form } from "../../../pages/users/form";

export function UseEffectComponent() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: "",
    lastName: "",
  });

  

  async function fetchAllUsers() {
    const response = await axios.get(
      "https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users"
    );
    
    setUsers(response.data);
  }

  
  useEffect(() => {
    fetchAllUsers();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
      <div className="border-t mt-2 border-black">
        <h2>Lidando com o UserEffect</h2>

      </div>
    </>
  );
}

//https://dontpad.com/fs-22-react
//https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users
