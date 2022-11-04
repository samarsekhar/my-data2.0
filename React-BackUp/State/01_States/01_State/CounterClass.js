import React, { Component } from "react";

class Counter extends Component {
    state = {
        qty: 0
    }
    IncrHandler= () => {
        this.setState({ qty:this.state.qty + 1})
    }
    DecrHandler= () => {
        this.setState({ qty:this.state.qty - 1})
    }
    render() {
        return (
            <div>
                <h2>Quantity: {this.state.qty}</h2>
                <button className="btn btn-primary" onClick={this.IncrHandler}> + </button>
                <button className="btn btn-info" onClick={this.DecrHandler}> - </button>
            </div>
        )
    }
}
export default Counter;