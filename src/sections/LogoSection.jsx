import React from 'react'
import { logoIconsList } from '../constants'



const LogoIcon=({item})=>{
    return (
        <div className='flex-none flex-center marquee-item'>
            <img src={item.imgPath} alt={item.name} />
        </div>
    )
}
const LogoSection = () => {
  return (
    <div className='md:my-20 my-10 relative'>
      <div className='gradient-edge' />
      <div className='gradient-edge' />

      <div className='marquee h-52'>
        <div className='marquee-box md:gap-12 gap-5'>
            {logoIconsList.map((icon,index)=>(
                <LogoIcon key={`${icon.name}-${index}`} item={icon} />
            ))}
            {logoIconsList.map((icon,index)=>(
                <LogoIcon key={`${icon.name}-${index}`} item={icon} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default LogoSection
