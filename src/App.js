
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/NavbarComponent';
import Newsboard from './Components/Newsboard';
import { useState } from 'react';

function App() {
  const [category, setCategory]=useState("general");
  return (
    <div>
      <NavbarComponent setCategory={setCategory}/>
      <Newsboard category={category} />
    </div>
  );
}

export default App;
