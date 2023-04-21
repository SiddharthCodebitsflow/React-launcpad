import React, { useState } from 'react'

export default function FunctionCounter() {
    let [counter, setCounter] = useState(0);
    let increase = () => {
        setCounter(counter + 1);
    }
    let decrease = () => {
        setCounter(counter - 1);

    }
    let reset = () => {
        setCounter(0);
    }
    return (
        <div>
            <>
                <div>
                    <h3>Function Component Counter</h3>
                    <div className='d-flex justify-content-center my-5'>
                        <button className='btn btn-primary text-white' onClick={increase}  >+</button>
                        <h4 className='mt-1 mx-2'>{counter}</h4>
                        <button className='btn btn-primary text-white' onClick={decrease} >-</button>
                    </div>
                    <button className='btn btn-primary text-white' onClick={reset} >Reset Counter</button>
                </div>
            </>
        </div>
    )
}
