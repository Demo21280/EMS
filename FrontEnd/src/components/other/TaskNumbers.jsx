import React from 'react'

const TaskNumbers = ({ taskCounts }) => {

  return (
    <div className='flex justify-between gap-5 mt-8'>
        <div className="flex-1 bg-gradient-to-br from-sky-50 to-sky-100 border border-sky-200 rounded-lg py-6 px-6">
            <h1 className='text-3xl font-bold text-sky-600'>{taskCounts.newTask}</h1>
            <h1 className='text-sm font-medium text-gray-600 mt-2'>New Task</h1>
        </div>
        <div className="flex-1 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg py-6 px-6">
            <h1 className='text-3xl font-bold text-green-600'>{taskCounts.active}</h1>
            <h1 className='text-sm font-medium text-gray-600 mt-2'>Active</h1>
        </div>
        <div className="flex-1 bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-lg py-6 px-6">
            <h1 className='text-3xl font-bold text-amber-600'>{taskCounts.completed}</h1>
            <h1 className='text-sm font-medium text-gray-600 mt-2'>Completed</h1>
        </div>
        <div className="flex-1 bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg py-6 px-6">
            <h1 className='text-3xl font-bold text-red-600'>{taskCounts.failed}</h1>
            <h1 className='text-sm font-medium text-gray-600 mt-2'>Failed</h1>
        </div>
    </div>
  )
}

export default TaskNumbers