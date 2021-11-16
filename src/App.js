import React, { useState } from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Components/Home/Home";
import { InicioSesion } from "./Components/InicioSesion/InicioSesion";
import Rommie from "./Components/Rommies/Rommie";
import { Chat } from "./Components/Chat/Chat";
import {Viviendas} from "./Components/Viviendas/Viviendas";
import { Registrar } from "./Components/Registrar/Registrar";
import { EditarPerfil} from "./Components/EditarPerfil/EditarPerfil";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <InicioSesion setIsLogged={setIsLogged} />
        </Route>
        <Route path="/roomies">
          <Rommie isLogged={isLogged} />
        </Route>
        <Route path="/chat">
          <Chat isLogged={isLogged} />
        </Route>
        <Route path="/viviendas">
          <Viviendas/>
        </Route>
        <Route path="/registrar">
          <Registrar/>
        </Route>
        <Route path="/editarPerfil">
          <EditarPerfil isLogged={isLogged} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
