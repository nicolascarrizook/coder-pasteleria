import './App.css';
import {NavBar} from "./Components/NavBar/NavBar";
import Container from '@mui/material/Container';
import { ItemListContainer } from './Components/ItemListContainer';
import { ItemCount } from './Components/ItemCount';
import React, { useState } from 'react';
import { ItemList } from './Components/ItemList';

function App() {

  return (
    <Container>
      <NavBar/>
      <ItemListContainer greeting="Hola esto va a ser reemplazado por un catalogo"/> 
    </Container>
  );
}

export default App;
