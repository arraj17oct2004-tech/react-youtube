import React from 'react'

const Cards = (props) => {
  return (
   <div class="min-w-[33.33%] h-full p-2 'flex-shrink-0'">
      <div class="relative h-full overflow-hidden rounded-xl shadow-lg">

    
         <img
            src={props.imageUrl}
            alt="Card Image"
            class="w-full h-full object-cover"
         />

    
         <span class="absolute top-3 left-3 bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
            {props.number}
         </span>

    
         <div class="absolute bottom-0 left-0 w-full p-4">
            <p class="text-white text-sm">
               {props.para}
            </p>
         </div>

      </div>

   </div>
  )
}

export default Cards
