import axios from "axios";
import { useState } from "react";

import "../styles/createUser.css";

const CreateUser = () => {
  const [user, setUser] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [typeUser, setTypeUser] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/users", {
        user,
        username,
        password,
        typeUser,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="container containerAllCreate">
        <h1 className="nameCompany">Kuepa</h1>
        <form onSubmit={handleSubmit} className="createUser">
          <label>
            Name:
            <br />
            <input
              type="text"
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
          </label>
          <label>
            User Name:
            <br />
            <input
              type="text"
              value={username}
              onChange={(event) => setUserName(event.target.value)}
            />
          </label>
          <label>
            Password:
            <br />
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <label>
            Type User:
            <br />
            <input
              type="text"
              value={typeUser}
              onChange={(event) => setTypeUser(event.target.value)}
            />
          </label>
          <button type="submit" className="loginUser">Create User</button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
