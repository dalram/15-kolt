import { useState } from "react";
import getRegCode from "../Functions/getRegCode";

function Create({ setCreateData }) {
  const [regCode, setRegCode] = useState(getRegCode());

  const addScooter = () => {
    const obj = {
      regCode,
      isBusy: 0,
      lastUseTime: "-",
      totalRideKilometres: 0,
    };
    setCreateData(obj);
    setRegCode(getRegCode());
  };
  return (
    <>
      <div className="create-form">
        <span>New scooter registration code</span>
        <input
          type="text"
          value={regCode}
          onChange={(e) => setRegCode(e.target.value)}
        />
        <button className="btn addButton" onClick={addScooter}>
          Add scooter
        </button>
      </div>
    </>
  );
}

export default Create;
