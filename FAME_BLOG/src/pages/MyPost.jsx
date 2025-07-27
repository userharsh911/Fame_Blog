import React from 'react'
import GetAllCards from '../components/GetAllCards/GetAllCards'
import { Query } from 'appwrite'
import { useSelector } from 'react-redux'
const MyPost = () => {
    const {$id} = useSelector(state=>state.user)
  return (
    <>
        <GetAllCards query={[Query.equal("userid",$id)]}/>
    </>
  )
}

export default MyPost