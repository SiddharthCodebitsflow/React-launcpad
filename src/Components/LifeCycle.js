import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props) {
        console.warn("This is constructor");
        super(props);
        this.state = {
            name: "sidd"
        }
    }

    componentDidMount() {
        console.warn("Component Did Mount");
    }

    componentDidUpdate() {
        console.warn("Compnent did update");
    }

    componentWillUnmount() {
        this.setState({
            name: "kumar"
        });
        console.warn("Component will unmount");
    }
    render() {
        console.warn("This is render");
        return (
            <div>
                <h1>React Life Cycle</h1>
            </div>
        )
    }
}
