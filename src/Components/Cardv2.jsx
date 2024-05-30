import React from 'react'
import { Link } from 'react-router-dom'

export default function Cardv2(props) {
  return (
    <div className='card-2'>
        <img src={props.image} alt="info" />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <Link className='link'>Read more →</Link>
    </div>
  )
}
