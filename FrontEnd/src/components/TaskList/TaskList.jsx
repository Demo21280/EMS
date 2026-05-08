import React from 'react'

const TaskList = ({ tasks }) => {
    return (
        <div id='tasklist' className='h-auto overflow-x-auto flex items-start justify-start gap-5 flex-nowrap w-full py-6 mt-8'>
            {tasks.map((task, index) => {
                return (
                    <div key={index} className={`flex-shrink-0 h-full w-[300px] p-6 rounded-lg border shadow-md hover:shadow-lg transition-shadow ${task.theam}`}>
                <div className='flex justify-between items-start gap-2'>
                    <h3 className='bg-sky-600 text-white text-xs px-3 py-1 rounded font-medium'>{task.category}</h3>
                    <h4 className='text-xs text-gray-100 font-medium'>{task.taskDate}</h4>
                </div>
                <h2 className='text-lg font-bold mt-4 line-clamp-2 text-gray-900'>{task.taskTitle}</h2>
                <p className='text-sm text-gray-700 mt-3 line-clamp-3'>{task.taskDescription} </p>
                <div className='flex gap-2 mt-4 justify-start'>
                    <button className='text-xs px-3 py-1 rounded bg-white text-gray-700 hover:bg-gray-100 transition-colors font-medium border border-gray-300'>Accept</button>
                </div>
            </div>  
            )})}
            
        </div>
    )
}

export default TaskList