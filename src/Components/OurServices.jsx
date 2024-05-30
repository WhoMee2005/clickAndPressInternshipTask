import React from 'react'
import Card from './Card'
import f1 from '../assests/images/f1.png'
import f2 from '../assests/images/f2.png'
import f3 from '../assests/images/f3.png'
import f4 from '../assests/images/f4.png'
import f5 from '../assests/images/f5.png'
import f6 from '../assests/images/f6.png'
import irregular from "../assests/images/irregular.png"

export default function OurServices() {
  return (
    <div className='container'>
        <div className="our-services-text">
            <h1>Our Services</h1>
            <hr/>
            <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
        </div>
        <div className='services'>
            <Card image={f1} title="Search Doctor">Choose your doctor from thousands of specialist, general, and trusted hospitals</Card>
            <Card title="Online Pharmacy" image={f2}>Buy  your medicines with our mobile application with a simple delivery system</Card>
            <Card title="Consultation" image={f3}>Free consultation with our trusted doctors and get the best recomendations</Card>
            <Card title="Details info" image={f4}>Free consultation with our trusted doctors and get the best recomendations</Card>
            <Card title="Emergency care" image={f5}>You can get 24/7 urgent care for yourself or your children and your lovely family</Card>
            <Card title="Tracking" image={f6}>Track and save your medical history and health data </Card>
        </div>
        <button className="button-2">
            Learn more
        </button>
        <img src={irregular} alt="" className='irregular'/>
    </div>
  )
}
