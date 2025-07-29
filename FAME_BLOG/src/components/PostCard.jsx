import React from 'react'
import articleService from '../services/articles'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
const PostCard = ({$id, title, featuredImage}) => {
        const authStatus = useSelector(state => state.isAuthenticated)
    const navigate = useNavigate();
return (
    <div className="max-w-sm border-2 w-full bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-lg mx-auto overflow-hidden shadow-lg shadow-gray-900 bg-white transition-colors duration-200">
            <div className="relative h-48 overflow-hidden">
                    <img 
                            src={articleService.getFilePreview(featuredImage)} 
                            alt={title} 
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
            </div>
            <div className="px-6 py-4">
                    <h2 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-100">{title}</h2>
            </div>
            <div className="px-6 pb-4">
                    <button
                        disabled={authStatus ? false : true}
                        onClick={() => navigate(`/post/${$id}`)}
                        className={`bg-blue-500 ${authStatus ? 'cursor-pointer' : 'cursor-not-allowed'} hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 dark:bg-blue-600 dark:hover:bg-blue-700`}
                    >
                        Read More
                    </button>
            </div>
    </div>
)
}

export default PostCard