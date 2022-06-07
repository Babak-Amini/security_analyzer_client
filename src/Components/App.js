import React, {useState, useEffect} from 'react';
import TopBar from './TopBar/TopBar';
// import SearchBar from './SearchBar/SearchBar';
import SpyTable from './SpyTable/SpyTable';
import StockTable from './StockTable/StockTable';
import './App.css';

const App = () => {
    const [spy, setSpy] = useState([]);
    const [ticker, setTicker] = useState({prior: '', current: ''});
    const [stock, setStock] = useState({});
    
    useEffect(() => {
        fetch(`https://saaquery.herokuapp.com/getSpy`).then(res => res.json()).then(data => {
           setSpy(data);
        })
    }, [])

    return <div>
        <TopBar />
        {/* <SearchBar /> */}
        <div className='tableFlex'>
            <StockTable stock={stock} />
            <SpyTable spy={spy} ticker={ticker} setTicker={setTicker} setStock={setStock} />
        </div>
    </div>
}

export default App;