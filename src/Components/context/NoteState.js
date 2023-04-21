import React, { useState } from "react";
import noteContext from "./noteContext";
const NoteState = (props) => {
    const [text, state] = useState([]);
    const [status,setStatus]=useState('')
    return (
        <noteContext.Provider value={{ text, state,status,setStatus}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;