import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeSectionCard = ({itemss}) => {

 
    const navigate=useNavigate()
  return (
   <div className="py-10">

<div className='overflow-hidden rouded-lg bg-white-400 w-[15rem]   rounded-lg shadow-lg flex flex-col items-center justify-center p-2  mx-3 '>
      
      <div className="w-[10rem] h-[13rem] py-2 " onClick={()=>navigate(`${itemss?.category}/${itemss?.subcategory}/${itemss?.type}`)}>
          <img src={itemss?.imageUrl} className='w-full  object-top object-cover h-full' alt="" />
      </div>
      <div className="p-4">
          <h3 className='text-md font-medium opacity-50 text-black ' >{itemss?.title}</h3>
          <p className='text-sm font-sm  text-grey-800 mt-1' >{itemss?.description}</p>
      </div>
  </div>
   </div>
  )
}

export default HomeSectionCard