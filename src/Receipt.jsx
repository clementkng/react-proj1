import React from "react";

class Receipt extends React.Component {
  renderItem(item) {
    return (
      <div className="receipt-item" key={item.name}>
        <div className="receipt-text">
          {item.productName} x {item.count}
        </div>
        <div className="receipt-text">
          ${item.price*item.count}
        </div>
      </div>
    );
  }
  totalCost(items) {
    let cost = 0;
    for (let i = 0; i < items.length; i++) {
      cost += (items[i].count * items[i].price);
    }
    return cost.toFixed(2);
  }

  render() {
    // const items = [{ name: "Apple", price: 3 }, { name: "Banana", price: 3 }];
    const items = this.props.items;
    return (
      <div className="receipt">
        <h2 className="receipt-text">Receipt</h2>
        {items.map(this.renderItem)}
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">${this.totalCost(items)}</div>
        </div>
      </div>
    );
  }
}

export default Receipt;