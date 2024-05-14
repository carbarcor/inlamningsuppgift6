//Importerar Recat-biblioteket och hooks för att hantera tillstånd och effekter
import React, { useState, useEffect } from 'react';
//Importerar MovieForm-komponenten för att lägga till nya filmer
import { MovieForm } from './MovieForm';
//Importerar uuid för att skapa unika id:n för varje film
import { v4 as uuidv4 } from 'uuid';
//ImporterarMovie-Komponenten i syftet att visa varje film
import { Movie } from './Movie';
//Importerar Button-komponenten från react-bootstarp för stilrena knappar
import { Button } from 'react-bootstrap';

//Definierar en funktionell komponent "MovieWrapper"
export const MovieWrapper = () => {
  //Tillståndvariebel för att lagra listan av filmer
  const [movies, setMovies] = useState([]);

  //useEffect-hook som körs när komponenten först laddas
  useEffect(() => {
    //hämtar sparade filmer från localStorage och uppdaterar tillståndet
    const savedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    setMovies(savedMovies);
  }, []);

  //Funktion för att lägga till en ny film till listan
  const addMovie = (movie) => {
    //Skapar en ny film med unik id,titel och betyg
    const newMovies = [...movies, { id: uuidv4(), title: movie.title, rating: parseInt(movie.rating) }];
    //Uppdaterar tillståndet med den nya listan av filmer
    setMovies(newMovies);
    //Sparar den nya listan av filmer i localStorage
    localStorage.setItem('movies', JSON.stringify(newMovies));
  };

  //funktion som ta bort en film från listan
  const deleteMovie = (id) => {
    const newMovies = movies.filter((movie) => movie.id !== id);
    //Uppdaterar tillståndet med den nya listan av filmer
    setMovies(newMovies);
    //Sparar den nya listan av filmer i localStorage
    localStorage.setItem('movies', JSON.stringify(newMovies));
  };


  //Funktion för att sortera filmerna i alfabetiskt ordnig efter titel
  const sortMoviesByTitle = () => {
    //Sorterar kopian av listan av filmer efter titel
    const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    //updaterar tillståndet med den sorterade listan av filmer
    setMovies(sortedMovies);
    //Sparar den sorterade listan av filmer i localStorage
    localStorage.setItem('movies', JSON.stringify(sortedMovies));
  };

  //Funktion för att sortera filmerna efter betyg
  const sortMoviesByRating = () => {
    //Sorterar kopian av listan av filmer efter betyg (Högsta betyg fösrt)
    const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
    //Uppdaterar tillståndet med den sorterade listan av filmer
    setMovies(sortedMovies);
    //Sparar den sorterade listan av filmer i localStorage
    localStorage.setItem('movies', JSON.stringify(sortedMovies));
  };


  //Returnerar JSX som represneterar hela filmhanteringskomponenten
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
