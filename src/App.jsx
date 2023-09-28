import './App.css'
import Closet from './components/closet'


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
      <div className="container mx-auto mt-8 p-4">
        <h1 className='text-3xl font-semibold mb-4'>Welcome to my Outfit Closet </h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

         {daysofweek.map((day)=>{

           <Closet key={day} days={day} />
           })}
         </div>
      </div>
    
    </>
  )
}

export default App;
