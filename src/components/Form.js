import React, { useState } from 'react'

export default function Form(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.handleAlert("Text Changed to Upperacase", "success");
    }
    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.handleAlert("Text Changed to Loweracase", "success");
    }
    const handleClearClick = () => {
        setText("");
        props.handleAlert("Text Cleared", "success");
    }
    const handleRemoveSpaceClick = () => {
        setText(text.split(" ").filter(word => word.length !== 0).join(" "));
        props.handleAlert("Extra Spaces Removed", "success");
    }
    const handleCopyClick = () => {
        let text = document.getElementById("textBox");
        navigator.clipboard.writeText(text.value);
        props.handleAlert("Text Copied to ClipBoard", "success");
    }
    const [text, setText] = useState("")
    const myStyle = {
        color:`${props.theme==='light'?'black':'white'}`,
        backgroundColor:`${props.theme==='light'?'white':'black'}`
    }
    return (
        <>
            <div className={`my-5 container text-${props.theme==='light'?'dark':'light'}`}>
                <label htmlFor="textBox" className="form-label"><h1>{ props.heading }</h1></label>
                <textarea className="form-control mt-3" style={myStyle} value={ text } onChange={ handleOnChange } id="textBox" rows="10"></textarea>
                <button className="btn btn-primary my-3" onClick={ handleUpClick }>Convert to Uppercase</button>
                <button className="btn btn-info mx-3" onClick={ handleLowClick }>Convert to Lowercase</button>
                <button className="btn btn-success" onClick={ handleRemoveSpaceClick }>Remove Extra Spaces</button>
                <button className="btn btn-danger mx-3" onClick={ handleClearClick }>Clear Text</button>
                <button className="btn btn-secondary" onClick={ handleCopyClick }>Copy Text</button>
            </div>
            <div className={`container text-${props.theme==='light'?'dark':'light'}`} style={{fontSize:"20px"}}>
                <h1 className='my-3'>Text Specifications: </h1>
                <p>Total number of Words in your text: { text.split(" ").filter(word => word.length !== 0).length }</p>
                <p>Total number of Characters in your text: { text.length }</p>
                <p>Average Read Time in Minutes: { 0.008 * text.split(" ").filter(word => word.length !== 0).length }</p>
            </div>
        </>
    )
}
