import React, { useState } from 'react'
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import Button from '../Button'
import LogoutBtn from '../LogoutBtn'
import Admin from '../Admin/Admin'
const Header = () => {
    const navigate = useNavigate()
    const [isDark,setIsDark] = useState()
    const authStatus = useSelector(state => state.isAuthenticated)
    const user = useSelector(state => state.user)
    
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
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
};

return (
    <header className="bg-zinc-200 dark:bg-gray-800 shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-4">
                    {user ? <Admin user={user} onClick={()=>navigate(`/admin/${user.$id}`)}/> : null}
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

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
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

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleSidebar}
                    className="md:hidden p-2 text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isSidebarOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>
        </div>

        {/* Mobile Sidebar */}
        <div className={`md:hidden fixed inset-0 z-40 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <div className="fixed inset-0" onClick={toggleSidebar}></div>
            <div className="fixed inset-y-0 left-0 w-64 bg-zinc-200 dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out">
                <div className="p-4">
                    <ul className="space-y-4">
                        {navItems.map(
                            (item) =>
                                item.active && (
                                    <li key={item.name}>
                                        <Button
                                            onClick={() => {
                                                navigate(item.navTo);
                                                toggleSidebar();
                                            }}
                                            className="w-full px-4 py-2 cursor-pointer text-black dark:text-gray-100 hover:text-blue-400 dark:hover:text-blue-300 rounded-md transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                        >
                                            {item.name}
                                        </Button>
                                    </li>
                                )
                        )}
                        {authStatus && (
                            <LogoutBtn className="w-full px-4 py-2 bg-red-600 dark:bg-red-700 text-white rounded-md hover:bg-red-700 dark:hover:bg-red-800 transition duration-300 cursor-pointer" toggleSidebar={toggleSidebar} />
                        )}
                        {user ? <Admin user={user} onClick={()=>{
                                    navigate(`/admin/${user.$id}`);
                                    toggleSidebar();
                                }}/> : null}
                    </ul>
                </div>
            </div>
        </div>
    </header>
);
}

export default Header