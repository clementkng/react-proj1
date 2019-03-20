import React from "react";
import "./styles/cart.css";
import Product from "./Product.js";
import ReactDOM from "react-dom";
import ProductData from "./Data";

class Cart extends React.Component {
  render() {
  	function renderProduct() {
  		return (
        ProductData.products.map(p => 
          (<Product
            productName={p.name}
            price={p.cost}
            limit={p.stock}
          />
          ),
        )
  		);
	 }
    return (
        <div className="page-content">
            <h2>Add your products here!</h2>
            {renderProduct()}
        </div>
    );
  }

}

export default Cart;
// Todo: pass in props to products, fix spacing