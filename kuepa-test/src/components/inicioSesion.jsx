import axios from "axios";
import { useEffect, useState } from "react";
import VideoClass from "./video";

import "../styles/login.css";

const InicioSesion = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [typeUser, setTypeUser] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [, setCurrentUser] = useState(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user");
        setIsLoggedIn(true);
        setCurrentUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getCurrentUser();
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/iniciosesion", {
        username,
        password,
      });
      setIsLoggedIn(true);
      setCurrentUser(response.data);
    } catch (error) {
      setErrorMessage(error.response.data);
    }
  };

  /*const response = await fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      alert("Login!")
    } else {
      alert("Invalid username or password");
    }*/

  return (
    <>
      {isLoggedIn ? (
        <div>
          <div className="container info">
            <p className="userName">Welcome, {username} !</p>
            <p className="rol">Tú eres: {typeUser}</p>
          </div>

          {<VideoClass />}
        </div>
      ) : (
        <>
          <div className="container containerAllCreate">
            <h1 className="nameCompany">Kuepa</h1>
            <form onSubmit={handleLogin} className="submitUser">
              <label>
                User Name:
                <br />
                <input
                  type="text"
                  placeholder="User"
                  value={username}
                  onChange={(event) => setUserName(event.target.value)}
                />
              </label>
              <label>
                Password:
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>
              <label>
                Type User:
                <br />
                <input
                  type="text"
                  placeholder="I am: "
                  value={typeUser}
                  onChange={(event) => setTypeUser(event.target.value)}
                />
              </label>
              <button type="submit">Login</button>
              {errorMessage && <div>{errorMessage}</div>}
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default InicioSesion;
