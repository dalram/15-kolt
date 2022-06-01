import Item from "./Item";

function List() {

    

    return (
        <>
            <div className='items'>
              <div className="list-header">
                <h2>Scooters List</h2>
              </div>
              <div className="item-body">
                <ul className="items-group">
                  {
                      <Item></Item>
                  }
                  
                </ul>
              </div>
            </div>
        </>
    )
}
export default List;