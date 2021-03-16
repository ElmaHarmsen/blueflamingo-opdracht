import './SingleProduct.scss';
import React from 'react';

function SingleProduct(props) {

  return (
    <div className="singleProduct">
      <img className="singleProduct__img" src={props.singleProductData.productImage.url}></img>
      <div className="singleProduct__text">
        <h1 className="singleProduct__name">{props.singleProductData.name}</h1>
        <p className="singleProduct__description-short">{props.singleProductData.shortDescription}</p>
        <h2>€{props.singleProductData.offers[0].priceHistory[0].price.value}</h2>
        <div className="singleProduct__more-and-link">
          <h2>Meer weten?</h2>
          <a className="singleProduct__link" href={props.singleProductData.offers[0].productUrl} target="blank">
            Klik hier!
          </a>        
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;