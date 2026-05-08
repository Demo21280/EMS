import React, { useState } from 'react'
import axios from 'axios';

const CreateTask = () => {
  const [formData, setFormData] = useState({
    taskTitle: '',
    taskDate: '',
    category: '',
    taskDescription: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.taskTitle || !formData.taskDate || !formData.category || !formData.taskDescription) {
      setMessage('Please fill in all fields');
      setMessageType('error');
      return;
    }

    setLoading(true);
    
    try {
      await axios.post('http://localhost:3000/user/create-task-all', {
        taskTitle: formData.taskTitle,
        taskDescription: formData.taskDescription,
        taskDate: formData.taskDate,
        category: formData.category
      });

      setMessage('Task created successfully for all employees!');
      setMessageType('success');
      
      setFormData({
        taskTitle: '',
        taskDate: '',
        category: '',
        taskDescription: ''
      });

      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage(error.response?.data || 'Error creating task');
      setMessageType('error');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-50 mt-5 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700 mb-6">Create New Task</h3>
        
        {message && (
          <div className={`mb-6 p-4 rounded-lg ${
            messageType === 'success'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-wrap w-full items-start justify-between gap-6">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Task Title</h3>
              <input
                name="taskTitle"
                value={formData.taskTitle}
                onChange={handleChange}
                className="text-sm py-2 px-3 w-4/5 rounded border border-gray-300 outline-none bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-200 mb-4"
                type="text"
                placeholder="Make a UI design"
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Date</h3>
              <input
                name="taskDate"
                value={formData.taskDate}
                onChange={handleChange}
                className="text-sm py-2 px-3 w-4/5 rounded border border-gray-300 outline-none bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-200 mb-4"
                type="date"
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Category</h3>
              <input
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="text-sm py-2 px-3 w-4/5 rounded border border-gray-300 outline-none bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-200 mb-4"
                type="text"
                placeholder="design, dev, etc"
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Description</h3>
            <textarea 
              name="taskDescription"
              value={formData.taskDescription}
              onChange={handleChange}
              className="w-full h-44 text-sm py-2 px-4 rounded border border-gray-300 outline-none bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-200"
            ></textarea>
            <button 
              type="submit"
              disabled={loading}
              className="bg-sky-600 text-white py-3 hover:bg-sky-700 px-5 rounded text-sm mt-4 w-full font-medium transition-colors disabled:opacity-50"
            >
              {loading ? 'Creating...' : 'Create Task'}
            </button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask