import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';


// Notes On useEffect :- 
/*
  => Used to handle those tasks that run at side of main react rendering , 
  => If dependecies is not set , by default it executes everytime any state is changed 
  => If dependecies are defined , it is executed for that particular State only 
  => Multiple useEffects can be made for multiple States , eg:- one for dataArr and one for Count 
  => If dependecies are = [], useEffect executes only once when the webApp is rendered 

*/


const App = () => {

  const [count,setCount] = useState(0);

  const [dataArr , setDataArr] = useState([]);

  const getData = async ()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    setDataArr(response.data)
  }

  useEffect(()=>{
    console.log("UseEffect Executed.....")
  },[dataArr])

  return (
    <div>
      <div>
        <h1>Counter :- {count} </h1>
        <button onClick={()=>{ setCount(count+1) }} >IncreaseCount</button>
      </div>

      <hr />

      <div>
        <button onClick={getData}>Fetch Data</button>

        <button onClick={()=>{setDataArr([])}}>Clear-Data</button>
        <h3>
          {
            dataArr.map( (elem,ind)=>{ 
              return <li key = {elem.id}> {elem.name} {elem.phone}</li>
             })
          }
        </h3>

      </div>

    </div>
  )
}

export default App
