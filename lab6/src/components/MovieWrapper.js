import React, { useState, useEffect } from 'react';
import { MovieForm } from './MovieForm';
import { v4 as uuidv4 } from 'uuid';
import { Movie } from './Movie';
import { Button } from 'react-bootstrap';

export const MovieWrapper = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    setMovies(savedMovies);
  }, []);

  const addMovie = (movie) => {
    const newMovies = [...movies, { id: uuidv4(), title: movie.title, rating: parseInt(movie.rating) }];
    setMovies(newMovies);
    localStorage.setItem('movies', JSON.stringify(newMovies));
  };

  const deleteMovie = (id) => {
    const newMovies = movies.filter((movie) => movie.id !== id);
    setMovies(newMovies);
    localStorage.setItem('movies', JSON.stringify(newMovies));
  };

  const sortMoviesByTitle = () => {
    const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    setMovies(sortedMovies);
    localStorage.setItem('movies', JSON.stringify(sortedMovies));
  };

  const sortMoviesByRating = () => {
    const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
    setMovies(sortedMovies);
    localStorage.setItem('movies', JSON.stringify(sortedMovies));
  };

  return (
    <div className="MovieWrapper">
      <h1>Min filmlista</h1>
      <MovieForm addMovie={addMovie} />
      <div className="sort-buttons d-flex justify-content-between mt-3">
        <Button variant="primary" onClick={sortMoviesByTitle}>Alfabetisk ordning</Button>
        <Button variant="secondary" onClick={sortMoviesByRating}>Betygsordning</Button>
      </div>
      <h2 className="mt-4">Inlagda filmer</h2>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} deleteMovie={deleteMovie} />
      ))}
    </div>
  );
};
