import React, { useState } from "react";

const semesters = [
  {
    name: "Semester 1",
    range: "7/31/2025 - 1/28/2026",
    attendance: 86,
    total: 271,
    present: 232,
    absent: 39,
    leave: 0,
    internLeave: 0,
    start: "7/31/2025",
    end: "1/28/2026",
    duration: "181 days",
  },
  {
    name: "Semester 2",
    range: "1/29/2026 - 6/30/2026",
    attendance: 0,
  },
];

export default function Page() {
  const [active, setActive] = useState(0);
  const data = semesters[active];

  return (
    <div className="bg-black text-white min-h-screen p-6">
      
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Semester Attendance</h1>
        <p className="text-gray-400 text-sm">
          View your attendance statistics by semester
        </p>
      </div>

      <div className="flex gap-6">
        
        {/* LEFT PANEL */}
        <div className="w-72 bg-[#111] border border-gray-800 rounded-2xl p-4">
          <h2 className="mb-4 font-medium">Semesters</h2>

          <div className="space-y-3">
            {semesters.map((sem, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`p-3 rounded-xl cursor-pointer border transition
                  ${
                    active === i
                      ? "bg-blue-900 border-blue-500"
                      : "bg-black border-gray-800 hover:border-gray-600"
                  }`}
              >
                <p className="font-medium">{sem.name}</p>
                <p className="text-xs text-gray-400">{sem.range}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 space-y-6">
          
          {/* MAIN CARD */}
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            
            {/* TOP */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="font-semibold">{data.name}</h2>
                <p className="text-sm text-gray-400">{data.range}</p>
              </div>

              <div className="text-right">
                <p className="text-3xl font-bold">{data.attendance}%</p>
                <p className="text-sm text-gray-400">Attendance</p>
              </div>
            </div>

            {/* PROGRESS */}
            <div className="mb-6">
              <p className="text-sm mb-2">Overall Attendance</p>
              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{ width: `${data.attendance}%` }}
                />
              </div>
              <div className="text-right text-sm mt-1">
                {data.attendance}%
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <StatCard label="Total Marked" value={data.total} />
              <StatCard label="Present Count" value={data.present} green />
              <StatCard label="Absent Count" value={data.absent} red />
              <StatCard label="Attendance %" value={`${data.attendance}%`} blue />
            </div>

            {/* BOTTOM */}
            <div className="grid grid-cols-2 gap-6">
              
              {/* STATUS */}
              <div>
                <h3 className="mb-3 font-medium">Status Breakdown</h3>

                <StatusItem label="Present Count" value={data.present} color="green" />
                <StatusItem label="Absent Count" value={data.absent} color="red" />
                <StatusItem label="Leave Days" value={data.leave} color="yellow" />
                <StatusItem label="Intern Leave Days" value={data.internLeave} color="purple" />
              </div>

              {/* PERIOD */}
              <div>
                <h3 className="mb-3 font-medium">Period Information</h3>

                <InfoRow label="Start Date" value={data.start} />
                <InfoRow label="End Date" value={data.end} />
                <InfoRow label="Duration" value={data.duration} />
              </div>
            </div>
          </div>

          {/* STATUS MESSAGE */}
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-4">
            <h3 className="mb-3 font-medium">Attendance Status</h3>

            <div className="flex items-center gap-2 text-green-400 text-sm">
              ✓ Your attendance is good. Keep up the consistent attendance!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* COMPONENTS */

const StatCard = ({ label, value, green, red, blue }) => {
  return (
    <div className="bg-black border border-gray-800 rounded-xl p-4">
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <p
        className={`text-xl font-semibold
          ${green && "text-green-400"}
          ${red && "text-red-400"}
          ${blue && "text-blue-400"}
        `}
      >
        {value}
      </p>
    </div>
  );
};

const StatusItem = ({ label, value, color }) => {
  const colorMap = {
    green: "bg-green-500/20 text-green-400",
    red: "bg-red-500/20 text-red-400",
    yellow: "bg-yellow-500/20 text-yellow-400",
    purple: "bg-purple-500/20 text-purple-400",
  };

  return (
    <div className="flex justify-between items-center mb-2 text-sm">
      <span>{label}</span>
      <span className={`px-2 py-0.5 rounded ${colorMap[color]}`}>
        {value}
      </span>
    </div>
  );
};

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between text-sm mb-2">
    <span className="text-gray-400">{label}</span>
    <span>{value}</span>
  </div>
);