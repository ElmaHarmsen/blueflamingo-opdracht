import './SingleProduct.scss';
import React from 'react';

function SingleProduct(props) {

  return (
    <div className="singleProduct">
      <img className="singleProduct__img" src={props.singleProductData.productImage.url}></img>
      <div>
        <h1 className="singleProduct__name">{props.singleProductData.name}</h1>
        <p className="singleProduct__description-short">{props.singleProductData.shortDescription}</p>
        {/* {props.singleProductData.offers.productHistory.price.value ? <h2>{props.singleProductData.offers.priceHistory.price.value}</h2> : <h2>Value not found</h2>} */}
      </div>
    </div>
  );
}

export default SingleProduct;