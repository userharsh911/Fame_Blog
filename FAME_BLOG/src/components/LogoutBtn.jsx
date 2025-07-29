import React from 'react'
import { logout as authLogout } from '../features/authSlice'
import authService from '../services/authService'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const LogoutBtn = ({className,toggleSidebar}) => {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const logout = ()=>{
      toggleSidebar && toggleSidebar()
        authService.logout()
        .then(()=>{
          console.log("logout successfully ")
            dispatch(authLogout())
            navigate('/login')
        })
        .catch((err)=>{
            console.log("err while logout user ",err)
        })
    }
  return (
    <button className={`${className}`} onClick={logout}>Logout</button>
  )
}

export default LogoutBtn