import Item from "./Item";

function List({scooters, setDeleteData}) {

    

    return (
        <>
            <div className='items'>
              <div className="list-header">
                <h2>Scooters List</h2>
              </div>
              <div className="item-body">
                <ul className="items-group">
                  {
                      scooters === null ? null : scooters.map(scooter => <Item scooter={scooter} key={scooter.id} setDeleteData={setDeleteData}></Item>)
                  }
                  
                </ul>
              </div>
            </div>
        </>
    )
}
export default List;