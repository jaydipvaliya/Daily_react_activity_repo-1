import React from "react";

const Sidebar = ({ selectedDate }) => {
  return (
    <div className="w-80 bg-[#111] border border-gray-800 rounded-2xl p-5">
      
      {/* Date */}
      <h2 className="text-lg font-semibold mb-4">
        {selectedDate.toLocaleDateString()}
      </h2>

      {/* Events */}
      <Section title="Events" content="No events." />

      {/* Leaves */}
      <Section title="Leaves" content="No leaves." />

      {/* Attendance */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Attendance</h3>
        <ul className="text-sm text-gray-300 space-y-1">
          {["OOPS(C++)","Maths 2","NodeJS","ReactJS"].map((sub, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              {sub} — present
            </li>
          ))}
        </ul>
      </div>

      {/* Assignments */}
      <Section title="Assignments" content="None due." />
    </div>
  );
};

const Section = ({ title, content }) => (
  <div className="mb-4">
    <h3 className="font-medium mb-1">{title}</h3>
    <p className="text-sm text-gray-400">{content}</p>
  </div>
);

export default Sidebar;