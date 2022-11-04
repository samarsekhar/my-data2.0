import React, { Component } from "react";

class StateProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            show: true
        }
    }
    IncrHandler = () => {
        this.setState({ clicks: this.state.clicks + 1})
    }
    DecrHandler = () => {
        this.setState({ clicks: this.state.clicks - 1})
    }
    ToggleHandler = () => {
        this.setState({ show: !this.state.show});
    } 
    render() {
        return (
            <div>
                <h2>State Props Method</h2>
                <button onClick={this.IncrHandler}>Click + </button>
                <button onClick={this.DecrHandler}>Click - </button>
                <button onClick={this.ToggleHandler}>
                    {this.state.show ? "Hide number" : "Show number"}
                </button>
                {this.state.show ? <h2>{this.state.clicks}</h2> : " "}
            </div>
        )
    }
}
export default StateProps;