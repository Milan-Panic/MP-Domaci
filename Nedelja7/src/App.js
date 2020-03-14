import React from 'react';
import './App.css';
import Vrapper from './componentsClass/Vrapper';
import Forma from './componentsFunct/Forma';
import Card from './componentsFunct/Card';


function App() {
  return (
    <>
      {/* <Vrapper/>   ZA KLASNE KOMPONENTE OTKOMENTARISATI*/}

      {/* FORMA I CARD KORISTITI ZA PRIKAZ FUNKCIOPNALNIH KOMPONENTI */}

      <Forma value="Klikni"></Forma>
      <Card link="https://picsum.photos/200" opis="Ovo je opis neke slike!"></Card>
    </>
  );
}

export default App;
