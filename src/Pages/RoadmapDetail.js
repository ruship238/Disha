import React from "react"
import {useParams} from "react-router-dom"
import roads from '../roadmap/roads';
function RoadmapDetail(){
  const {topic} = useParams()
  const road = roads.filter(road=>road.name === topic)[0];
  if(!road) return null;
  const roadmapImg = require(`../assets/${road.name}.jpg`).default;
  return(
    <main className="wrapper">
      <h1>{road.name}</h1>
      <h3>{road.details}</h3>
      <img src={roadmapImg}></img>
    </main>
  )
}

export default  RoadmapDetail

/*
this will fetch data from backend and display roadmap of particular topic
*/
