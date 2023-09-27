import './App.css'
import Outfits from './components/outfits'


function App() {
  const daysofweek =[
    'Monday',
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday', 
    'Friday', 
    'Saturday', 
    'Sunday']
  return (
    <>
      <div className="card">
        <h1 className='text-red-600 text-lg'>Welcome t my Outfit Closet </h1>

      {daysofweek.map((day)=>{

         <Outfits key={day} day={day} />
      })}
     
      </div>
    
    </>
  )
}

export default App
