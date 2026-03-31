import React from 'react'
import Navbar from '../components/Navbar'
import AttendanceCalendarPage from '../components/AttendanceCalendarPage'

function Calendar() {
    return (
        <div className="min-h-screen pt-20 bg-neutral-950 text-white">
          <Navbar />
          <AttendanceCalendarPage />
        </div>
    )
}

export default Calendar
