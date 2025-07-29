import { useState,useEffect } from 'react'
import authService from './services/authService.js';
import { login } from './features/authSlice.jsx';
import {useDispatch} from "react-redux"
import {Outlet} from "react-router-dom"
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const [loader, setLoader] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
    .then((user) => {
      // console.log('user : ',user)
      if(user) {
        dispatch(login(user));
      }else{
        // console.log("user not exist please login or sign up first ")
      }
    })
    .finally(() => {
      setLoader(false);
    })
  }, []);

  if(!loader) {
    return (
      <div className="min-h-screen  bg-gray-150 dark:bg-gray-700">
        
        <Header />
          <main className="container mx-auto py-8 max-w-7xl">
            <div className=" bg-gray-200 bg-radial dark:from-gray-800 dark:to-gray-950 rounded-lg shadow-md p-6">
            <Outlet />
            </div>
          </main>
        <Footer/>
      </div>
    )
  }else{
    return (
      <div className="flex items-center justify-center bg-gray-400">
        <div className="animate-spin rounded-full h-24 w-24 border-t-8 border-blue-600"></div>
      </div>
    )
  }
}

export default App
