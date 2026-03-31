import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import StudentDashboard from "./pages/studentDashboard";
import Attendance from "./pages/Attendance";
import Calendar from "./pages/Calendar";
import Chat from "./pages/Chat";
import SemesterAttendance from "./pages/SemesterAttendance";
import Feedback from "./pages/Feedback";
import WeeklySubjectFeedback from "./pages/WeeklySubjectFeedback";
import ApplyLeave from "./pages/ApplyLeave";
import ViewProfile from "./pages/ViewProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/semester-attendance" element={<SemesterAttendance />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/weekly-feedback" element={<WeeklySubjectFeedback />} />
      <Route path="/apply-leave" element={<ApplyLeave />} />
      <Route path="/profile" element={<ViewProfile />} />
    </Routes>
  );
}

export default App;