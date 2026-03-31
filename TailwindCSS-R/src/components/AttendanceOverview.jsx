import React from "react";

const attendanceData = [
  {
    code: "SU0204",
    subject: "OOPS(C++)",
    markedBy: "Ankita",
    status: "present",
  },
  {
    code: "SU0205",
    subject: "Maths 2",
    markedBy: "Ankita",
    status: "present",
  },
  {
    code: "SU0202",
    subject: "NodeJS",
    markedBy: "Ankita",
    status: "present",
  },
  {
    code: "SU0201",
    subject: "ReactJS",
    markedBy: "Ankita",
    status: "present",
  },
];

const AttendanceOverview = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Container */}
      <div className="max-w-4xl mx-auto bg-[#111] rounded-2xl p-6 shadow-lg border border-gray-800">
        
        {/* Header */}
        <h1 className="text-lg font-semibold mb-4">Overview</h1>

        {/* Card */}
        <div className="bg-[#0d0d0d] rounded-xl p-5 border border-gray-800">
          
          {/* Title */}
          <h2 className="text-md font-medium">Today's Attendance</h2>
          <p className="text-sm text-gray-400 mb-4">Date: 2026-03-30</p>

          {/* List */}
          <div className="space-y-3">
            {attendanceData.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-black border border-gray-800 rounded-xl px-4 py-3"
              >
                {/* Left */}
                <div>
                  <p className="text-sm font-medium">
                    {item.code} - {item.subject}
                  </p>
                  <p className="text-xs text-gray-400">
                    Marked by: {item.markedBy}
                  </p>
                </div>

                {/* Status */}
                <span className="text-xs px-3 py-1 rounded-full bg-green-900 text-green-400 border border-green-700">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceOverview;