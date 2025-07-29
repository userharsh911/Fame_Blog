import React from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = ({user,...props}) => {
  return (
    <div className="flex items-center space-x-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm cursor-pointer" {...props}>
        <svg className="w-5 h-5 text-gray-500 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span className="font-medium text-gray-700 dark:text-gray-200">
            {user.name.toUpperCase()}
        </span>
    </div>
  )
}

export default Admin