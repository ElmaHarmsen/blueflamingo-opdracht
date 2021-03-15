import logo from './assets/logo.svg';
import flamingo from './assets/flamingo.png';
import './assets/reset.css';
import './assets/global.scss';
import './assets/fonts.css';
import './App.scss';
import React, { useState, useEffect } from 'react';
import SingleProduct from './components/SingleProduct.js';

function App() {
  const [productItems, setProducts] = useState("");

  async function fetchData() {
    const rawData = await fetch("https://api.tradedoubler.com/1.0/products.json;page=1;pageSize=100;fid=23056?token=26A8CEEC9833CED128CAC91910344740632FBC93", {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const jsonData = await rawData.json();
    setProducts(jsonData);
    console.log(jsonData)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App__header">
        <img className="Header__flamingo" src={flamingo} />
        <h1>Welkom bij de Blue Flamingos opdracht!</h1>
        <img className="Header__flamingo" src={flamingo} />
      </header>
      <div className="App__products-container">
        {productItems.productHeader ? <h2 className="Products__summary">100 van {productItems.productHeader.totalHits} producten uit MediaMarkt:</h2> : <h2>loading</h2>} 
        <div className="App__products-loop">
          {productItems.products && productItems.products.length ? (
            productItems.products.map((productItem) => {
              return <SingleProduct key={productItem.name} singleProductData = {productItem} />
            })) : <h2>loading</h2>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
