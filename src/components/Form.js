import React, { useState } from 'react'

export default function Form(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    const [text, setText] = useState("Type Here")
    return (
        <div className="my-5 container">
            <label htmlFor="textBox" className="form-label"><h1>{ props.heading }</h1></label>
            <textarea className="form-control mt-3" value={ text } onChange={ handleOnChange } id="textBox" rows="10"></textarea>
            <button className="btn btn-primary my-3" onClick={ handleUpClick }>Convert to Uppercase</button>
        </div>
    )
}
