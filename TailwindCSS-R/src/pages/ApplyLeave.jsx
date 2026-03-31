import React from 'react'
import Navbar from '../components/Navbar'
import StatCard from '../components/StatCard'
import Input from '../components/Input'

function ApplyLeave() {
    return (
        <div className='min-h-screen pt-20 bg-neutral-950 text-white'>
            <Navbar />
            <div className="min-h-screen bg-black text-white px-6 py-6">
      
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">Apply for Leave</h1>
        <p className="text-gray-400">
          Submit your leave application and track your requests
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Applications" value="0" color="text-white" />
        <StatCard title="Pending Review" value="0" color="text-yellow-400" />
        <StatCard title="Approved" value="0" color="text-green-400" />
        <StatCard title="Rejected" value="0" color="text-red-400" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          
          <h2 className="text-lg font-semibold mb-1">
            + New Leave Application
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Fill out the form to submit your leave request
          </p>

          <form className="space-y-4">
            
            <div>
              <label className="text-sm text-gray-300">Leave Category</label>
              <select className="w-full mt-1 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm">
                <option>Select category</option>
                <option>Sick Leave</option>
                <option>Casual Leave</option>
                <option>Emergency</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Input label="From Date" type="date" />
              <Input label="To Date" type="date" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Input label="Leave Time" type="time" />
              <Input label="Return Time" type="time" />
            </div>

            <div>
              <label className="text-sm text-gray-300">
                Additional Remarks (Optional)
              </label>
              <textarea
                className="w-full mt-1 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm"
                rows="3"
                placeholder="Any additional information for your mentor or admin"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 transition py-3 rounded-lg font-medium"
            >
              Submit Leave Application
            </button>
          </form>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
          
          <h2 className="text-lg font-semibold mb-1">
            My Leave Requests
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            Track the status of your applications
          </p>

          <div className="opacity-60 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v12l-4-4H7a2 2 0 01-2-2V6a2 2 0 012-2z"
              />
            </svg>
          </div>

          <p className="text-gray-300">No leave requests yet</p>
          <p className="text-gray-500 text-sm">
            Your submitted applications will appear here
          </p>
        </div>
      </div>
    </div>
        </div>
    )
}

export default ApplyLeave
