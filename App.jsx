import './index.css';
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/dashboard";
import TasksPage from "./pages/TasksPage";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const updateTask = (updated) => {
    setTasks(tasks.map((t) => (t.id === updated.id ? updated : t)));
  };

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Header />

          <main className="p-6">

            <Routes>
              
              <Route path="/" element={
                <Dashboard
                  tasks={tasks}
                  onAddTask={addTask}
                  onDeleteTask={deleteTask}
                  onUpdateTask={updateTask}
                />
              } />

              <Route path="/tasks" element={
                <TasksPage
                  tasks={tasks}
                  onDeleteTask={deleteTask}
                  onUpdateTask={updateTask}
                />
              } />

              <Route path="/profile" element={<Profile />} />

            </Routes>

          </main>
        </div>
      </div>
    </Router>
  );
}
