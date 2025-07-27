import React, { useState } from 'react'
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import Button from '../Button'
import LogoutBtn from '../LogoutBtn'
const Header = () => {
    const navigate = useNavigate()
    const [isDark,setIsDark] = useState()
    const authStatus = useSelector(state => state.isAuthenticated)
    const navItems = [
        {
            name:"Home",
            navTo:'/home',
            active :true
        },
        {
            name :"Login",
            navTo:"/login",
            active : !authStatus
        },
        {
            name :"Signup",
            navTo:"/signup",
            active : !authStatus
        },
        {
            name :"Add Post",
            navTo:"/addpost",
            active : authStatus
        },
        {
            name :"My Post",
            navTo:"/mypost",
            active : authStatus
        },
    ]

    const darkToggle = () => {
        setIsDark(!isDark);
        document.getElementById('root').classList.toggle('dark');
    }
return (
    <header className="bg-zinc-200 dark:bg-gray-800 shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-4">
                        <h1 className="text-2xl font-bold text-black dark:text-gray-100 hover:text-blue-400 dark:hover:text-blue-300 cursor-pointer">
                            Logo
                        </h1>
                        <button
                            onClick={darkToggle}
                            className="relative cursor-pointer w-14 h-7 rounded-full bg-gray-700 dark:bg-gray-600 flex items-center transition-colors duration-300 focus:outline-none"
                        >
                            <div
                                className={`absolute left-1 transform transition-transform duration-300 flex items-center justify-center w-5 h-5 rounded-full bg-white dark:bg-gray-200 ${
                                    isDark ? 'translate-x-7' : 'translate-x-0'
                                }`}
                            >
                                {isDark ? (
                                    <span className="text-yellow-500 dark:text-yellow-400 text-xs">🌙</span>
                                ) : (
                                    <span className="text-yellow-500 dark:text-yellow-400 text-xs">☀️</span>
                                )}
                            </div>
                        </button>
                    </div>
                <nav>
                    <ul className="flex items-center space-x-4">
                        {navItems.map(
                            (item) =>
                                item.active && (
                                    <li key={item.name}>
                                        <Button
                                            onClick={() => navigate(item.navTo)}
                                            className="px-4 py-2 cursor-pointer text-black dark:text-gray-100 hover:text-blue-400 dark:hover:text-blue-300 rounded-md transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                        >
                                            {item.name}
                                        </Button>
                                    </li>
                                )
                        )}
                        {authStatus && (
                            <LogoutBtn className="px-4 py-2 bg-red-600 dark:bg-red-700 text-white rounded-md hover:bg-red-700 dark:hover:bg-red-800 transition duration-300 cursor-pointer" />
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    </header>
);
}

export default Header