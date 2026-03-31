import React from 'react'
import Navbar from '../components/Navbar'

function Feedback() {
    return (
        <div className='min-h-screen pt-20 bg-neutral-950 text-white'>
            <Navbar />
            <div className="flex items-center justify-between px-10 py-6">
                <h1 className="text-2xl font-semibold">Feedback</h1>

                <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg font-medium">
                    + Create Feedback
                </button>
            </div>

            {/* Center Content */}
            <div className="flex flex-1 flex-col items-center justify-center text-center px-4">

                {/* Icon */}
                <div className="mb-6 opacity-60">
                    <div className="w-14 h-14 border-2 border-gray-500 rounded-lg flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7 h-7 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 8h10M7 12h6m-6 8l-4-4V6a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H9l-4 4z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold mb-2">
                    No feedback yet
                </h2>

                {/* Description */}
                <p className="text-gray-400 mb-6 max-w-md">
                    Share your thoughts and help us improve!
                </p>

                {/* Primary CTA */}
                <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-medium">
                    Submit Your First Feedback
                </button>
            </div>
        </div>
    )
}

export default Feedback
