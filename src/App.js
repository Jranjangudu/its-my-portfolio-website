import React from "react";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./Allcomponents/Homes/Home";
import About from "./Allcomponents/Abouts/About";
import Navbar from "./Allcomponents/Navbar/Navbar";
import Skill from "./Allcomponents/Skills/Skill";
import Project from "./Allcomponents/Projects/Project";
import Contact from "./Allcomponents/Contacts/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/project" exact component={Project} />
          <Route path="/skill" exact component={Skill} />
          <Route path="/contact" exact component={Contact} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
