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
  }
}

export default PostEdit