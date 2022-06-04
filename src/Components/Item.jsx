function Item({scooter, setDeleteData}) {
    const handleDelete = () => {
        setDeleteData(scooter);
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
                    <button>Edit</button>
                    <button className='red-button' onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </li>
        </>
    )
}
export default Item;