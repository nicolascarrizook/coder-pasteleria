import './App.css';
import {NavBar} from "./Components/NavBar/NavBar";
import Container from '@mui/material/Container';
import { ItemListContainer } from './Components/ItemListContainer';
import { ItemCount } from './Components/ItemCount';

function App() {
  return (
    <Container>
      <NavBar/>
      <ItemListContainer greeting="Hola esto va a ser reemplazado por un catalogo"/> 
      <ItemCount initialCount = {1} stock = {5} />
    </Container>
  );
}

export default App;
