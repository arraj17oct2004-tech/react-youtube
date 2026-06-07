import React from 'react'

const Card = (props) => {
  return (
    <div>
      <p>----------------------------------------------------</p>
      <h2>This is From Card.jsx</h2>
      <h3>UserName = {props.user} & Age = {props.age}</h3>
      <p>----------------------------------------------------</p>
    </div>
  )
}

export default Card
