import React, {useState } from 'react'
import Button from './Button'

export default function Calculator() {
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState('');
    const setOperation = (data_value) => {
        const total_value = value + '' + data_value;
        setValue(total_value);
    }
    const backString = () => {
        setValue(value.slice(0, value.length - 1));
    }
    const resetValue = () => {
        setValue('');
        setAnswer('');
    }
    const equal = () => {
        /* eslint-disable no-eval */
        if (eval(value)) {
            setAnswer(eval(value));
        } else {
            setAnswer('Please enter correct expresstion');
        }
    }
    return (
        <div>
            <h2>This is Calculator app</h2>
            <div className="card mx-auto my-3 bg-dark border border-white" style={{ width: "18rem" }}>
                <div className="card-body">
                    <input style={{ height: '50px' }} placeholder='Enter the value' type="text" className='bg-white form-control' value={value} disabled />
                    <h4 className='text-white mt-3 d-flex justify-content-end'>{answer}</h4>
                    <div className='mt-3 text-center'>
                        <div className='row'>
                            <div className='col-4 mt-2'>
                                <Button operation={setOperation} value={1} text={'1'} />
                            </div>
                            <div className='col-4 mt-2'>
                                <Button operation={setOperation} value={2} text={'2'} />
                            </div>
                            <div className='col-4 mt-2'>
                                <Button operation={setOperation} value={3} text={'3'} />
                            </div>
                            <div className='col-4 mt-2'>
                                <Button operation={setOperation} value={4} text={'4'} />
                            </div>
                            <div className='col-4 mt-2'>
                                <Button operation={setOperation} value={5} text={'5'} />
                            </div>
                            <div className='col-4 mt-2'>
                                <Button operation={setOperation} value={6} text={'6'} />
                            </div>
                            <div className='col-4 mt-2'>
                                <Button operation={setOperation} value={7} text={'7'} />
                            </div>
                            <div className='col-4 mt-2'>
                                <Button operation={setOperation} value={8} text={'8'} />
                            </div>
                            <div className='col-4 mt-2'>
                                <Button operation={setOperation} value={9} text={'9'} />
                            </div>
                            <div className='col-4 mt-2'>
                                <Button operation={setOperation} value={'.'} text={'.'} />
                            </div>
                            <div className='col-4 mt-2'>
                                <Button operation={setOperation} value={0} text={'0'} />
                            </div>
                            <div className='col-4 mt-2'>
                                <Button operation={setOperation} value={'+'} text={'+'} />
                            </div>
                            <div className='col-4 mt-2'>
                                <Button operation={setOperation} value={'-'} text={'-'} />
                            </div>
                            <div className='col-4 mt-2'>
                                <Button operation={setOperation} value={'*'} text={'*'} />
                            </div>
                            <div className='col-4 mt-2'>
                                <Button operation={setOperation} value={'/'} text={'/'} />
                            </div>
                            <div className='col-4 mt-2'>
                                <Button operation={resetValue} value={'C'} text={'C'} />
                            </div>
                            <div className='col-4 mt-2'>
                                <Button operation={equal} value={'='} text={'='} />
                            </div>
                            <div className='col-4 mt-2'>
                                <Button operation={backString} value={'X'} text={'<x'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
