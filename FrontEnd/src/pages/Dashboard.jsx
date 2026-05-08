import React from "react";
import Header from "../components/other/Header";
import TaskNumbers from "../components/other/TaskNumbers";
import TaskList from "../components/TaskList/TaskList";

const Dashboard = ({ name, tasks, changeUser, taskCounts }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Dashboard</h2>
        <button className="bg-sky-600 text-white px-4 py-2 rounded shadow hover:bg-sky-700">
          Generate Report
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-8">
        <Header changeUser={changeUser} user={name} />
        
        <div className="mt-8">
          <TaskNumbers taskCounts={taskCounts} />
        </div>

        <div className="mt-8">
          <TaskList tasks={tasks} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
