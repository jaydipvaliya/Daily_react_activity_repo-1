import React from 'react'
import Navbar from '../components/Navbar'
import AttendanceOverview from '../components/AttendanceOverview'

function Attendance() {
    return (
        <div className="min-h-screen pt-20 bg-neutral-950 text-white">
            <Navbar />
            <AttendanceOverview />
        </div>
    )
}

export default Attendance
