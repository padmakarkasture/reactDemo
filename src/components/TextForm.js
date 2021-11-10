import React, {useState} from 'react'


export default function TextForm(props) {

    const [text,setText] = useState("enter text");
    const handleClear =()=>{
       setText("")

    }
    const handleOnChange=(event)=>{
            setText(event.target.value)
    }
    const handleConvert=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        }

        const handletoloConvert=()=>{
            let loCase = text.toLowerCase(text);
            setText(loCase)
        }
    return (
       <>
       
       <h4>{props.heading}</h4>
       <div  className="mb-3">

  <textarea   className="form-control" value={text}  onChange={handleOnChange} id="mybox" rows="8"></textarea>
</div>

<button className="btn btn-primary"  onClick={handleConvert}>Convert to upperase</button><button className="btn btn-primary mx-1"  onClick={handletoloConvert}>Convert to LowerCase</button>

<button className="btn btn-primary"  onClick={handleClear}>Clear</button>
<h3 className="my-2">Summary</h3>
<p> words {text.split(' ').length } and letters {text.length} time to read {0.8 * (text.split(" ").length) } minutes</p>

<h4>Preview</h4>
<p>{text}</p>
</> 
    )
}
 