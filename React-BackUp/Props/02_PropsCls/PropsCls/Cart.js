import React, {Component} from "react";

class Cart extends Component {
    render() {
        return (
            <div>
                <h2>Cart Component</h2>
                <p>Product_Name: {this.props.Product_Name}</p>
                <p><img src={this.props.Product_Image} /></p>
                <p>Price: {this.props.Price}</p>
                <p>Color: {this.props.Color}</p>
            </div>
        )
    }
}
export default Cart;