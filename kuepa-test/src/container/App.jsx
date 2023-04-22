import { BrowserRouter, Routes, Route  } from "react-router-dom";

import CreateUser from "../components/createUser";
import InicioSesion from "../components/inicioSesion";
import Home from "../components/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/login" Component={InicioSesion} />
          <Route exact path="/register" Component={CreateUser} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
