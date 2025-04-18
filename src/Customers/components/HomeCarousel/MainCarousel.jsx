import React from 'react'

import 'react-alice-carousel/lib/alice-carousel.css';
import { itemss } from './MainCarouseldata'
import AliceCarousel from 'react-alice-carousel';

const MainCarousel = () => {
const items=itemss.map((item)=><img src={item.url}  className='md:h-[600px] z-2  p-2 object-fit xs:object-contain xs:w-[auto] h-[auto]' width={1680}  role='presentation' alt=''/>)
  
  return (
  
    <AliceCarousel

    
      
      controlsStrategy="alternate"
    
              items={items}

              disableButtonsControls
          autoPlay

              autoPlayInterval={500}
              infinite
          
          />
      
  )
}

export default MainCarousel