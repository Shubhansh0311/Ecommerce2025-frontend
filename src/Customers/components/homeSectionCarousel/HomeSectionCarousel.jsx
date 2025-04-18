import React, { useState } from 'react'

import HomeSectionCard from '../homeSectionCard/HomeSectionCard'

import { Button} from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import AliceCarousel from 'react-alice-carousel';


const HomeSectionCarousel = ({sectionName,data}) => {
    const[activeIndex,setActiveIndex]=useState(0)
    const reponsive={1024:{items:5.5},768:{items:3},0:{items:1}}
    
const items=data.map((item)=><HomeSectionCard key={item.id} title={item.title} description={item.description} imageUrl={item.imageUrl}/>)



const slideNext=()=>{setActiveIndex((index)=>index+1)
 
    
}
const slidePrev=()=>{setActiveIndex(activeIndex-1)
 

}
const syncActiveIndex=({item})=>{setActiveIndex(activeIndex+1)

   
}
 

  return (
<div className='relative px-4 lg:px-6 m-4 border bg-grey-300 border-grey-800' >
<h2 className='text-2xl font-extrabold text-grey-400' >{sectionName}</h2>
    <div className="p-5 relative ">
    <AliceCarousel
          controlsStrategy="alternate"
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
                responsive={reponsive}
        //    infinite
                  items={items}
                  disableButtonsControls
                  disableDotsControls
              />
            {activeIndex !== 0 &&  <Button variant='contained'  className='z-50' sx={{position:'absolute', top:'8rem',left:'0rem' ,bgcolor:'white',transform:'translateX(50%) rotate(90deg)'}} aria-label='prev' onClick={slidePrev} >
< KeyboardArrowLeftIcon sx={{transform:'rotate(-90deg)',color:'black'}}/>
              </Button>}
            {

                activeIndex!==items.length-5  && <Button variant='contained'  className='z-50' sx={{position:'absolute',bgcolor:'white', top:'8rem',right:'0rem' ,transform:'translateX(50%) rotate(90deg)'}} aria-label='next' onClick={slideNext} >
                < KeyboardArrowLeftIcon sx={{transform:'rotate(90deg)' ,color:'black'}}/>
                              </Button>
            }
    </div>
</div>
  )
}

export default HomeSectionCarousel