import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import articleService from '../services/articles';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import Button from '../components/Button';
const PostCardDetails = () => {
    const [loader, setLoader] = useState(false)
    const {postid} = useParams();
    const userData = useSelector(state=> state.user)
    const navigate = useNavigate();
    const [post, setPost] = useState(null)
    const [file, setFile] = useState(null)
    
    useEffect(()=>{
        articleService.getAPost(postid).then(post=>{
            setPost(post)
            const response = articleService.getFilePreview(post.featuredImage)
            setFile(response)
        })
    },[])
    const deletePost = async (id)=>{
      if(loader) return;
      setLoader(true)
      const post = await articleService.getAPost(id)
      if(post){
        const delFile = await articleService.deleteFile(post.featuredImage)
        console.log("image deleted succesfully : ",delFile)
      }
      const delPost = await articleService.deletePost(id)
      if(delPost){
        console.log("post deleted sucessfully ")
        console.log("deleted post : ",delPost)
        navigate("/home")
      }
      setLoader(false)
    }
  if(post && file){
    return (
      <div className="min-h-screen bg-gradient-to-r from-gray-90000 dark:to-gray-900 py-8 px-4">
        {post.userid === userData.$id && (
          <div className="max-w-4xl mx-auto mb-6 flex gap-4">
            <Button
              className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-lg transition-colors duration-200"
              onClick={() => navigate(`/post/edit/${post.$id}`)}
            >
              Edit
            </Button>
            <Button
              className={`bg-red-500 ${loader ? 'cursor-progress' : 'cursor-pointer'} hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors duration-200`}
              onClick={() => deletePost(post.$id)}
            >
              {loader ? 'Deleting...' : 'Delete'}
            </Button>
          </div>
        )}
        <div className='max-w-4xl mx-auto '>
          <div>
            <h2 className="font-bold text-3xl py-2 mb-4 text-gray-800  dark:text-gray-100 transition-colors duration-200">
              {post.title}
            </h2>
          </div>
        <div className=" mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="relative aspect-video w-full overflow-hidden">
            <img 
              src={file + '&mode=admin'} 
              alt={post.title} 
              className="absolute inset-0 w-full h-full object-contain md:object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="px-8 py-6 bg-gradient-to-r dark:from-gray-700 from-5% dark:via-gray-800 via-30% dark:to-gray-950 to-90%">
            
            <div className="prose prose-lg max-w-none pt-10 text-gray-700 dark:text-gray-300">
              {parse(post.content)}
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
  else{
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-400">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
      </div>
    )
  }
}

export default PostCardDetails