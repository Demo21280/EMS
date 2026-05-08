import React, { useState, useEffect } from "react";
import axios from "axios";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  // Fetch employees on component mount
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/user');
      setEmployees(response.data);
      console.log('Employees fetched:', response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
      setMessage('Error fetching employees');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddEmployee = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      setMessage('Please fill in all fields');
      setMessageType('error');
      return;
    }

    if (formData.password.length < 3) {
      setMessage('Password must be at least 3 characters');
      setMessageType('error');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/user/add-employee', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });

      setMessage('Employee added successfully!');
      setMessageType('success');
      
      // Add new employee to list
      setEmployees([...employees, response.data]);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        password: ''
      });

      // Close modal after 2 seconds
      setTimeout(() => {
        setShowModal(false);
        setMessage('');
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data || 'Error adding employee');
      setMessageType('error');
      console.error('Error:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ name: '', email: '', password: '' });
    setMessage('');
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Employees</h2>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-sky-600 text-white px-4 py-2 rounded shadow hover:bg-sky-700"
        >
          Add Employee
        </button>
      </div>

      {loading ? (
        <div className="text-center text-gray-600 py-8">Loading employees...</div>
      ) : employees.length === 0 ? (
        <div className="text-center text-gray-600 py-8">No employees found</div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-sky-600 to-sky-700 text-white">
                <th className="px-6 py-4 text-left font-semibold">Employee Name</th>
                <th className="px-6 py-4 text-left font-semibold">Email</th>
                <th className="px-6 py-4 text-center font-semibold">New Task</th>
                <th className="px-6 py-4 text-center font-semibold">Active Task</th>
                <th className="px-6 py-4 text-center font-semibold">Completed</th>
                <th className="px-6 py-4 text-center font-semibold">Failed</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr
                  key={employee._id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-700 font-medium">
                    {employee.name}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {employee.email}
                  </td>
                  <td className="px-6 py-4 text-center text-sky-600 font-bold text-lg">
                    {employee.taskCounts?.newTask || 0}
                  </td>
                  <td className="px-6 py-4 text-center text-amber-500 font-bold text-lg">
                    {employee.taskCounts?.active || 0}
                  </td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold text-lg">
                    {employee.taskCounts?.completed || 0}
                  </td>
                  <td className="px-6 py-4 text-center text-red-600 font-bold text-lg">
                    {employee.taskCounts?.failed || 0}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add Employee Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Employee</h2>

            {message && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  messageType === 'success'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {message}
              </div>
            )}

            <form onSubmit={handleAddEmployee} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Employee name"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-200 transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="employee@example.com"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-200 transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-200 transition-all"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-sky-700 transition-colors"
                >
                  Add Employee
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Employees;
