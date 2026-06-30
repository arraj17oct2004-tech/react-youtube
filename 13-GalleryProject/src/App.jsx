import React, { useEffect, useState } from 'react'
import axios from 'axios'

// API = https://picsum.photos/v2/list?page=1&limit=21

const App = () => {

    const [imageArr , setImageArr] = useState([])
    const [pg,setPg] = useState(1)

    const [bodyText , setBodyText] = useState(false)
    
    async function getData(){
      const response = await axios.get(`https://picsum.photos/v2/list?page=${pg}&limit=14`) 

      setImageArr(response.data)
      setBodyText(false)
    }

    function prev(){
      if(pg == 1)
        return;

      setPg(pg-1)
      setBodyText(true)
    }

    function next(){
        setPg(pg+1)
        setBodyText(true)
    }

    useEffect(()=>{
      // setImageArr([])
      getData()
    },[pg])
    




  return (
    <div className='min-h-screen bg-gray-700 pt-3'>
      
      {/* HERO-SECTION */}
      <div className='flex flex-wrap gap-4 mx-4.5 h-[85vh] '>

        {
          bodyText 
          ? <h1>LOADING....</h1> 
          :  imageArr.map(
              (elem,ind)=>{
                return (
                  <a key={elem.id} href={elem.url}  target='_blank' className='className="w-56 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"'>
                    <img
                      src= {elem.download_url}
                      alt="Gallery"
                      className="w-50 h-50 object-cover"
                    />
                  </a>
                )
              }
            )
        }
      </div>


        {/* FOOTER */}
          <div className='flex justify-center items-center gap-6 my-5 '>
              <button onClick={prev} className='bg-blue-500  h-12 w-25 rounded-xl active:scale-95 text-white font-semibold '>Prev</button>
              <span className='text-lg font-semibold'>Page Number :- {pg} </span>
              <button onClick={next} className='bg-blue-500  h-12 w-25 rounded-xl active:scale-95 text-white font-semibold '>Next</button>
          </div>

    </div>
  )
}

export default App
