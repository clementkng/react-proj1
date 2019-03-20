import React from "react";

// let clicked = 0;
class Product extends React.Component {
	// this.props.limit as well
  constructor (props) {
    super(props)
    
    this.state = {
      clicked: 1,
    };

    this.addToCart = this.addToCart.bind(this);
  }
  // What argument needs to go in here?
  addToCart (limit) {
    // if (parseInt(this.props.limit) === 0) {
    //   alert("This item is out of stock!");
    // } else if (parseInt(this.props.limit) <= clicked) {
    //   alert("There are too many Apples in your cart!");
    // } else {
    //   clicked += 1;
    //   alert(`There are ${clicked} ${this.props.productName} in your cart!`);
    // }
    if (parseInt(this.props.limit) === 0) {
      alert("This item is out of stock!");
    } else if (this.props.limit < this.state.clicked) {
      alert(`There are too many ${this.props.productName} in your cart!`);
    } else {
      this.setState((state) => ({
        clicked : state.clicked + 1
      }));  
      alert(`There are ${this.state.clicked} ${this.props.productName} in your cart!`);
    }
  }
	render () {
		return (
			<div class="ui cards">
			  <div class="card">
			    <div class="content">
			      <div class="header">{this.props.productName}</div>
			      <div class="description">
			        Price: ${this.props.price}
			      </div>
			    </div>
			    <div class="ui bottom attached button" 
            onClick={() => this.addToCart(this.props.limit)}>
			      <i class="add icon"></i>
			      Add To Cart
			    </div>
			  </div>
			</div>
		)
	}	
}

export default Product;
