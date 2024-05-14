import React, { useState, useEffect } from 'react';
import { MovieForm } from './MovieForm';
import { v4 as uuidv4 } from 'uuid';
import { Movie } from './Movie';

export const MovieWrapperLocalStorage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    setMovies(savedMovies);
  }, []);

  const addMovie = (movie) => {
    const newMovies = [...movies, { id: uuidv4(), title: movie.title, rating: movie.rating }];
    setMovies(newMovies);
    localStorage.setItem('movies', JSON.stringify(newMovies));
  };

  const deleteMovie = (id) => {
    const newMovies = movies.filter((movie) => movie.id !== id);
    setMovies(newMovies);
    localStorage.setItem('movies', JSON.stringify(newMovies));
  };

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
