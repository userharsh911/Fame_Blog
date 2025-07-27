import React, { useState } from 'react'
import { set, useForm } from 'react-hook-form'
import authService from '../services/authService';
import { login } from '../features/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
const SignupForm = () => {
    const dispatch = useDispatch()
    const [error, setError] = useState('')
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm();
    const signup = async (data)=>{
        setError('')
        setLoader(true)
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
            setError(error.message || "Signup failed, please try again.")
        }
        setLoader(false)
    }
return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800">
        <div className="w-full max-w-md p-8 space-y-6 bg-blue-100 dark:bg-gray-800 rounded-xl shadow-2xl transform hover:scale-[1.01] transition-all duration-300">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Sign Up</h1>
            </div>
            <div>
                {error && (
                    <p className="text-red-600 dark:text-red-400 text-center">{error}</p>
                )}
            </div>
            <div>
                <form onSubmit={handleSubmit(signup)} className="space-y-4">
                    <Input 
                        label="Name : "
                        className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="john doe"
                        {...register('name',{
                            required:true
                        })}
                    />
                    <Input 
                        label="Email : "
                        className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="johndoe@john.com"
                        {...register('email',{
                            required:true,
                            validate: (value)=> /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ||
                            "Email address must be a valid address"
                        })}
                    />
                    <Input 
                        label="Password : "
                        className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="password"
                        type="password"
                        {...register('password',{
                            required:true
                        })}
                    />
                    <Button
                        type='submit'
                        className={`w-full cursor-pointer py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 ${loader ? 'cursor-progress opacity-50' : 'cursor-pointer'}`}
                    >
                        {loader ? 'Signing up...' : 'Sign Up'}
                    </Button>
                </form>
            </div>
            <div>
                {
                loader && (
                        <div className="flex items-center justify-center mt-4">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
                        </div>
                    )
                }
            </div>
            <div>
                <p className="text-center text-gray-600 dark:text-gray-400">
                    <label htmlFor="signup" className='cursor-pointer'>Already have an account?</label> {' '}
                    <Button 
                        onClick={() => navigate('/login')}
                        className="text-blue-600 dark:text-blue-400 cursor-pointer hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200"
                        id="signup"
                    >
                        Log In
                    </Button>
                </p>
            </div>
        </div>
    </div>
)
}

export default SignupForm