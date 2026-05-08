import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/other/Header";
import CreateTask from "../components/other/CreateTask";
import Alltasks from "../components/other/Alltasks";

const AdminPage = () => {
  const [user, setUser] = useState("Admin");
  const [allTasks, setAllTasks] = useState([]);
  const [allEmployees, setAllEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const changeUser = (newUser) => {
    setUser(newUser);
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const fetchAllTasks = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/user");
      if (response.ok) {
        const employees = await response.json();
        setAllEmployees(employees);

        if (employees.length > 0 && employees[0].tasks && Array.isArray(employees[0].tasks)) {
          const firstEmployeeTasks = employees[0].tasks.map((task, taskIndex) => ({
            ...task,
            employeeId: employees[0]._id,
            employeeName: employees[0].name,
            taskIndex: taskIndex,
          }));
          setAllTasks(firstEmployeeTasks);
        } else {
          setAllTasks([]);
        }
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTask = async (employeeId, taskIndex) => {
    try {
      const deletePromises = allEmployees.map((employee) =>
        fetch(`http://localhost:3000/user/${employee._id}/tasks/${taskIndex}`, {
          method: "DELETE",
        })
      );

      const results = await Promise.all(deletePromises);
      const allSuccess = results.every((response) => response.ok);

      if (allSuccess) {
        alert("Task deleted successfully from all employees");
        fetchAllTasks();
      } else {
        alert("Task deleted successfully from all employees");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleUpdateTask = (task) => {
    setEditingTask(task);
    setEditFormData({
      taskTitle: task.taskTitle,
      taskDescription: task.taskDescription,
      taskDate: task.taskDate,
      category: task.category,
      active: task.active,
      completed: task.completed,
      failed: task.failed,
    });
  };

  const handleSaveUpdate = async () => {
    try {
      const updatePromises = allEmployees.map((employee) =>
        fetch(`http://localhost:3000/user/${employee._id}/tasks/${editingTask.taskIndex}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editFormData),
        })
      );

      const results = await Promise.all(updatePromises);
      const allSuccess = results.every((response) => response.ok);

      if (allSuccess) {
        alert("Task updated successfully for all employees");
        setEditingTask(null);
        fetchAllTasks();
      } else {
        alert("Failed to update task for some employees");
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
    setEditFormData({});
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Admin Panel</h2>
        <button className="bg-sky-600 text-white px-4 py-2 rounded shadow hover:bg-sky-700">
          <Link to="/settings">Settings</Link>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-8">
        <Header changeUser={changeUser} user={user} />

        <div className="mt-8">
          <CreateTask onTaskCreated={fetchAllTasks} />
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">
            {allEmployees.length > 0
              ? `Tasks`
              : "Tasks"}
          </h3>

          {loading ? (
            <div className="text-center text-gray-600">Loading tasks...</div>
          ) : allTasks.length === 0 ? (
            <div className="text-center text-gray-600">No tasks available</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-sky-600 text-white">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Title</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Description
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Date</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Category
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Status</th>
                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {allTasks.map((task, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        {task.taskTitle}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">
                        {task.taskDescription.substring(0, 40)}...
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {task.taskDate}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {task.category}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <span
                          className={`px-3 py-1 rounded text-white text-xs font-semibold ${
                            task.completed
                              ? "bg-green-500"
                              : task.failed
                              ? "bg-red-500"
                              : task.active
                              ? "bg-yellow-500"
                              : "bg-blue-500"
                          }`}
                        >
                          {task.completed
                            ? "Completed"
                            : task.failed
                            ? "Failed"
                            : task.active
                            ? "Active"
                            : "New"}
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          onClick={() => handleUpdateTask(task)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2 text-sm"
                        >
                          Update
                        </button>
                        <button
                          onClick={() =>
                            handleDeleteTask(task.employeeId, task.taskIndex)
                          }
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>


        {editingTask && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
              <h3 className="text-xl font-bold mb-4">Update Task</h3>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Task Title
                </label>
                <input
                  type="text"
                  value={editFormData.taskTitle}
                  onChange={(e) =>
                    setEditFormData({
                      ...editFormData,
                      taskTitle: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Description
                </label>
                <textarea
                  value={editFormData.taskDescription}
                  onChange={(e) =>
                    setEditFormData({
                      ...editFormData,
                      taskDescription: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  rows="3"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Date</label>
                <input
                  type="date"
                  value={editFormData.taskDate}
                  onChange={(e) =>
                    setEditFormData({
                      ...editFormData,
                      taskDate: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Category
                </label>
                <input
                  type="text"
                  value={editFormData.category}
                  onChange={(e) =>
                    setEditFormData({
                      ...editFormData,
                      category: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div className="mb-4 space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={editFormData.active}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        active: e.target.checked,
                      })
                    }
                    className="mr-2"
                  />
                  Active
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={editFormData.completed}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        completed: e.target.checked,
                      })
                    }
                    className="mr-2"
                  />
                  Completed
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={editFormData.failed}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        failed: e.target.checked,
                      })
                    }
                    className="mr-2"
                  />
                  Failed
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleSaveUpdate}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="flex-1 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminPage;
