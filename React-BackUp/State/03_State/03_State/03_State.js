import React, { Component } from "react";

class State extends Component {
    static defaultProps = {
        testTopics: [
            'React js', 'Compound Components', 'Lifecycle Method', 'Event Handlers', 'Router', 'React Hooks', 'Context','OOPS Concepts','JSON','DOM Concept','this Keyword', 'Class and constructor, inheritance'
        ]
    }
    constructor(props) {
        super(props)
        // Set initial state
        this.state = {
            testName: "React Js Test",
            topics: ""
        }
        // Binding this keyword
        this.updateState = this.updateState.bind(this)
    }
    listOfTopics() {
        return (
            <ul>
                {this.props.testTopics.map(topic => (
                    <li>{topic}</li>
                ))}
            </ul>
        )
    }
    updateState() {
        //changing state
        this.setState({
            testName: "Test topics are:",
            topics: this.listOfTopics()
        })
    }

    render() {
        return (
            <div>
                <h2>Test Information</h2>
                <p>{this.state.testName}</p>
                <p>{this.state.topics}</p>
                <button onClick={this.updateState}>Click</button>
            </div>
        )
    }
}
export default State;