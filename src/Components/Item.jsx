function Item({scooter, setDeleteData, setModalData}) {
    const handleDelete = () => {
        setDeleteData(scooter);
    }

    const handleEdit = () => {
        setModalData(scooter);
    }
    return (
        <>
            <li>
                <div className='item'>
                    <div className='item-info'>
                       <p>Reg code: {scooter.regCode}</p> 
                       <p>Is busy: {scooter.isBusy}</p>
                       <p>Last use date: {scooter.lastTimeUsed}</p>
                       <p>Total ride distance: {scooter.totalRideKilometres}</p>
                    </div>
                    <div className='item-buttons'>
                    <button className="btn" onClick={handleEdit}>Edit</button>
                    <button className='btn red-button' onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </li>
        </>
    )
}
export default Item;