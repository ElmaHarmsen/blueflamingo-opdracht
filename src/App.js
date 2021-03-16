import logo from './assets/logo.svg';
import flamingo from './assets/flamingo.svg';
import './assets/reset.css';
import './assets/global.scss';
import './assets/fonts.css';
import './App.scss';
import React, { useState, useEffect } from 'react';
import SingleProduct from './components/SingleProduct.js';
import cc from "classcat";

function App() {
  const [productItems, setProducts] = useState("");
  const [currentPage, setPage] = useState(1);
  const [currentPageSize, setPageSize] = useState(100);

  async function fetchData() {
    const rawData = await fetch(`https://api.tradedoubler.com/1.0/products.json;page=${currentPage};pageSize=${currentPageSize};fid=23056?token=26A8CEEC9833CED128CAC91910344740632FBC93`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const jsonData = await rawData.json();
    setProducts(jsonData);
  }

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    fetchData();
  }, [currentPageSize]);

  return (
    <div className="App">
      <header className="App__header">
        <h1>Welkom bij de Blue Flamingos opdracht!</h1>
        <img className="Header__flamingo" src={flamingo} />
      </header>
      {
        productItems.products && productItems.products.length ? (
          <div className="App__products-container">
            <h2 className="Products__summary">{currentPageSize} van {productItems.productHeader.totalHits} producten uit MediaMarkt:</h2>
            <div className="Products__pagination">
              {
                [...Array(50 + 1).keys()].slice(1) //OF: Math.ceil(productItems.productHeader.totalHits / 100), waarbij pagina 51 tot 139 leeg zijn.
                .map((pageItem) => {
                  return <h2 className={cc(["Pagination__number", currentPage === pageItem && "Number__active"])} onClick={() => setPage(pageItem)}>{pageItem}</h2>
                })
              }
            </div>
            <div className="App__page-size">
              <h2 className="Text__page-size">Aantal producten per pagina:</h2>
              <h2 className="Number__page-size" onClick={() => setPageSize(25)}>25</h2>
              <h2 className="Number__page-size" onClick={() => setPageSize(50)}>50</h2>
              <h2 className="Number__page-size" onClick={() => setPageSize(100)}>100</h2>
            </div>
            <div className="App__products-loop">
              {
                productItems.products.map((productItem) => {
                  return <SingleProduct key={productItem.name} singleProductData = {productItem} />
                })
              }
            </div>
          </div>
        ) : <h2>loading</h2>
      }
    </div>
  );
}

export default App;
