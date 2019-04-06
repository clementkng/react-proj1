import React from "react";

// let clicked = 0;
class Product extends React.Component {
	// this.props.limit as well
  constructor (props) {
    super(props);

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
            onClick={() => {this.props.onAddToCart(this.props.productName, this.props.price)}}>
			      <i class="add icon"></i>
			      Add To Cart
			    </div>
          <div class="ui bottom attached button" 
            onClick={() => {this.props.onRemoveFromCart(this.props.productName)}}>
            <i class="remove icon"></i>
            Remove From Cart
          </div>
			  </div>
			</div>
		)
	}	
}

export default Product;
