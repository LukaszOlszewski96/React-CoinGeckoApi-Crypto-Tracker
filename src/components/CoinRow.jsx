import React from 'react';
import '../styles/CoinRow.css';

const CoinRow = ({image, name, symbol, price, volume, priceChange, marketCap}) => {
    return (
        <div className='coin-conteiner'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='crypto'/>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>{price} PLN</p>
                    <p className='coin-volume'>{volume.toLocaleString()} PLN</p>
                    {priceChange < 0 ? (
                        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                    )}
                    <p className="coin-marketcap">
                        Mkt Cap: {marketCap.toLocaleString()} PLN
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CoinRow
