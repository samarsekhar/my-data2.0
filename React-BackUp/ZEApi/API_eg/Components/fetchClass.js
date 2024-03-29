import React, { Component } from "react";

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { error:null, isLoaded: false, items: []}
    }
    componentDidMount() {
        fetch("https://fake-hotel-api.herokuapp.com/api/hotels")
        .then((response) => response.json())
        .then((result) => {
            this.setState({ isLoaded:true, items: result})
        }, (error) => {
            this.setState({ isLoaded:true, error})
        });
    }

    render() {
        const { error, isLoaded, items } = this.state;
        const containsErrorMessage = () => { return <div>Error: {error.message}</div>};
        const isLoading = () => { return <div>Loading...</div>};
        const results = () => {
            console.log({ items });
            return (
                <ul>
                    {items.map((result) => (
                        <li key={result.id}>
                            <b>ID</b>: {result.id} <br/>
                            <b>Name</b>: {result.name} <br/>
                            <b>Description</b>: {result.description}
                            <hr />
                        </li>
                    ))}
                </ul>
            );
        }
        if (error) return containsErrorMessage();
        return !isLoaded ? isLoading() : results();
    }
}
export default MyComponent;