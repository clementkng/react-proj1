import React from "react";
import "./styles/cart.css";
import Product from "./Product.js";
import ReactDOM from "react-dom";
import ProductData from "./Data";
import Receipt from "./Receipt.jsx"

class Cart extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hello: 1,
      cartItems: []
    };

  }
  handleAddToCart(productName, price) {
    let arrcopy = [...this.state.cartItems];
    let i = 0;
    for ( ; i < arrcopy.length; i++) {
      if (arrcopy[i].productName === productName) {
        arrcopy[i].count++;
        this.setState({
          cartItems: arrcopy
        })
        break;
      }
    }

    if (i === arrcopy.length) {
      this.setState({
        cartItems: this.state.cartItems.concat(
          {
            productName: productName,
            price: price,
            count: 1
          })
      });
    }
  }
  handleRemoveFromCart(productName) {
    let arrcopy = [...this.state.cartItems];
    const newitems = arrcopy.filter(item => productName !== item.productName);
    this.setState({
      cartItems: newitems
    });
  }
  render() {
    return (
        <div className="page-content">
            <h2>Add your products here!</h2>
            {ProductData.products.map(p => 
              (<Product
                productName={p.name}
                price={p.cost}
                // Binding or passing arrow function
                onAddToCart={(productName, price) => this.handleAddToCart(productName, price)}
                onRemoveFromCart={(productName) => this.handleRemoveFromCart(productName)}
              />
              ),
            )}
            <Receipt
              items={this.state.cartItems} 
            />
        </div>
    );
  }

}

export default Cart;
// Todo: pass in props to products, fix spacing