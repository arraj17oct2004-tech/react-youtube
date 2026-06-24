import React from 'react'
import { useState } from 'react'

const App = () => {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    const [allNotes,setAllnotes] = useState([])

    function changeTitle(e){ setTitle(e.target.value) }

    function changeDescription(e){ setDescription(e.target.value) }

    function submitHandler(e){

      e.preventDefault()
      
      const temp = [...allNotes]

      temp.push({title,description})

      setAllnotes(temp)

      setTitle('')
      setDescription('')
    }

    function deleteNotes(ind){
      const temp = [...allNotes]
      temp.splice(ind,1)

      setAllnotes(temp)
    }
   

  return (
      <div className="h-screen flex bg-black text-white">

      {/* Add Notes */}
      <div className="w-1/2 p-5 border-r border-gray-700">
        <h1 className="text-2xl mb-4">Add Notes</h1>

       <form  onSubmit={submitHandler} >
         <input
          type="text"
          placeholder="Enter Heading"
          className="w-full p-2 mb-3 bg-gray-800 rounded"
          value={title}
          onChange={changeTitle}
        />

        <textarea
          placeholder="Enter Description"
          className="w-full h-40 p-2 bg-gray-800 rounded"
          value={description}
          onChange={changeDescription}
        ></textarea>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition">Add Note</button>
       </form>
          
        
      </div>

      {/* Recent Notes */}
      <div className="w-1/2 p-5">
        <h1 className="text-2xl mb-4">Recent Notes</h1>

        <div className="flex flex-wrap gap-3">

          {
            allNotes.map((elem,ind) =>{
              return (
                  <div className="w-50 h-50 bg-gray-800 rounded p-2 flex flex-col gap-2" >
                    <h2>{elem.title}</h2>
                    <p>{elem.description}</p>
                      <button className="bg-red-600 text-white px-5 py-2 rounded-lg active:scale-95 transition" 
                      onClick={()=>{deleteNotes(ind)}} >
                      Delete
                    </button>
                   </div>
                )
              } 
            )
          }

        </div>

      </div>

    </div>
  )
}

export default App
