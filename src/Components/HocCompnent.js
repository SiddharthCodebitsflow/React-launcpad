import React from 'react'
import Student1 from './Student1'
import Student2 from './Student2'

export default function HocCompnent() {
    return (
        <div>
            <h1 className='mt-5'>Higher-Order Components (HOC)</h1>
            <div className='d-flex justify-content-between mb-5'>
                <Student1 />
                <Student2 />
            </div>
        </div>
    )
}
