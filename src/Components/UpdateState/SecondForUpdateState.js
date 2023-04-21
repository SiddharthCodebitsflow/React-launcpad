import React, { useState } from 'react'
import FirstForUpdateState from './FirstForUpdateState';

export default function SecondForUpdateState() {
  let [text2,setText2]=useState("This is Second Component State");
  const secondHanderler=()=>{
    setText2("Update State Using First Component");
  }
  return (
    <div>
      <h5>{text2}</h5>
      <FirstForUpdateState updateState={secondHanderler}/>
    </div>
  )
}
