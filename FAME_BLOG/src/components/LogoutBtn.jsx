import React from 'react'
import { logout as authLogout } from '../features/authSlice'
import authService from '../services/authService'
import { useDispatch } from 'react-redux'
const LogoutBtn = ({className}) => {
    const dispatch = useDispatch();
    const logout = ()=>{
        authService.logout()
        .then(()=>{
          console.log("logout successfully ")
            dispatch(authLogout())
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