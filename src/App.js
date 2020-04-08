import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase'

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  outline: none;
  transition: background-size 0.3s ease;
  
  &:hover {
    cursor: pointer;
    background-size: 400px;
  }
`

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;
`;

function App() {

  const [frase, setFrase] = useState({})

  const consultarAPI = () => {
    // Consultando una API con fetchAPI
    const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = api.then(respuesta => respuesta.json() )
    frase.then(resultado => setFrase(resultado[0]))
  }

  const consultarAPI2 = async () => {
    // Consultando con async/await
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = await api.json()
    setFrase(frase[0])
  }

  // Cargar una frase
  useEffect(() => {
    consultarAPI()
  }, [])

  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton
        onClick={() => consultarAPI2()}
      >
        Obtener frase
      </Boton>
    </Contenedor>
  );
}

export default App;
