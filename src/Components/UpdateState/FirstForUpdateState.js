import React from 'react'

export default function FirstForUpdateState(props) {
    return (
        <div>
            <button onClick={props.updateState} className='btn btn-primary text-white'>Change State Using First Component</button>
        </div>
    )
}
 