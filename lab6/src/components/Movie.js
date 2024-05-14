import React from 'react';
import { Button } from 'react-bootstrap';
import deleteIcon from '../images/delete.png';
import starIcon from '../images/star.png';

export const Movie = ({ movie, deleteMovie }) => {
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<img src={starIcon} alt="star" key={i} style={{ width: '20px', height: '20px' }} />);
    }
    return stars;
  };

  return (
    <div className="Movie">
      <p>{movie.title}</p>
      <p>Rating: {renderStars(movie.rating)}</p>
      <Button variant="link" onClick={() => deleteMovie(movie.id)}>
        <img src={deleteIcon} alt="delete" style={{ width: '20px', height: '20px' }} />
      </Button>
    </div>
  );
};