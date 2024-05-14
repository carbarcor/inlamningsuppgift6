import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export const MovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addMovie({ title, rating });
      setTitle('');
      setRating(1);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="MovieForm">
      <Form.Group>
        <Form.Label>Movie Title</Form.Label>
        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter movie title" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Rating</Form.Label>
        <Form.Control as="select" value={rating} onChange={(e) => setRating(e.target.value)}>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button type="submit" className="movie-btn">Add Movie</Button>
    </Form>
  );
};