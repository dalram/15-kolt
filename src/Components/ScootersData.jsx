function ScootersData({scooters}) {
    return (
        <>
            <div>
                <h2>Basic scooters data</h2>
                <ul>
                    <li>
                    <div className='item'>
                    <div className='item-info'>
                      <p>Count of scooters: {
                        scooters === null ? null : scooters.length
                        }</p>
                      <p>Count of kilometres traveled: {
                      scooters === null ? null : scooters.reduce((total, item) => (total + (+(+item.totalRideKilometres).toPrecision(4))), 0) 
                      }</p>
                      
                    </div>
                    </div>
                    
                    </li>
                </ul>
              </div>
        </>
    )
}

export default ScootersData;

// scooters === null ? null : scooters.reduce((total, item) => (total + +(+item.totalRideKilometres).toPrecision(4)), 0) 