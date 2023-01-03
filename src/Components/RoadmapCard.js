import React from "react"
import "./roadmapcard.css"
import {useHistory} from "react-router-dom"

function RoadmapCard({road}){
  console.log(road)
  const history= useHistory();
  return(
    <div className="roadmap-card" onClick={()=>{history.push(`/${road.name}`)}}>
      <h3 className="roadmap-card__heading">{road.name}</h3>
      <p className="roadmap-card__paragraph"> {road.details}
      </p>
    </div>
  )
}

export default RoadmapCard
