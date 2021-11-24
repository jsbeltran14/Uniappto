import React, { useState } from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Components/Home/Home";
import { InicioSesion } from "./Components/InicioSesion/InicioSesion";
import Rommie from "./Components/Rommies/Rommie";
import { Chat } from "./Components/Chat/Chat";
import { Viviendas } from "./Components/Viviendas/Viviendas";
import { Registrar } from "./Components/Registrar/Registrar";
import { EditarPerfil} from "./Components/EditarPerfil/EditarPerfil";
import { Favoritos} from "./Components/Favoritos/Favoritos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [isLogged, handleIsLogged] = useState(false);

  return (
    <Router>
      <Navbar isLogged={isLogged} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <InicioSesion handleIsLogged={handleIsLogged} />
        </Route>
        <Route path="/roomies">
          <Rommie handleIsLogged={handleIsLogged} />
        </Route>
        <Route path="/chat">
          <Chat handleIsLogged={handleIsLogged} />
        </Route>
        <Route path="/viviendas">
          <Viviendas handleIsLogged={handleIsLogged} />
        </Route>
        <Route path="/registrar">
          <Registrar />
        </Route>
        <Route path="/editarPerfil">
          <EditarPerfil handleIsLogged={handleIsLogged} />
        </Route>
        <Route path="/favoritos">
          <Favoritos handleIsLogged={handleIsLogged}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
