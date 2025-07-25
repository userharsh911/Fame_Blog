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
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch()
    const login = async (data)=>{
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
            setError(error)
        }
    }
return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>
            
            {error && (
                <p className="text-red-500 text-center">{error}</p>
            )}
            
            <form onSubmit={handleSubmit(login)} className="space-y-4">
                <Input
                    label="Email : "
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="johndoe@john.com"
                    {...register('email',{
                        required:true
                    })}
                />
                <Input
                    label="Password : "
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                    {...register('password',{
                        required:true
                    })}
                />
                <Button
                    type='submit'
                    className='w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300'
                >
                    Login
                </Button>
            </form>
        </div>
    </div>
)
}

export default Login