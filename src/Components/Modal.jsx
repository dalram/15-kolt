import { useEffect, useState } from "react";

function Modal({setEditData, modalData, setModalData}) {

    const [isBusy, setIsBusy] = useState(0);
    const [lastUseTime, setLastUseTime] = useState('');
    const [distance, setDistance] = useState("");
    useEffect(() => {
        if (null === modalData) {
            return;
        }
        setIsBusy(modalData.isBusy);
        setLastUseTime(modalData.lastUseTime);
        setDistance(modalData.totalRideKilometres);
    }, [modalData]);
    
    const handleEdit = () => {
        const data = {id: modalData.id, isBusy, lastUseTime, totalRideKilometres: modalData.totalRideKilometres + distance}
        setEditData(data);
        setModalData(null);
        setIsBusy(0);
        setLastUseTime('');
        setDistance('')
    }
    if (null === modalData) {
        return null;
    }

    return (
        <>
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                <button onClick={() => setModalData(null)}>X</button>
                </div>
                <div className="title">
                    <h2>Scooters {modalData.regCode} Editor</h2>
                </div>
                <div className="modalForm">
                    <form>
                        <div className="formGroup">
                            <small>Scooter registration code</small>
                            <input type="text" value={modalData.regCode} onChange={e => modalData.regCode}/>
                        </div>
                        <div className="formGroup">
                        <small>Is scooter busy</small>
                        <input type="checkbox" value={isBusy} onChange={e => isBusy === 0 ? setIsBusy('true') : setIsBusy('false')
                        }/>
                        </div>
                        <div className="formGroup">
                        <small>Last time used</small>
                        <input type="datetime-local" value={modalData.lastTimeUsed} onChange={e => setLastUseTime(e.target.value)}/>
                        </div>
                        <div className="formGroup">
                        <small>Update last used time</small>
                        <input type="datetime-local" value={lastUseTime} onChange={e => setLastUseTime(e.target.value)}/>
                        </div>
                        <div className="formGroup">
                        <small>Total ride kilometers</small>
                        <input type="number" value={modalData.totalRideKilometres} onChange={e => modalData.totalRideKilometres}/>
                        </div>
                        <div className="formGroup">
                        <small>Traveled distance today</small>
                        <input type="number" value={distance} onChange={e => setDistance(e.target.value)}/>
                        </div>

                        {/* visus inputus reik padaryt kontroliuojamus! */}
                    </form>
                </div>
                
                <div className="modalButtons">
                    <button onClick={handleEdit}>Save changes</button>
                    <button className="red-button" onClick={() => setModalData(null)}>Close</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Modal;