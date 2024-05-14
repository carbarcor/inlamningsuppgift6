import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export const MovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && rating) {
      addMovie({ title, rating });
      setTitle('');
      setRating('');
    } else {
      alert("Var god ange både titel och betyg.");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="MovieForm">
      <h2>Lägg till en film</h2>
      <Form.Group>
        <Form.Label>Titel:</Form.Label>
        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titel här..." />
      </Form.Group>
      <Form.Group>
        <Form.Label>Betyg:</Form.Label>
        <Form.Control as="select" value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">Välj betyg här...</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button type="submit" className="movie-btn" variant="success">Spara film</Button>
    </Form>
  );
};
