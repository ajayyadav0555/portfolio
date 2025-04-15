import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants'
import { div } from 'three/tsl'
import TechIcons from '../components/Models/TechLogos/TechIcons'
import { useGSAP } from '@gsap/react'
import {gsap} from 'gsap'

const TechStatck = () => {
    useGSAP(()=>{
        gsap.fromTo('.tech-card',{
            y:50,
            opacity:0,
        },{
            y:0,
            opacity:1,
            duration:1,
            stagger:0.2,
            scrollTrigger:"#skills",
            start:"top center"
        })
    },[])
  return (
    <div id='skills' className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader title={"My Preferred Tech Stack"} sub={"🤝 The Skills I Bring to the Table"}/>
            <div className='tech-grid'>
                {techStackIcons.map((icon)=>(
                    <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
                        <div className='tech-card-animated-bg' />
                        <div className='tech-card-content'>
                            <div className='tech-icon-wrapper'>
                                <TechIcons model={icon} />
                            </div>
                            <div className='padding-x w-full'>
                                {/* <h3 className='text-white text-lg font-medium'>{icon.name}</h3> */}
                                <p>
                                {icon.name} 
                                    </p>
                            </div>
                        </div>
                        {/* {icon.name} */}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TechStatck
