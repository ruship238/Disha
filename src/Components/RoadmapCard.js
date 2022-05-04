import React from "react"
import "./roadmapcard.css"
import {useHistory} from "react-router-dom"

function RoadmapCard(props){
  const history= useHistory();
  return(
    <div className="roadmap-card" onClick={()=>{history.push(`/${props.children}`)}}>
      <h3 className="roadmap-card__heading">{props.children}</h3>
      <p className="roadmap-card__paragraph"> Lorem ipsum dolor sit amet,
      consectetur adipiscinit, sed do eiusmod tempor
      </p>
    </div>
  )
}

export default RoadmapCard
