//Importerar Recat-bibliotek för att kunna använda Recat-Komponenter
import React from 'react';
//Importerar bilder för delete- och star-ikoner
import deleteIcon from '../images/delete.png';
import starIcon from '../images/star.png';

//Definerar en funktionell Komponet "Movie" som tar emot två props: movien och deleteMovie
export const Movie = ({ movie, deleteMovie }) => {
  //funktionen genererar stjärn-ikoner baserat på filmens betyg
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<img src={starIcon} alt="star" key={i} style={{ width: '20px', height: '20px' }} />);
    }
    return stars; //Returnerar arrayen med stjärn-ikkoner
  };
//Returnerar JSX som representerar en film i listan
  return (
    <div className="Movie d-flex align-items-center justify-content-between p-2 mb-2 bg-light border">
      <p className="mb-0">{movie.title}</p>
      <div className="d-flex align-items-center">
        {renderStars(movie.rating)}
        <img
          src={deleteIcon}
          alt="delete"
          onClick={() => deleteMovie(movie.id)}
          style={{ width: '20px', height: '20px', cursor: 'pointer', marginLeft: '10px' }}
        />
      </div>
    </div>
  );
};