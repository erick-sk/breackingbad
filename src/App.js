import React, { useState } from 'react';
import styled from '@emotion/styled';
import Phase from './components/Phrase';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  border: 2px solid black;

  &:hover {
    cursor: pointer;
  }
`;

function App() {
  // state phrases
  const [phrase, getPhrase] = useState({});

  const requestAPI = async () => {
    const api = await fetch(
      'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
    );
    const phrase = await api.json();
    getPhrase(phrase[0]); /* (phrase[0]) 0 aoumnt phrases */

    // const phrase = api.then( reply => reply.json());
    // phrase.then(result => console.log(result));
  };

  return (
    <Container>
      <Phase phrase={phrase} />
      <Button onClick={requestAPI /* () => requestAPI() or requestAPI() */}>
        Get Quote
      </Button>
    </Container>
  );
}

export default App;
