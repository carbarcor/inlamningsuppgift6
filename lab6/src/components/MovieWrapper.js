import React, { useState } from 'react';
import { Movie } from './Movie';
import { MovieForm } from './MovieForm';
import { v4 as uuidv4 } from 'uuid';

export const MovieWrapper = () => {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([
      ...movies,
      { id: uuidv4(), title: movie.title, rating: movie.rating },
    ]);
  };

  const deleteMovie = (id) => setMovies(movies.filter((movie) => movie.id !== id));

  return (
    <div className="MovieWrapper">
      <h1>Movie List</h1>
      <MovieForm addMovie={addMovie} />
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} deleteMovie={deleteMovie} />
      ))}
    </div>
  );
};