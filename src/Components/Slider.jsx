import React, { useState } from 'react'
import SliderCard from './SliderCard'
import element from '../assests/images/element.png'
export default function Slider() {
    const [activeIndex,setAciveIndex]=useState(0);
    const customerInfo=[
        {
            pfp:"https://s3-alpha-sig.figma.com/img/62aa/d0e6/11158bbd0013fc881c174cc985f64f4d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ni~KcM~Vwa0-37P3tWw1RMM~M2xM0sc8sexpr3-D5RcfIsEi9qVrokP5fLCzJN-Zl5aECT4YfDPIKHeKa31TPXkx~~6UkHVQiBw3wBkGrhDeGDOwBZgpj6a0UDJ48IckjF5PtcnJuEiFaKxlZZ473uMiGDcWWl1MPTcJzW6cC748fHwKbOo1LBAzWVUc8R5Wz1p-gdwCneeTV8BN21oOx~s0-iWqUhWbewtV~JvaBceP38tRFOsbGJTBIGfSRaZHRx0YvMXMXHRyiGPIXervmsfwOyyKqrlN-bG9HNAXj5Q4V07x3hecy0zOS1Je6WH7yZiwhf3XUvadifXquM90HQ__",
            name:"Edward Newgate",
            position:"Founder Circle",
            review:"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
        },
        {
            pfp:"https://s3-alpha-sig.figma.com/img/62aa/d0e6/11158bbd0013fc881c174cc985f64f4d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ni~KcM~Vwa0-37P3tWw1RMM~M2xM0sc8sexpr3-D5RcfIsEi9qVrokP5fLCzJN-Zl5aECT4YfDPIKHeKa31TPXkx~~6UkHVQiBw3wBkGrhDeGDOwBZgpj6a0UDJ48IckjF5PtcnJuEiFaKxlZZ473uMiGDcWWl1MPTcJzW6cC748fHwKbOo1LBAzWVUc8R5Wz1p-gdwCneeTV8BN21oOx~s0-iWqUhWbewtV~JvaBceP38tRFOsbGJTBIGfSRaZHRx0YvMXMXHRyiGPIXervmsfwOyyKqrlN-bG9HNAXj5Q4V07x3hecy0zOS1Je6WH7yZiwhf3XUvadifXquM90HQ__",
            name:"Nishith Shrestha",
            position:"Customer",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ad." 
        },
        {
            pfp:"https://s3-alpha-sig.figma.com/img/62aa/d0e6/11158bbd0013fc881c174cc985f64f4d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ni~KcM~Vwa0-37P3tWw1RMM~M2xM0sc8sexpr3-D5RcfIsEi9qVrokP5fLCzJN-Zl5aECT4YfDPIKHeKa31TPXkx~~6UkHVQiBw3wBkGrhDeGDOwBZgpj6a0UDJ48IckjF5PtcnJuEiFaKxlZZ473uMiGDcWWl1MPTcJzW6cC748fHwKbOo1LBAzWVUc8R5Wz1p-gdwCneeTV8BN21oOx~s0-iWqUhWbewtV~JvaBceP38tRFOsbGJTBIGfSRaZHRx0YvMXMXHRyiGPIXervmsfwOyyKqrlN-bG9HNAXj5Q4V07x3hecy0zOS1Je6WH7yZiwhf3XUvadifXquM90HQ__",
            name:"Nishith Shrestha",
            position:"Customer",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ad." 
        }
    ]
    const handlePrev=()=>{
        setAciveIndex(prev=>prev-1<0?customerInfo.length-1:prev-1);
    }
    const handleNext =()=>{
        setAciveIndex(prev=>prev+1>=customerInfo.length?0:prev+1);
    }
  return (
    <div className="container">

        <div className='slider'>
            <img src={element} className='element' alt="" />
            <img src={element} alt="" id='element-2'/>
            <h1>What our customer are saying</h1>
            <hr />
            {customerInfo.map(
                (ele,ind)=>ind===activeIndex&&<SliderCard pfp={ele.pfp} name={ele.name} position={ele.position} review={ele.review}/>
            )}
            
        </div>
        <div className="slider-function">
                <span className='slider-btn' onClick={handlePrev}>←</span>
                {customerInfo.map(
                    (ele,ind)=>ind===activeIndex?<div className="eclipseSelected"></div>:<div className="eclipseUnselected"></div>
                )}
                <span className="slider-btn" onClick={handleNext}>→</span>
            </div>
    </div>
  )
  
}
