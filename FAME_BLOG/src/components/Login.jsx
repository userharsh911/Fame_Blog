import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import authService from '../services/authService'
import { login as authLogin } from '../features/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Input from './Input'
import Button from './Button'
const Login = () => {
    const [error, setError] = useState('');
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch()
    const login = async (data)=>{
        setLoader(true)
        setError('')
        try {
            const session = await authService.login(data)
            if(session){
                const currentUser = await authService.getCurrentUser()
                if(currentUser){
                    dispatch(authLogin(currentUser))
                    console.log("user logged in successfully ",currentUser)
                    navigate('/')
                }else navigate('/login')
            }else navigate('/login')
        } catch (error) {
            setError(error.message || "Login failed, please try again.")
        }
        setLoader(false)
    }
return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl transform hover:scale-[1.01] transition-all duration-300">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome Back</h1>
            
            {error && (
                <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-red-500 text-center font-medium">{error}</p>
                </div>
            )}
            
            <form onSubmit={handleSubmit(login)} className="space-y-6">
                <Input
                    label="Email"
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                    {...register('email', {
                        required: true
                    })}
                />
                <Input
                    label="Password"
                    type="password"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your password"
                    {...register('password', {
                        required: true
                    })}
                />
                <Button
                    type='submit'
                    className={`w-full cursor-pointer py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 ${loader ? 'cursor-progress opacity-50' : 'cursor-pointer'}`}
                >
                    {loader ? 'Signing in...' : 'Sign In'}
                </Button>
            </form>
            
            <div className="text-center text-gray-600">
                <p ><label className='cursor-pointer' htmlFor="login">Don't have an account?</label> {' '}
                    <Button 
                        onClick={() => navigate('/signup')}
                        className="text-blue-500 cursor-pointer font-medium hover:text-blue-600 transition-colors duration-200"
                        id="login"
                    >
                        Sign up
                    </Button>
                </p>
            </div>

            {loader && (
                <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            )}
        </div>
    </div>
)
}

export default Login