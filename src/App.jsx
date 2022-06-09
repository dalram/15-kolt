import { useEffect, useState } from 'react';
import './App.scss';
import Create from './Components/Create';
import List from './Components/List';
import Modal from './Components/Modal';
import ScootersData from './Components/ScootersData';
import Sorting from './Components/Sorting';
// import getRegCode from './Functions/getRegCode';
import { create, edit, read, remove} from './Functions/localStorage';


function App() {
  const [createData, setCreateData] = useState(null);
  const [scooters, setScooters] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [sortType, setSortType] = useState('1');
  useEffect(() => {
    // scootersSort(localStorage.getItem('scooters-sort'));
    localStorage.getItem('scooters-sort') ? setSortType(localStorage.getItem('scooters-sort')): setSortType('1');
  }, [])
  // sukuriam data masyva localeStorage spausdami Add Scooter button
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(createData);
    setLastUpdate(Date.now());


  }, [createData])

  // perduodam localStorage masyva su funkcija read naudodami UseEffect i setScooters kurios pagalba veliau ismapinam si masyva i Scooters List`a. Cia yra Read use effectas.
  useEffect(() =>{
      setScooters(read());
   }, [lastUpdate]); 

//  delete useEffect

useEffect(() =>{
  if (deleteData === null) {
    return;
  }
  remove(deleteData);
  setLastUpdate(Date.now());

}, [deleteData]);

// Modalo funkcionalumas
useEffect(() =>{
  if (editData === null) {
    return;
  }
  edit(editData);
  setLastUpdate(Date.now());

}, [editData]);


  return (
    <div className="App">
      <h1>Kolt scooters administration app</h1>
      <div className='container'>
        <div className='create-box'>
          <div className='create-header'>
            <h2>Create new scooter</h2>
          </div>
          <Create setCreateData={setCreateData}></Create>
          <ScootersData scooters={scooters}/>
          <Sorting sortType={sortType} setSortType={setSortType}></Sorting>
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
            
            <List scooters={scooters} setDeleteData={setDeleteData} setModalData={setModalData} sortType={sortType}></List>
        </div>
      </div>
      {/* Modal langas turi buti atvaizduojamas paspaudus 'Redaguoti' ant paspirtuko. */}
      <Modal setEditData={setEditData} modalData={modalData} setModalData={setModalData}></Modal>
    </div>
  );
}

export default App;


// https://docs.google.com/document/d/18UPY3gFN-1xZ0okWMkFs8h2jESfgJDXKQ3-viMXBeS0/edit
