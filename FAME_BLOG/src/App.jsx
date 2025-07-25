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
    console.log(":andar")
    authService.getCurrentUser()
    .then((user) => {
      console.log(user)
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
      <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="bg-white rounded-lg shadow-md p-6">
        <Outlet />
        </div>
      </main>
      <Footer/>
      {/* Other components can be added here */}
      </div>
    )
  }else null
}

export default App
