import React from 'react'

const Alltasks = () => {
  return (
    <div>
        <div className='bg-sky-600 text-white mb-2 mx-0 py-3 px-4 flex justify-between rounded-lg font-semibold'>
            <h2 className='text-sm w-1/5'>Employee Name</h2>
            <h3 className='text-sm w-1/5'>New Task</h3>
            <h5 className='text-sm w-1/5'>Active Task</h5>
            <h5 className='text-sm w-1/5'>Completed</h5>
            <h5 className='text-sm w-1/5'>Failed</h5>
        </div>
        <div id='tasklist' className='bg-white border border-gray-200 p-4 rounded-lg mb-5 mt-1 max-h-96 w-full overflow-auto'>
        
        <div className='border border-gray-300 mb-3 py-3 px-4 flex justify-between rounded-lg hover:bg-gray-50 transition-colors'>
            <h2 className='text-sm font-medium w-1/5 text-gray-700'>John Doe</h2>
            <h3 className='text-sm font-medium w-1/5 text-sky-600'>5</h3>
            <h5 className='text-sm font-medium w-1/5 text-amber-500'>3</h5>
            <h5 className='text-sm font-medium w-1/5 text-green-600'>2</h5>
            <h5 className='text-sm font-medium w-1/5 text-red-600'>0</h5>
        </div>
        <div className='border border-gray-300 mb-3 py-3 px-4 flex justify-between rounded-lg hover:bg-gray-50 transition-colors'>
            <h2 className='text-sm font-medium w-1/5 text-gray-700'>Sarah Smith</h2>
            <h3 className='text-sm font-medium w-1/5 text-sky-600'>3</h3>
            <h5 className='text-sm font-medium w-1/5 text-amber-500'>2</h5>
            <h5 className='text-sm font-medium w-1/5 text-green-600'>1</h5>
            <h5 className='text-sm font-medium w-1/5 text-red-600'>1</h5>
        </div>
        <div className='border border-gray-300 mb-3 py-3 px-4 flex justify-between rounded-lg hover:bg-gray-50 transition-colors'>
            <h2 className='text-sm font-medium w-1/5 text-gray-700'>John Doe</h2>
            <h3 className='text-sm font-medium w-1/5 text-sky-600'>5</h3>
            <h5 className='text-sm font-medium w-1/5 text-amber-500'>3</h5>
            <h5 className='text-sm font-medium w-1/5 text-green-600'>2</h5>
            <h5 className='text-sm font-medium w-1/5 text-red-600'>0</h5>
        </div>
        <div className='border border-gray-300 mb-3 py-3 px-4 flex justify-between rounded-lg hover:bg-gray-50 transition-colors'>
            <h2 className='text-sm font-medium w-1/5 text-gray-700'>Sarah Smith</h2>
            <h3 className='text-sm font-medium w-1/5 text-sky-600'>3</h3>
            <h5 className='text-sm font-medium w-1/5 text-amber-500'>2</h5>
            <h5 className='text-sm font-medium w-1/5 text-green-600'>1</h5>
            <h5 className='text-sm font-medium w-1/5 text-red-600'>1</h5>
        </div>

        </div>
    </div>
  )
}

export default Alltasks