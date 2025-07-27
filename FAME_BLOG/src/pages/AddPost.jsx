import React from 'react'
import PostForm from '../components/PostForm/PostForm'
const AddPost = () => {
return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-lg">
            <h1 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white '>Add New Post</h1>
            <PostForm />
            <div className="space-y-2 mt-4">
                    <p className='text-gray-400'>Fill out the form below to create a new post.</p>
                    <p className='text-gray-400'>Make sure to include a catchy title and engaging content to attract readers!</p>
                    <p className='text-gray-400'>You can also upload an image to make your post more visually appealing.</p>
                    <p className='text-gray-400'>Once you're done, click the "Submit" button to publish your post.</p>
                    <p className='text-gray-400'>Happy blogging!</p>
            </div>
    </div>
)
}

export default AddPost