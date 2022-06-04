function Item({scooter}) {
    return (
        <>
            <li>
                <div className='item'>
                    <div className='item-info'>
                       <p>{scooter.regCode}</p> 
                       <p>Is busy: {scooter.available}</p>
                       <p>Last use date: {scooter.lastTimeUsed}</p>
                       <p>Total ride distance: {scooter.totalRideKilometres}</p>
                    </div>
                    <div className='item-buttons'>
                    <button>Edit</button>
                    <button className='red-button'>Delete</button>
                    </div>
                </div>
            </li>
        </>
    )
}
export default Item;