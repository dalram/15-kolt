import { useState } from "react";
import getRegCode from "../Functions/getRegCode";

function Create({setCreateData}) {
    const [regCode, setRegCode] = useState(getRegCode());
    const [available, setavailable] = useState('free');
    const addScooter = () => {
        const obj = {regCode, available}
        setCreateData(obj);
        setRegCode(getRegCode());
  }
    return (
        <>
         <div className='create-form'>
            <span>Scooters registration code</span>
            <input type="text" value={regCode} onChange={e => setRegCode(e.target.value)}/>
            <fieldset>
              <legend>Availability</legend>
              <span>Free</span>
              <input type="checkbox" checked={available} onClick={() => setavailable(available)}/>
              <span>Busy</span>
              <input type="checkbox" checked='' onClick={() => setavailable(available)}/>
            </fieldset>
            <button className='addButton' onClick={addScooter}>Add scooter</button>
          </div>
        </>
    );
}

export default Create;