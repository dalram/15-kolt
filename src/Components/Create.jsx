import { useState } from "react";
import getRegCode from "../Functions/getRegCode";

function Create({setCreateData}) {
    const [regCode, setRegCode] = useState(getRegCode());
    const [available, setavailable] = useState('False');
    const addScooter = () => {
        const obj = {regCode, available, lastTimeUsed: 'Still not used', totalRideKilometres: 0}
        setCreateData(obj);
        setRegCode(getRegCode());
  }
    return (
        <>
         <div className='create-form'>
            <span>New scooter registration code</span>
            <input type="text" value={regCode} onChange={e => setRegCode(e.target.value)}/>
            <fieldset>
              <legend>Availability</legend>
              <span>Free</span>
              <input type="checkbox" checked={available} onChange={() => setavailable(available)}/>
              <span>Busy</span>
              <input type="checkbox" checked='' onChange={() => setavailable(available)}/>
            </fieldset>
            <button className='addButton' onClick={addScooter}>Add scooter</button>
          </div>
        </>
    );
}

export default Create;