import React from 'react'

export default function SliderCard(props) {
  return (
    <div className='slider-card'>
        <div className="customer-info">
            <img src={props.pfp} alt="customer profile" />
            <div className="customer-detail">

              <h2>{props.name}</h2>
              <span>{props.position}</span>
            </div>
        </div>
        <div className="review">"{props.review}"</div>
    </div>
  )
}
