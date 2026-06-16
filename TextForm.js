import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" +text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
       
    }

    const handleLoClick = ()=>{
        //console.log("Lowercase was clicked" +text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{
        //console.log("Lowercase was clicked" +text);
        let newText='';
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }

    const handleCopy= () =>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copieed to clipboard!", "success");
    }
    
    const handleExtraSpaces= () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!", "success");
    }

     const handleOnChnage = (event)=>{
        //console.log("on chnage");
        setText(event.target.value);
        event.target.style.height="auto";
        event.target.style.height=event.target.scrollHeight+"px";
    }
    const [text, setText] = useState('');
    //text="new text";//wrong way to change the state
    //setText("new text"); //Correct way to change the state
     
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
             <h1>{props.heading} -</h1>
              <div className="mb-3">
                  <label htmlFor="myBox" className="form-label">Example textarea</label>
                       <textarea className="form-control"  value={text} onChange={handleOnChnage} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : '#042743'}}  id="myBox" rows="3"></textarea>
                    </div>
                    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                     <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                      <button className="btn btn-primary mx-2" onClick={handleCopy}>copy Text</button>
                       <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>remove extra spaces</button>
      <div className='container my-2' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} word and {text.length} characters</p>
        <p> {0.008*text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the texbox above to preview it here"}</p>
      </div>
    </div>
    </>
  )
}
