import React, { Component } from "react";

class Laptop extends Component {
    state = {
        Product_Name:"Acer Swift 3 Intel core 15",
        Price: 60000,
        Image: "https://static-ecapac.acer.com/media/catalog/product/cache/a17a77e026ef2eddd3ecae104c32cc71/6/_/6_3.jpg",
        Qty: 0
    }

    decrHandler = () => {
        this.setState({ Qty: this.state.Qty - 1})
    }
    incrHandler = () => {
        this.setState({ Qty: this.state.Qty + 1})
    }
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row-md-3">
                        <div className="col-md-10">
                            <table className="table table-info">
                                <thead className="bg-secondary">
                                    <th>Product_Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.Product_Name}</td>
                                        <td><img src={this.state.Image} width="350px" height="300px" alt="" /></td>
                                        <td>{this.state.Price}</td>
                                        <td>
                                            <i className="fa fa-minus-circle" onClick={this.decrHandler} />
                                            {this.state.Qty}
                                            <i className="fa fa-plus-circle" onClick={this.incrHandler} />
                                        </td>
                                        <td>{this.state.Price*this.state.Qty}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Laptop;