import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Components/Home/Home";
import { InicioSesion } from "./Components/InicioSesion/InicioSesion";
import { Rommie } from "./Components/Rommies/Rommie";
import { Chat } from "./Components/Chat/Chat";
import { Viviendas } from "./Components/Viviendas/Viviendas";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <InicioSesion />
        </Route>
        <Route path="/roomies">
          <Rommie />
        </Route>
        <Route path="/chat">
          <Chat/>
        </Route>
        <Route path="/viviendas">
          <Viviendas/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
