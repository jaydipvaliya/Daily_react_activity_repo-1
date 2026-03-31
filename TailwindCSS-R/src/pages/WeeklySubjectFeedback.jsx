import React from 'react'
import Navbar from '../components/Navbar'

function WeeklySubjectFeedback() {
    return (
        <div className='min-h-screen pt-20 bg-neutral-950 text-white'>
            <Navbar />

            <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-12">

      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold mb-2">
          Weekly Subject Feedback
        </h1>
        <p className="text-gray-400">
          Share your thoughts on this week's subjects
        </p>
      </div>

      <div className="w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-2xl p-12 flex flex-col items-center text-center shadow-lg">
        
        <div className="mb-6 opacity-60">
          <div className="w-16 h-16 border border-gray-600 rounded-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m0 0c-2.5-2-5-3-8-3V6c3 0 5.5 1 8 3m0 9c2.5-2 5-3 8-3V6c-3 0-5.5 1-8 3"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-2">
          All Caught Up!
        </h2>

        <p className="text-gray-400">
          No subjects available for feedback at this time.
        </p>
      </div>
    </div>
        </div>
    )
}

export default WeeklySubjectFeedback
