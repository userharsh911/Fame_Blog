import React from 'react'
import GetAllCards from '../components/GetAllCards/GetAllCards'
import { useSelector } from 'react-redux'

const Home = () => {
  const isAuthenticated = useSelector(state=> state.isAuthenticated)
  if(isAuthenticated)return (
    <>
      <GetAllCards/>
    </>
  )
   return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 transform hover:scale-105 transition-transform duration-300">
      Please log in to view the posts
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md text-center leading-relaxed animate-pulse">
      You need to be authenticated to access the home page
      </p>
      <div className="mt-8 w-16 h-1 bg-blue-500 rounded-full transform hover:scale-x-150 transition-transform duration-300"></div>
    </div>
    )
}

export default Home