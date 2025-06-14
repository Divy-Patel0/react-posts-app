import React from 'react'
import { ThumbsUp, ThumbsDown, Eye, Hash } from 'lucide-react';

const PostCard = ({posts}) => {
  return (
    <>
    <ul className='m-5 rounded mt-1 shadow-2xl px-1 '>
          {posts.map((post,index) =>
            <li key={index}>
              <div className='min-w-[90vw] border-2 p-1 rounded m-0.5 mb-3 bg-blue-100'>
                <span className='bg-blue-300 block rounded  p-0.5 font-semibold text-2xl m-0 mb-0.5'>{post.title}</span>
                <div className='italic text-xl'>
                  <p>{post.body}</p>
                </div>
                <div className='flex flex-row justify-between m-1 rounded'>
                  <ul className='flex'>{post.tags.map(tag =>
                    <li key={tag} className='flex place-items-center-safe text-blue-500 font-medium'>
                      <Hash size={16} strokeWidth={1.5}/>
                      <span>
                        {tag}
                        </span>
                      </li>
                  )}</ul>
                  <div className='flex place-items-center-safe font-light space-x-1'>
                    <button className='hover:cursor-pointer hover:scale-125'>
                      <ThumbsUp size={18} />
                      </button>
                    <span>
                      {post.reactions.likes}
                    </span>
                    <button className='hover:cursor-pointer hover:scale-125'><ThumbsDown size={18} /></button>
                    <span>
                      {post.reactions.dislikes}
                    </span>
                    <Eye size={18} />
                    <span>{post.views}</span>
                  </div>
                </div>
              </div>
            </li>
          )}
        </ul>
    </>
  )
}

export default PostCard