import React, {useState} from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
  function handleUpClick(){
    // console.log("Button pressed UP")
    let upText = text.toUpperCase();
    setText(upText)
    props.showAlert('UpperCase conversion', 'success')
  } 
  function handleLoClick(){
    // console.log("Button pressed low")
    let lowText = text.toLowerCase();
    setText(lowText)
    props.showAlert('LowerCase conversion', 'success')
  }
  function handleClearClick(){
    let clearText = '';
    setText(clearText)
    props.showAlert('Text Cleared', 'success')
  }

  function handleOnChange(event){
    // console.log("Text Entered")
    setText(event.target.value)
  }

  const [text, setText] = useState('Enter the Text');
  return (
    <>
    <div style={{color: props.mode === 'light' ? '#141d50' : 'white' }}>
    <div className='container' >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value ={text} onChange={handleOnChange} id="boxText" rows="6" style={{backgroundColor: props.mode === "dark" ? "#141d50" : "white", color: props.mode === 'light' ? 'black' : 'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-3" disabled={text.length === 0} onClick={handleUpClick}>Upper Case</button>
        <button className="btn btn-primary mx-3" disabled={text.length === 0} onClick={handleLoClick}>Lower Case</button>
        <button className="btn btn-primary mx-3" disabled={text.length === 0} onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-4">
      <h2>Text summary</h2>
      <p><b>{text.split(/\s+/).filter((ele) => {return ele.length !== 0}).length}</b> words, <b>{text.length}</b> characters </p>
      <p>{text.split(" ").length * 0.008} mins read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something to Preview"}</p>
    </div>
    </div>
    </>
  )
}

TextForm.prototype = {
  heading: PropTypes.string
}