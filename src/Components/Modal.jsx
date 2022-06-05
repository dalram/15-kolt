import { useState } from "react";

function Modal({setEditData, modalData, setModalData}) {

    const [isBusy, setIsBusy] = useState('0');
    const [lastUseTime, setLastUseTime] = useState('');
    const [distance, setDistance] = useState(0);

    if (null === modalData) {
        return null;
    }
    const handleEdit = () => {

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
                        <input type="checkbox" />
                        </div>
                        <div className="formGroup">
                        <small>Last time used</small>
                        <input type="datetime-local" />
                        </div>
                        <div className="formGroup">
                        <small>Scooters mileages</small>
                        <input type="text" />
                        </div>
                        <div className="formGroup">
                        <small>Traveled distance today</small>
                        <input type="text" />
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