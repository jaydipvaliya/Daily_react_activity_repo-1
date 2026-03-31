import React, { useState } from "react";

const AttendanceCalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2));
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 2, 30));

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const changeMonth = (dir) => {
    const d = new Date(currentDate);
    d.setMonth(month + dir);
    setCurrentDate(d);
  };

  const goToday = () => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDate(today);
  };

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= totalDays; d++) {
    days.push(new Date(year, month, d));
  }

  const isSelected = (date) =>
    selectedDate &&
    date &&
    date.toDateString() === selectedDate.toDateString();

  return (
    <div className="flex gap-6 p-6 bg-black text-white min-h-screen">
      
      {/* LEFT PANEL */}
      <div className="flex-1 bg-[#111] border border-gray-800 rounded-2xl p-5">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => changeMonth(-1)}
              className="px-3 py-1 border border-gray-700 rounded-md"
            >
              ←
            </button>

            <button
              onClick={goToday}
              className="px-3 py-1 border border-gray-700 rounded-md text-sm"
            >
              Today
            </button>
          </div>

          <h2 className="text-lg font-semibold">
            {currentDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h2>

          <button
            onClick={() => changeMonth(1)}
            className="px-3 py-1 border border-gray-700 rounded-md"
          >
            →
          </button>
        </div>

        {/* LEGEND */}
        <div className="grid grid-cols-4 gap-y-2 text-xs text-gray-300 mb-6">
          {[
            "Assignment","holiday","exam","class test",
            "result announcement","orientation","convocation","Personal reasons",
            "Festival celebration","Hackathon participation","College events","Sick leave",
            "Placement drives","Company work","Interviews","Family functions",
            "Emergency situations","Travel","Duty leave","Others"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              {item}
            </div>
          ))}
        </div>

        {/* WEEK LABELS */}
        <div className="grid grid-cols-7 text-sm text-gray-400 mb-2">
          {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
            <div key={d} className="text-center">{d}</div>
          ))}
        </div>

        {/* CALENDAR GRID */}
        <div className="grid grid-cols-7 gap-3">
          {days.map((date, idx) => (
            <div
              key={idx}
              onClick={() => date && setSelectedDate(date)}
              className={`h-20 rounded-xl border p-2 cursor-pointer transition
                ${date ? "border-gray-800 hover:border-gray-600" : ""}
                ${isSelected(date) ? "border-blue-500 ring-1 ring-blue-500" : ""}
              `}
            >
              {date && (
                <span className="text-sm">{date.getDate()}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-80 bg-[#111] border border-gray-800 rounded-2xl p-5">

        <h2 className="text-lg font-semibold mb-4">
          {selectedDate.toLocaleDateString()}
        </h2>

        <Section title="Events" content="No events." />
        <Section title="Leaves" content="No leaves." />

        <div className="mb-4">
          <h3 className="font-medium mb-2">Attendance</h3>
          <p className="text-sm text-gray-400 mb-2">Subject entries:</p>

          <ul className="space-y-1 text-sm">
            {["OOPS(C++)","Maths 2","NodeJS","ReactJS"].map((s, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                {s} — present
              </li>
            ))}
          </ul>
        </div>

        <Section title="Assignments" content="None due." />
      </div>
    </div>
  );
};

const Section = ({ title, content }) => (
  <div className="mb-4">
    <h3 className="font-medium mb-1">{title}</h3>
    <p className="text-sm text-gray-400">{content}</p>
  </div>
);

export default AttendanceCalendarPage;