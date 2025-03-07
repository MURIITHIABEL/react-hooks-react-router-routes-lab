import React from "react";
import { directors } from "../data";

function Directors() {
  
  const getDirectors = directors.map((director)=>(
    <div key={director.name}>
      <h1>Name: {director.name}</h1>
      <h3>movies:</h3>
      <ul>
        {director.movies.map((movie)=>(
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  
  
  return (
    <div>
      <h1>Directors Page</h1>
      {getDirectors}
    </div>
  )
}

export default Directors;