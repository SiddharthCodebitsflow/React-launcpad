import React from 'react'
import ClassCounter from './ClassCounter'
import FunctionCounter from './FunctionCounter'

export default function Counter() {
    return (
        <div>

            <h1 className='mt-5'>Counter</h1>
            <div className='d-flex justify-content-between'>
                <ClassCounter />
                <FunctionCounter />
            </div>
        </div>
    )
}
