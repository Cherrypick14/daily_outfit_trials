import outfits from "../../outfitdata";

const Closet = ({days}) => {
  
   const possibleOutfits= outfits[days] ;
   const randomIndex = Math.floor(Math.random() * possibleOutfits.length)
   const randomOutfit = possibleOutfits[randomIndex]

  return (
    <div className='p-4 border border-gray-200 mb-4 rounded-lg'>
       <h2 className='text-lg font-semibold'>{days}</h2>
       <p className='text-gray-600 mt-2 '>{randomOutfit}</p>
    </div>
  )
}
 

export default Closet;