import React from 'react'
import GetAllCards from '../components/GetAllCards/GetAllCards'
import { useSelector } from 'react-redux'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const authStatus = useSelector(state=> state.isAuthenticated)
    const navigate = useNavigate()
  return (
    <div className="min-h-screen md:bg-gray-100 md:dark:bg-gray-600 py-8 px-1 md:px-4 lg:px-8">
      {!authStatus ? (
        <div className="max-w-7xl mx-auto font-serif">
          <p className="text-center text-gray-800 dark:text-white mb-4 text-3xl">
            Please login first to open the read more section of the posts.
            <br />
          </p>
          <p className="text-center text-gray-800 dark:text-white mb-4 text-xl">
            You can also create a post if you want to share your thoughts with the world.
          </p>
          <p className="text-center text-gray-800 dark:text-white mb-4 text-lg">
            Happy Blogging!
          </p>
          <p className="text-center text-gray-800 dark:text-white mb-4 text-lg">
            <Button onClick={()=>navigate('/login')} className="text-blue-500 hover:underline">
              Login
            </Button>  or
            <Button onClick={()=>navigate('/signup')} className="text-blue-500 hover:underline ml-2">
              Register 
            </Button>
          </p>
        </div>
      ):''}
      <GetAllCards/>
    </div>
  )

}

export default Home