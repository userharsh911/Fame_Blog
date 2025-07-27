import { useState,useEffect } from 'react'
import authService from './services/authService.js';
import { login } from './features/authSlice.jsx';
import {useDispatch} from "react-redux"
import {Outlet} from "react-router-dom"
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const [loader, setLoader] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
    .then((user) => {
      // console.log('user : ',user)
      if(user) {
        dispatch(login(user));
      }
    })
    .finally(() => {
      setLoader(false);
    })
  }, []);

  if(!loader) {
    return (
      <div className="min-h-screen bg-gray-150 dark:bg-gray-700">
        
        <Header />
          <main className="container mx-auto px-4 py-8 max-w-7xl">
            <div className=" bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md p-6">
            <Outlet />
            </div>
          </main>
        <Footer/>
      </div>
    )
  }else{
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-400">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
      </div>
    )
  }
}

export default App
