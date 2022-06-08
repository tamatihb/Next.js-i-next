import React, {useState, useEffect} from 'react';


// dependencies
import axios from 'axios';

// Components
import Coin from "../../components/crypto/coin";


function SearchBar() {
    const [coins, setCoins ] = useState([])
    const [search, setSearch] = useState('')
    

    // api key
    // https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=20&page=1&sparkline=false
    useEffect(() => {
      axios
        .get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        )
        .then(res => {
          setCoins(res.data);
          console.log(res.data);
        })
        .catch(error => console.log(error));
    }, []);
    // using axios to implement a error catch statement.
  
    const handleChange = e => {
      setSearch(e.target.value);
      // handle change event on the search function targeting the value of whats typed.
    };
  
    const filteredCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
      // filtering the coins when searched so lower case is enabled
    );
  
  
  
    return (
     
      <div className='coin-SearchBar '>
        <div className='coin-search '>
          <br/>
          <form className="Search mx-auto ml-10  sm:px-8 py-8 ">
            <input
              className='coin-input mx-auto  outline outline-offset-2 outline-2 rounded rounded-br-extraLarge '
              type='text'
              onChange={handleChange}
              placeholder='Search'
            />
          </form>
        </div>
        {filteredCoins.map(coin => {
          // coin.id is the id:
          // coin.name = name of coins
          // coin.current_price
              //.symbol
              // .total_volume
              // .market_cap
              // .image
              //  - look at documents -https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false
          return (
       
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              // want to add the price change for the 24 hours and percentage
              />  
  
          );
        })}
      </div>
   
    );
  
  }
  

  

export default SearchBar
