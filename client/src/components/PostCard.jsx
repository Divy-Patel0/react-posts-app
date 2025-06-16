import { Hash } from 'lucide-react';
import Reactions from './Reactions';

const PostCard = ({ posts }) => {
  return (
    <>
      <ul className='m-4 sm:m-5 min-w-0 sm:min-w-[95vw] rounded mt-1 shadow-xl px-2 space-y-4 w-full max-w-3xl '>
        {posts.map((post, index) =>
          <li key={index}>
            <div className='w-full border-2 p-3 rounded bg-blue-100'>
              <h2 className='bg-blue-300 rounded p-1 font-semibold text-2xl m-0 mb-0.5'>{post.title}</h2>
              <p className='italic text-base sm:text-lg text-gray-800 mb-2'>
                {post.body}
              </p>
              {/* tags and reactions  */}
              <div className='flex flex-col gap-2'>
                <ul className='flex flex-wrap gap-1 '>
                  {post.tags.map(tag =>
                  <li key={tag} className='flex items-center  text-blue-500 font-medium'>
                    <Hash size={16} strokeWidth={1.5} className='mr-0.5'/>
                      {tag}
                  </li>
                )}
                </ul>
                <Reactions reactions={post.reactions} views={post.views} />
              </div>
            </div>
          </li>
        )}
      </ul>
    </>
  )
}

export default PostCard