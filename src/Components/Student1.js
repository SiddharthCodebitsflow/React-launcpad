import React, { Component } from 'react'
import subject from './Hoc';

class Student1 extends Component {

    render() {
        const { fun_mode } = this.props;
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button className='btn btn-primary text-white' onClick={fun_mode} >Inc Count Student1</button>
            </div>
        )
    }
}

export default subject(Student1);