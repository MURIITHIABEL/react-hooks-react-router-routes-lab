import React from "react";
import { movies } from "../data";

function Movies() {

  const movieList = movies.map((movie)=>(
    <div key={movie.title} >
      <h2>{movie.title}</h2>
      <h3>time: {movie.time} </h3>
      <h3>Genres:</h3>
      <ul>
        {movie.genres.map((genre)=>(
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ))
  

  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  )
}

export default Movies;
