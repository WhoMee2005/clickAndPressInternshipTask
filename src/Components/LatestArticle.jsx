import React, { useState } from 'react'
import Cardv2 from './Cardv2'

export default function LatestArticle() {
    const [isViewMore,setIsViewMore]=useState(false)
    const info=[
        {
            title:"Disease detection, check up in the laboratory",
            image:"https://s3-alpha-sig.figma.com/img/8576/064a/da2e59cfd988ffb194c6cc64d75bcc0b?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YXF2n12yBdF-jYwQAPxUawwV9js14B2A2FP5l77svjdga4LscR8KFvhv2xU6AVFFgsd7RDhfm6ks5oTOqqPrEvwlNSp7YlDYwlc~J9AWF7rt8PzKPz8AUqWc0A8taqHjB~LlbCbKvEYv-X7eZi~aLHqwqzC2ofg3~PjTdjW0GnR-4LMeIuYNw5JYdmL0lLCkY-CIMrtXpJ0~T~1DqYtd~MNKAOtQ5F4FUNyGVt~-e2NdZAltHPd6oTmhll940yobIhbPAuDiYR8IVgTbuWBJdFoktaP80PQt0zwud6FKplca7d~dYSjJO8hpe4dQeLw4Xbj3KoAv7M7jAaZiypxOZA__",
            description:"In this case, the role of the health laboratory is very important to do a disease detection..."
        },
        {
            title:"Herbal medicines that are safe for consumption",
            image:"https://s3-alpha-sig.figma.com/img/0aa1/2266/77fc322ea919bd84d394b74cfedb1faa?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gSHuAy2kg0McRxjnVRpUK-QJpPoc~uV1GK9UoLVmHICrZjY6IF01TZPXs8YP1IC8X~BNDa4N9Q8yizpCZhHIEFfbZkkL8cziQnDYbBb~wZqImHddpCs4VE7KnDYVFcL-VrNbHCyaXbCCZmK6mCM-7ykgND-z5Qdoe2CwvE1wbAW1~LqIADHsaiUyUMj~mMsZM60Gpg7YsEfGlDCbKXLWt8zvEI00dzwuIgoQ8kjga41vEdMA8xMOZwVNm~MqLCBsow18XQGAU~05-HRmSWyfG2OKBLLAqIaIfPaxQIaPo88Fh01z8TMELebn6THvWziVmXbfVtxR-KuIr5c8bA8~jA__",
            description:"Herbal medicine is very widely used at this time because of its very good for your health..."
        },
        {
            title:"Disease detection, check up in the laboratory",
            image:"https://s3-alpha-sig.figma.com/img/a8ef/ad28/f7952a6bb83c0f34f33da7d3bd0d4f6a?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m2YQLNWYXkwNZEhZgqJtUiNt7gaJRMGnQhW~e3fEmhlBxB1lArbS2Insb01Cdw7hdAdJbfD9ajzE4nRtpF8RVJ9CQrq4cp8pitx5sdhX7Ps3OzFZVgJ2Tho0Bwevb-O6j6ljxBmStvratSbuytOABiXn7B6elgsby3OvsdYfOAiHy0islg3fsmOc2k32ciyZp4jLpj24ju6l8kA4a04fUkUcEIBYOpaeYqg1my8wMIQLH39iJVthskf5Uh5e6eQKker~2ztq5ju7OTlYPvIejoeCtMDvHPJ-PsVIDg~Rz3LrXOV-4yGzxkzWqgjNOlDBev~X6D14LM5s9--rUw9~gA__",
            description:"In this case, the role of the health laboratory is very important to do a disease detection..."
        },
        {
            title:"Natural care for healthy facial skin",
            image:"https://s3-alpha-sig.figma.com/img/a8ef/ad28/f7952a6bb83c0f34f33da7d3bd0d4f6a?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m2YQLNWYXkwNZEhZgqJtUiNt7gaJRMGnQhW~e3fEmhlBxB1lArbS2Insb01Cdw7hdAdJbfD9ajzE4nRtpF8RVJ9CQrq4cp8pitx5sdhX7Ps3OzFZVgJ2Tho0Bwevb-O6j6ljxBmStvratSbuytOABiXn7B6elgsby3OvsdYfOAiHy0islg3fsmOc2k32ciyZp4jLpj24ju6l8kA4a04fUkUcEIBYOpaeYqg1my8wMIQLH39iJVthskf5Uh5e6eQKker~2ztq5ju7OTlYPvIejoeCtMDvHPJ-PsVIDg~Rz3LrXOV-4yGzxkzWqgjNOlDBev~X6D14LM5s9--rUw9~gA__",
            description:"A healthy lifestyle should start from now and also for your skin health. There are some..."
        }
    ]
    const handleClick=()=>{
        setIsViewMore(prev =>!prev)
    }
  return (
    <div className='container'>
        <h1>Check out our latest article</h1>
        <hr />
        <div className="card-2-container">
            {info.map((ele,ind)=>isViewMore?<Cardv2 image={ele.image} title={ele.title} description={ele.description}/>:ind<3&&<Cardv2 image={ele.image} title={ele.title} description={ele.description}/>)}
        </div>
        <button className="button-2" onClick={handleClick}>
            {isViewMore?"View less":"View all"}
        </button>
    </div>
  )
}
