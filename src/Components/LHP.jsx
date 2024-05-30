import React from 'react'
import element from "../assests/images/element.png"

export default function LHP() {
  return (
    <div className='container container-row LHP'>
        <img src="https://s3-alpha-sig.figma.com/img/5a71/8938/cbd96e01169ecaccfe108988c59eb3ce?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1NbTuyTb4eEMU6KwdRbeRvnKC5rJA3lDSp3ezvOoG5MyxcYw5fSlfbRRw80EzMm20PrRXpoMliF8pft9b3XH2-IXQm6YsRlMuaA5qDbndbSx9w6V~Fs0GKkYWExawkClgZ24w9Muk4nFAj-36Rhm8yla-Rs5l6AaPxs9oH5QDvulQ3XszwoRZSseEzjcOH-ZlmGToUQgvxFFhCpuk83dCLqRgcMhTyegEwfIhicklZSniJqIsCgvOaAvMXmAXdqk2chdE0IyGF0HtGkjiIo9eipOokyJVWmLwrvJx~nUSdADoE0v~7cjfAATWW4yiV~L--MBOAc2ttYcrcV9de6IQ__" alt="illustration" />
        <div className="container-row-text">
            <h1>Leading Healthcare Providers</h1>
            <hr />
            <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
            <button className='button-2'>Learn More</button>
        </div>
        <img src={element} alt="element" className='element' />
    </div>
  )
}
