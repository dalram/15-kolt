import Item from "./Item";
import ScootersData from "./ScootersData";

function List({scooters, setDeleteData, setModalData}) {

    

    return (
        <>
            <div className='items'>
                <ScootersData scooters={scooters}></ScootersData>
              <div className="list-header">
                <h2>Scooters List</h2>
              </div>
              <div className="item-body">
                <ul className="items-group">
                  {
                      scooters === null ? null : scooters.map(scooter => <Item scooter={scooter} key={scooter.id} setDeleteData={setDeleteData} setModalData={setModalData}></Item>)
                  }
                  
                </ul>
              </div>
            </div>
        </>
    )
}
export default List;