import './App.css';
import { NavBar } from "./Components/NavBar/NavBar";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import { ItemListContainer } from './Components/ItemListContainer';
import { ItemCount } from './Components/ItemCount';
import React, { useState } from 'react';
import { ItemList } from './Components/ItemList';
import { About } from './Components/pages/About';
import { CartWidget } from './Components/NavBar/CartWidget';

function App() {

  return (
    <BrowserRouter>
      <Container>
        <NavBar />
        {/* <ItemListContainer greeting="Hola esto va a ser reemplazado por un catalogo" />
         */}
         {/* <ItemListContainer /> */}
         <Route path="/about" exact component={About} />
        <Route path="/productos" exact component={ItemListContainer} />
        <Route path="/cart-details" exact component={CartWidget} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
