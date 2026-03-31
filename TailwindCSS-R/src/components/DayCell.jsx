import React from "react";

const DayCell = ({ date, selectedDate, onClick }) => {
  if (!date) return <div />;

  const isSelected =
    selectedDate &&
    date.toDateString() === selectedDate.toDateString();

  return (
    <div
      onClick={() => onClick(date)}
      className={`h-16 rounded-xl border flex items-start justify-start p-2 cursor-pointer
        ${isSelected ? "border-blue-500" : "border-gray-800"}
        hover:border-blue-400`}
    >
      <span className="text-sm">{date.getDate()}</span>
    </div>
  );
};

export default DayCell;