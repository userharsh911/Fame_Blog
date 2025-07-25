import React from 'react'
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import Button from '../Button'
import LogoutBtn from '../LogoutBtn'
const Header = () => {
    const navigate = useNavigate()
    const authStatus = useSelector(state => state.isAuthenticated)
    const navItems = [
        {
            name:"Home",
            navTo:'/',
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
            navTo:"/add_post",
            active : authStatus
        },
    ]
return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-gray-800 hover:text-blue-600 cursor-pointer">
                        Logo
                    </h1>
                </div>
                <nav>
                    <ul className="flex items-center space-x-4">
                        {navItems.map(
                            (item) =>
                                item.active && (
                                    <li key={item.name}>
                                        <Button
                                            onClick={() => navigate(item.navTo)}
                                            className="px-4 py-2 cursor-pointer text-gray-700 hover:text-blue-600 rounded-md transition duration-300 hover:bg-gray-100"
                                        >
                                            {item.name}
                                        </Button>
                                    </li>
                                )
                        )}
                        {authStatus && (
                            <LogoutBtn className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 cursor-pointer" />
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    </header>
);
}

export default Header