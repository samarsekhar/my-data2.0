import React, { Component } from "react";

class ClassES6 extends Component {
    constructor(props) {
        super(props);
        this.state = { message: "Hello, World!" };
    }

    updateMessage = () => {
        this.setState({ message: "Goodbye, World!" })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.updateMessage}>Click</button>
            </div>
        )
    }
}
export default ClassES6;