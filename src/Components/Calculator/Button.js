import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button onClick={()=>props.operation(props.value)} className='btn btn-primary text-white mt-1 px-3 rounded-pill' value={props.value}>{props.text}</button>
    </div>
  )
}
