import { useState } from 'react';
import './App.css';
import Scooters from './Components/Scooters';
import getRegCode from './Functions/getRegCode';


function App() {
  const [regCode, setRegCode] = useState('');
  const [scooter, setScooter] = useState(null);

  const addScooter = () => {
        setScooter(scooter => scooter === null ? [getRegCode()]: [...scooter, getRegCode()]);
  }
  console.log(scooter);
  return (
    <div className="App">
      <div className='create-box'>
        <div className='create-header'>
          <h2>Create new scooter</h2>
        </div>
        <label>New scooter registration code</label>
        <input type="text" value={regCode} onChange={e => setRegCode(e.target.value)}/>
        <button onClick={addScooter}>Add scooter</button>
      </div>
      <div className='list-box'>
      
      </div>
      {/* Modal langas turi buti atvaizduojamas paspaudus 'Redaguoti' ant paspirtuko. */}
    </div>
  );
}

export default App;
