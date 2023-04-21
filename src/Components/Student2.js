import React, { Component } from 'react'
import subject from './Hoc'

class Student2 extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button className='btn btn-primary text-white' onClick={this.props.fun_mode}>Inc Count Student2</button>
            </div>
        )
    }
}

export default subject(Student2);