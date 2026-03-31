import React from "react";
import DayCell from "./DayCell";

const CalendarGrid = ({ currentDate, selectedDate, setSelectedDate }) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const days = [];

  // Empty cells before start
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Actual days
  for (let d = 1; d <= totalDays; d++) {
    days.push(new Date(year, month, d));
  }

  return (
    <>
      {/* Week labels */}
      <div className="grid grid-cols-7 text-center text-sm text-gray-400 mb-2">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-7 gap-3">
        {days.map((date, idx) => (
          <DayCell
            key={idx}
            date={date}
            selectedDate={selectedDate}
            onClick={setSelectedDate}
          />
        ))}
      </div>
    </>
  );
};

export default CalendarGrid;