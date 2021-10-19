import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import CoinRow from './components/CoinRow';



function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

    const handleSearch = (e) =>{
      setSearch(e.target.value)
    }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
    }).catch(error => console.error(error))
  },[]);


  return (
    <div className="app">
      <h1 className="app-text">Search a currency</h1>
      <form>
            <input className="search-input" type="text" placeholder="Search" value={search} onChange={handleSearch}/>
        </form>
        {filteredCoins.map(coin =>{
          return(
            <CoinRow 
            key={coin.id} 
            name={coin.name} 
            price={coin.current_price}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}/>
          )
        })}
    </div>
  );
}

export default App;
