import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import authService from '../services/authService';
import { login } from '../features/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
const Signup = () => {
    const dispatch = useDispatch()
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm();
    const signup = async (data)=>{
        setError('')
        try {
            const userData = await authService.createAccount(data);
            if(userData){
                const currentUser = await authService.getCurrentUser();
                if(currentUser){
                    dispatch(login(currentUser))
                    navigate("/")
                }else navigate('/login')
            }else navigate('/signup')
        } catch (error) {
            setError(error)
        }
    }
return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900">Sign Up</h1>
            </div>
            <div>
                {error && (
                    <p className="text-red-500 text-center">{error}</p>
                )}
            </div>
            <div>
                <form onSubmit={handleSubmit(signup)} className="space-y-4">
                    <Input 
                        label="Name : "
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="john doe"
                        {...register('name',{
                            required:true
                        })}
                    />
                    <Input 
                        label="Email : "
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="johndoe@john.com"
                        {...register('email',{
                            required:true,
                            validate: (value)=> /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ||
                            "Email address must be a valid address"
                        })}
                    />
                    <Input 
                        label="Password : "
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="password"
                        type="password"
                        {...register('password',{
                            required:true
                        })}
                    />
                    <Button
                        type='submit'
                        className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200'
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </div>
    </div>
)
}

export default Signup