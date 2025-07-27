import React, { useEffect, useState } from 'react'
import PostForm from '../components/PostForm/PostForm'
import { useParams } from 'react-router-dom'
import articleService from '../services/articles'

const PostEdit = () => {
    const {postid} = useParams()
    const [post, setPost] = useState(null)
    useEffect(()=>{
        articleService.getAPost(postid)
        .then(response=>{
            setPost(response)
        })
    },[])
  if(post){
    return (
        <div>
            <PostForm {...post}/>
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

export default PostEdit