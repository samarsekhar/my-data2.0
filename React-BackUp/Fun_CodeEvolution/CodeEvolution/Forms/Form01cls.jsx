import React, { Component } from "react";

class FormsClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            comments: "",
            topic: ""
        }
    }

    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value })
    }
    handleCommentsChange = (event) => {
        this.setState({ comments: event.target.value })
    }
    handleTopicChange = (event) => {
        this.setState({ topic: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        console.log();
    }

    render() {
        const { username, comments, topic } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>User Name</label>
                        <input type="text" value={username} onChange={this.handleUsernameChange} />
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea value={comments} onChange={this.handleCommentsChange} />
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={topic} onChange={this.handleTopicChange}>
                            <option>select topic</option>
                            <option value="javascript">JavaScript</option>
                            <option value="node.js">Node.js</option>
                            <option value="react.js">React.js</option>
                            <option value="mongodb">MongoDB</option>
                            <option value="express">Express</option>
                        </select>
                    </div>
                    <div>
                        <button className="btn btn-success" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default FormsClass;