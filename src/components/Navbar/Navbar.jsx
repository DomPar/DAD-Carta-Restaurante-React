import './Navbar.css'

const Navbar = ({ onSearchChange, onSort, sortMode }) => {
    const handleChange = (e) => onSearchChange(e.target.value)

    const sortLabel = sortMode === 'none' ? '$ ↑' : sortMode === 'asc' ? '$ ↓' : 'A'

    return (
        <div id='navbar'>
            <img src="./title.png" alt="" />
            <div id='sortSection'>
                <input type="text" placeholder='Search...' onChange={handleChange} />
                <button onClick={onSort}>{sortLabel}</button>
            </div>
        </div>
    ) 
}

export default Navbar
