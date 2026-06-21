import React, { useState } from 'react'

const App = () => {

  function FormHandler(event){
    console.log("Form is Submitted by -> ",title)
    event.preventDefault();
    setTitle("")
  }

  function on_change(){
    // console.log(event.target.value)
    setTitle(event.target.value)
  }
 
  const [title,setTitle] = useState("")
  return (
    <div>
      <form onSubmit={(event)=>{
        FormHandler(event)
        
      }}>
        <input type="text" 
        placeholder='Enter Your name' 
        style={{padding : '10px' , margin : '10px'}}
        onChange={(event)=>{ on_change(event) }}
        value={title}
        />
        <button type="submit" style={{padding : '10px' , margin : '10px'}} >Submit</button>
      </form>
    </div>
  )
}

export default App
