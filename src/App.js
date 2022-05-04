import React from "react"
import {Switch, Route} from "react-router-dom"

import Homepage from "./Pages/Homepage"
import Header from "./Components/Header"
import Newlogin from "./newloginusingsawo/Newlogin"
import RoadmapDetail from "./Pages/Roadmapdetail"
import "./styles.css";

export default function App() {
  require('dotenv').config()
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route  path="/" component={Homepage} exact/>
        <Route path="/login" component={Newlogin}/>
          <Route path="/:topic" component={RoadmapDetail}/>
      </Switch>
    </div>
  );
}
