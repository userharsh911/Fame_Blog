import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const AuthLayout = ({children,Authentication=false}) => {
    const authStatus = useSelector(state=>state.isAuthenticated)
    const navigate = useNavigate();
    useEffect(()=>{
        if(authStatus!=Authentication) navigate('/')
    },[authStatus,Authentication])
    
    if(authStatus==Authentication){
        return (
            <>
                {children}
            </>
        )
    }else null
}

export default AuthLayout