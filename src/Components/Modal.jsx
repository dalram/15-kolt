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
                    <h2>Scooters regCode Editor</h2>
                </div>
                <div className="modalForm"></div>
                <form>Koregavimo forma</form>
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