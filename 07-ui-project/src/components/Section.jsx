import React from 'react'
import Left from './Left'
import Right from './Right'
const Section = () => {
  return (
    <div  className='p-10 flex justify-between gap-5'>
      <Left />
      <Right />
    </div>
  )
}

export default Section
