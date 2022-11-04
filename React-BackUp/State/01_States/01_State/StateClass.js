import React, { Component } from "react";

class State extends Component {
    state = {
        message: "Hey Dude, Do you know my Chai Time."
    }
    gmHandler = () => {
        this.setState({ message: "Good Morning Dude, It's Chai Time."})
    }
    geHandler = () => {
        this.setState({ message: "Good Evening Dude, It's Chai Time."})
    }
    gnHandler = () => {
        this.setState({ message: "Good Night Dude, It's Chai Time."})
    }
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button className="btn btn-success" onClick={this.gmHandler}>Click</button>
                <button className="btn btn-primary" onClick={this.geHandler}>Click</button>
                <button className="btn btn-info" onClick={this.gnHandler}>Click</button>
            </div>
        )
    }
}
export default State;