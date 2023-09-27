import React from 'react';
import outfits from '../../outfitdata';

const Outfits = ({ day }) => {

   const possibleOutfits= outfits[day] ;
   const randomIndex = Math.floor(Math.random() * possibleOutfits.length)
   const randomOutfit = possibleOutfits[randomIndex]

  return (
    <div className='p-4 border border-gray-200 mb-4 rounded-lg'>
       <h2 className='text-lg font-semibold'>{day}</h2>
       <p className='text-gray-600 mt-2 '>{randomOutfit}</p>
    </div>
  )
}

export default Outfits;