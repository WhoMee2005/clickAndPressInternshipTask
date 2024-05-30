import React from 'react'

export default function Card(props) {
  return (
    <div className='service'>
        <img src={props.image} alt="service logo" />
        <h1>{props.title}</h1>
        <p>{props.children}</p>
    </div>
  )
}
