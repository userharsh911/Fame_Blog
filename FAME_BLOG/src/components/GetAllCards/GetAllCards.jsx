import React, { useEffect, useState } from 'react'
import PostCard from '../PostCard'
import articleService from '../../services/articles'
const GetAllCards = ({query}) => {
    const [cards, setCards] = useState(null)
    useEffect(()=>{
        if(query){
            articleService.getAllPosts(query).then(response=>{
                console.log("my posts : ",response.documents)
                setCards(response.documents)
            })
        }else{
            articleService.getAllPosts().then(response=>{
                setCards(response.documents)
            })
        }
    },[])
  if(cards){
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-600 py-8 px-4 sm:px-6 lg:px-8">
            <div>
                {
                    cards.length==0 ? (
                        <div>
                            <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">No Posts Found</h1>
                        </div>
                    ) : ''
                }
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cards.map(card => (
                        <PostCard {...card} key={card.$id}/>
                    ))}
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

export default GetAllCards