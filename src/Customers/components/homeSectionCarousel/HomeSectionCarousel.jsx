import React, { useState, useEffect } from 'react';
import HomeSectionCard from '../homeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import AliceCarousel from 'react-alice-carousel';

const HomeSectionCarousel = ({ sectionName, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(5.5); // default for large screens

  const responsive = { 1024: { items: 5.5 }, 768: { items: 3 }, 0: { items: 1 } };

  const items = data.map((item, index) => <HomeSectionCard key={index} itemss={item} />);

  const slideNext = () => {
    setActiveIndex((index) => Math.min(index + 1, items.length - 1)); // <- changed here
  };

  const slidePrev = () => {
    setActiveIndex((index) => Math.max(index - 1, 0));
  };

  const syncActiveIndex = (e) => {
    setActiveIndex(e.item);
  };

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(5.5);
      } else if (window.innerWidth >= 768) {
        setVisibleItems(3);
      } else {
        setVisibleItems(1);
      }
    };
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  return (
    <div className='relative px-4 lg:px-6 m-4 border bg-grey-300 border-grey-800'>
      <h2 className='text-2xl font-serif font-extrabold w-full p-4 text-grey-400 shadow-lg shadow-[#643535c9] '>{sectionName}</h2>
      <div className="p-5 relative">
        <AliceCarousel
          controlsStrategy="alternate"
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          responsive={responsive}
          items={items}
          disableButtonsControls
          disableDotsControls
        />
        {activeIndex !== 0 && (
          <Button
            variant='contained'
            className='z-50'
            sx={{
              position: 'absolute',
              top: '11rem',
              left: '0rem',
              bgcolor: 'white',
              transform: 'translateX(50%) rotate(90deg)'
            }}
            aria-label='prev'
            onClick={slidePrev}
          >
            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
          </Button>
        )}
        {activeIndex !== items.length - 1 && ( // <- changed here also
          <Button
            variant='contained'
            className='z-50'
            sx={{
              position: 'absolute',
              bgcolor: 'white',
              top: '11rem',
              right: '0rem',
              transform: 'translateX(50%) rotate(90deg)'
            }}
            aria-label='next'
            onClick={slideNext}
          >
            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
