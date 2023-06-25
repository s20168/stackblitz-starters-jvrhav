// @flow
import React, { SyntheticEvent, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

type Props = {};

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
};

function App(props: Props) {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const submitInfo = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(
      `Imię: ${firstName}, Nazwisko: ${lastName}, Adres e-mail: ${email}`
    );
  };

  return (
    <Form onSubmit={submitInfo}>
      <Form.Group controlId="firstName">
        <Form.Label>Imię: </Form.Label>
        <Form.Control
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="lastName">
        <Form.Label>Nazwisko: </Form.Label>
        <Form.Control
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Adres e-mail: </Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Zarejestruj się
      </Button>
    </Form>
  );
}

export default App;
