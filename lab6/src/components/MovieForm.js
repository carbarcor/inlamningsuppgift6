//Importerar Recat-biblioteket och useState-hooken för att hantera komponentens tillstånd
import React, { useState } from 'react';
//Importerar Button och Form komponenter från react-bootstrap
import { Button, Form } from 'react-bootstrap';

//Komponenten "movieForm" defineras och tar emot en prop: addMovie
export const MovieForm = ({ addMovie }) => {
  //Definierar tillståndsvariebler för filmer titel ocg betyg
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  //Funktion som hanterar formulärets inlämning
  const handleSubmit = (e) => {
    e.preventDefault();//Förhindrar standarbeteendet att ladda om sidan
    if (title && rating) {
      ////anropar addMovie-funktionen med ett objekt innehällande titel och betyg
      addMovie({ title, rating });
      //Återställer formulärets fält efter att en film lagts till
      setTitle('');
      setRating('');
    } else {
      //visar en varning om antigen titel eller betyg saknas
      alert("Var god ange både titel och betyg.");
    }
  };
//Returnerar JSX som representerar formuläret för att lägga till en film
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
