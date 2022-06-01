import { useEffect, useState } from 'react';
import './App.scss';
import Create from './Components/Create';
import List from './Components/List';
import getRegCode from './Functions/getRegCode';
import { create } from './Functions/localStorage';


function App() {
  const [createData, setCreateData] = useState(null);
  
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(createData);


  }, [createData])
  
  return (
    <div className="App">
      <h1>Kolt scooters administration app</h1>
      <div className='container'>
        <div className='create-box'>
          <div className='create-header'>
            <h2>Create new scooter</h2>
          </div>
          <Create setCreateData={setCreateData}></Create>
          {/* <div className='create-form'>
            <span>Scooters registration code</span>
            <input type="text" value={getRegCode()} onChange={e => setRegCode(e.target.value)}/>
            <fieldset>
              <legend>Availability</legend>
              <span>Free</span>
              <input type="checkbox" checked='free' onClick={() => setCb('free')}/>
              <span>Busy</span>
              <input type="checkbox" checked='' onClick={() => setCb('free')}/>
            </fieldset>
            <button className='addButton' onClick={addScooter}>Add scooter</button>
          </div> */}
        </div>
          <div className='list-box'>
            <List></List>
        </div>
      </div>
      {/* Modal langas turi buti atvaizduojamas paspaudus 'Redaguoti' ant paspirtuko. */}
    </div>
  );
}

export default App;
