import { useEffect, useState } from 'react'
import './App.css'
import getData from './services/MealService'
import MenuList from './components/MenuList/MenuList';
import Navbar from './components/Navbar/Navbar';

function App() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('')
    const [sortMode, setSortMode] = useState('none')



    useEffect(() => {
        async function loadData() {
        try {
            const data = await getData(searchTerm); 
            setItems(data);
        } catch (err) {               
            setError(err.message);
        } finally {
            setIsLoading(false);
            }
        }
        loadData();
    },[searchTerm])

    const handleSort = () => setSortMode((prev) => prev === 'none' ? 'asc' : prev === 'asc' ? 'desc' : 'none')

    const displayedItems = [...items].sort((a, b) => {
        if (sortMode === 'asc') return a.price - b.price
        if (sortMode === 'desc') return b.price - a.price
        return 0
    })

    return (
        <div id='mainContainer'>
            <Navbar onSearchChange={setSearchTerm} onSort={handleSort} sortMode={sortMode}/>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!isLoading && !error && (
                <MenuList items={displayedItems} searchTerm={searchTerm}/>
            )}
        </div>
    )
}

export default App
