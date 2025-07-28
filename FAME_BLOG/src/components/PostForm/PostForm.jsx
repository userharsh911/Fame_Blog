import React, { useEffect, useState } from 'react'
import { set, useForm } from 'react-hook-form'
import articleService from '../../services/articles'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Input from '../Input'
import RTE from '../RTE'
import Select from '../Select'
const PostForm = (post) => {
  const [slugValue,setSlugValue] = useState('')
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate();
  const userData = useSelector(state => state.user)
    const {register,handleSubmit,control, getValues, setValue,watch} = useForm({
      defaultValues : {
        title : post?.title || '',
        content : post?.content || '',
        featuredImage : post?.featuredImage || '',
        status : post?.status || ''
      }
    })

    const submitForm = async (data) => {
      setLoader(true)
      if(post.title){
        const file =  data.featuredImage[0] ? await articleService.uploadFile((data.featuredImage[0])) : null;
        if(file){
          await articleService.deleteFile(post.featuredImage)
          const uptPost = await articleService.updatePost(
            post.$id,
            {...data,
              featuredImage: file.$id
            }
            
          )
          uptPost ? navigate(`/post/${post.$id}`) : null
        }
      }else{
        const file =  data.featuredImage[0] ? await articleService.uploadFile((data.featuredImage[0])) : null;
        const slug = slugValue
        if(file){
          data.featuredImage = file.$id;
          const userPost = await articleService.createPost({
            ...data,
            slug,
            userid : userData.$id,

          })
          userPost ? navigate(`/post/${slug}`) : null 
        }
      }
      setLoader(false)
    }

    useEffect(()=>{
      watch((values)=>{
        setSlugValue(
          values.title.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        )
      })
      setSlugValue(
          getValues("title").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        )
    },[watch])
  return (
    <div className="dark:bg-gray-800">
      <form className="p-4">
      <div className="mb-4">
        <Input 
        type="text"
        label="Title"
        placeholder="Enter post title"
        {...register('title', { required: true })} 
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
        />
      </div>
      <div className="mb-4">
        <Input 
        type="text"
        label="Slug"
        placeholder="Slug"
        readOnly
        value={slugValue}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
        />
      </div>
      <div className="mb-4 dark:text-gray-200">
        <RTE name="content" control={control} label="Content" defaultValue={post?.content || ''} />
      </div>
      <div className="mb-4">
        <Input 
        type="file"
        label="Image"
        {...register('featuredImage', { required: true })} 
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
        accept="image/*"
        />
      </div>
      <div className="mb-4">
        <Select 
        label="Status"
        options={['Draft', 'Published']}
        {...register('status', { required: true })} 
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
        />
      </div>
      <button 
        type="submit" 
        onClick={handleSubmit(submitForm)} 
        className={`bg-blue-500 hover:bg-blue-600 ${loader ? 'cursor-progress' : 'cursor-pointer'} text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 dark:bg-blue-600 dark:hover:bg-blue-700`}
      >
        {post.title ? 'Update Post' : 'Create Post'}{loader ? '...':''}
      </button>
      <div>
        {
          loader && (
            <div className="flex items-center justify-center mt-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
            </div>
          )
        }
      </div>
      </form>
    </div>
  )
}

export default PostForm