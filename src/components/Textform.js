import React, { useState } from 'react';


export default function TextForm (props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text turned into uppercase","success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Text turned into lowercase","success");
    }
    const handleCopy = () =>{
      var text = document.getElementById("mybox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard","sucess");
    }

    const handleextraspaces = () => {
      let newText = text.split(/[ ] +/);
      setText(newText.join(""));
      props.showAlert("Remove Extra Spaces","success")
    }

    const handleclear = () => {
      let newText = "";
      setText(newText);
      props.showAlert("Clear Text","success")
    };

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const[text, setText] = useState('');
  return (
    <>
    <div className="container">
      <div className="mb-3">
        <h1>{props.heading} </h1>
        <textarea className="form-control" id="mybox" rows="8" onChange={handleOnChange} value={text}  
        style={{backgroundColor : props.mode==='secondary'?'lightblue':'white'}}></textarea>
        <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert to uppercase </button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleLowClick}>Convert to lowercase </button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleclear}>Clear</button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleCopy}>Copy to Text</button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleextraspaces}>Remove Whitespace</button>
       </div>
    </div>
    <div className="container">
    <h1 className='my2'>Your text Summary</h1>
    <p className='my2'>{text.split(" ").length} words, {text.length} characters</p>
    <p className='my2'>{0.008 * text.split(" ").length} Minutes to Read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}
