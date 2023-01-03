import React from "react"
import {Link} from "react-router-dom"

import "./homepage.css"
import RoadmapCard from "./../Components/RoadmapCard"
import roads from '../roadmap/roads';
function Homepage(){
  return(
    <>
      <section className="hero wrapper">
        <h1>Share your Learning Technique</h1>
        <p>Tell your journey and see what others have to face on there learning patch</p>
        <span>START TODAY</span>
        <div className="buttons">
          <button>Read</button>
          <button style={{backgroundColor:"blue",color:"white"}}>Create</button>
        </div>
      </section>
      <div className="about wrapper" id="#roadmap">
        <h1>Take a peek on different Roadmaps</h1>
        <div className="roadmap-block">
        {roads.map(road=><RoadmapCard key={road.id} road={road} />)}  
        </div>
      </div>
    </>
  )
}

export default Homepage
