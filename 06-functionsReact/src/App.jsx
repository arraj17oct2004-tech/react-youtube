import React from 'react'

const App = () => {
  
  function btnClicked(event){
    console.log(event.target)
  }
  
  function mouse_enter(event){
    console.log(event.clientX, event.clientY)
  }


  return (
    <div>
        <button 
        onClick={
          ()=>{
            btnClicked(event)
          }
        }
        >
          Button-One
          </button>




        <button onClick={btnClicked}> Button-Two</button>


        <div id="block"  onClick={btnClicked}  onMouseEnter={mouse_enter}  >
          <h3 style={{backgroundColor : 'red'}}>Div-1</h3>
          <h3 style={{backgroundColor : 'red'}}>Div-1</h3>
          <h3 style={{backgroundColor : 'red'}}>Div-1</h3>
          <h3 style={{backgroundColor : 'red'}}>Div-1</h3>
        </div>



    </div>
  )
}

export default App
