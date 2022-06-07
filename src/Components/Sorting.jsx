function Sorting({setSortType, sortType}) {
    return (
        <>
        <div className="sorting-container">
                    <label className="sorting-label">Sort scooters by</label>
                    <select className="sorting-form" onChange={e => setSortType(e.target.value)} value={sortType}>
                        <option value="1">Without sorting</option>
                        <option value="2">Distance traveled</option>
                        <option value="3">Used date</option>
                    </select>
        </div>
        </>
    )
}
export default Sorting;