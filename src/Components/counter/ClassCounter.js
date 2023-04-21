import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    increase = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    decrease = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    }
    reset = () => {
        this.setState({
            counter: 0
        });
    }

    render() {
        return (
            <>
                <div>
                    <h3>Class Component Counter</h3>
                    <div className='d-flex justify-content-center my-5'>
                        <button className='btn btn-primary text-white' onClick={this.increase} >+</button>
                        <h4 className='mt-1 mx-2'>{this.state.counter}</h4>
                        <button className='btn btn-primary text-white' onClick={this.decrease}>-</button>
                    </div>
                    <button className='btn btn-primary text-white' onClick={this.reset} >Reset Counter</button>
                </div>
            </>
        )
    }
}
