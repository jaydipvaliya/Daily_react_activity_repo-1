import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center w-full h-155 bg-[rgb(12,12,12)] flex-col'>
      <div className='text-6xl font-extrabold text-gray-50'>Coding</div>
      <div className='text-6xl font-extrabold text-[rgb(190,190,190)]'>Gita</div>
      <div className='text-white mt-10 text-xl'>Smart, simple, and reliable attendance for modern classrooms</div>
      <button className='bg-white rounded-xl p-3 mt-10 font-semibold'>Go to Dashboard</button>
      <div className='flex justify-around gap-10 mt-10'>
        <div className=' flex flex-col w-110 h-30 bg-[rgb(18,18,18)] border-[rgb(61,60,60)] border-1 rounded-2xl justify-center '>
              <h2 className='text-white font-semibold text-[20px] mx-6'>Role-based dashboards</h2>
              <h5 className='text-[rgb(133,133,133)] mx-6'>Admin, Mentor, and Student experiences tailored to their needs.</h5>
        </div>
        <div className=' flex flex-col w-110 h-30 bg-[rgb(18,18,18)] border-[rgb(61,60,60)] border-1 rounded-2xl  '>
              <h2 className='text-white font-semibold text-[20px] mx-6 mt-6 '>Fast and secure access</h2>
              <h5 className='text-[rgb(133,133,133)] mx-6'>Encrypted sessions and streamlined navigation.</h5>
        </div>
      </div>
    </div>
  )
}

export default App
