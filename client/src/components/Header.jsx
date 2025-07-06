import { useState } from 'react';
import logo from '../assets/vite.svg'
import { Plus } from 'lucide-react';
import AddPostDialog from './AddPostDialog';

const Header = ({ searchTerm, setSearchTerm, setFilteredPosts, setSortBy, sortBy }) => {

    const [isDialogOpen, setIsDialogOpen] = useState(false);


    const handleAddPost = async (newPost) => {
        const res = await fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        })
        const data = await res.json();
        setFilteredPosts((prev) => [newPost, ...prev])
    }
    return (
        <>
            <header className="flex flex-col sm:flex-row md:items-center justify-between w-full bg-blue-300 sticky top-0 p-2 gap-2 z-10">
                <div className="flex w-full justify-between items-center">
                    <div className="flex items-center gap-2">
                        <img className='h-10 mr-2' src={logo} alt="posts logo" />
                        <h1 className='text-xl md:text-3xl font-semibold'>Posts</h1>
                    </div>

                    <button
                        className='sm:hidden inline-flex items-center justify-center border rounded w-[36px] h-[36px] hover:scale-105 hover:cursor-pointer'
                        onClick={() => setIsDialogOpen(true)}
                    >
                        <Plus strokeWidth={1.2} />
                    </button>

                </div>

                <div className='flex items-center sm:border-t-red-800 gap-2 w-full sm:w-auto'>
                    <label htmlFor="search" className='hidden gap-1 md:block lg:inline-flex items-center text-lg sm:text-2xl whitespace-nowrap text-gray-800'>
                        Search :
                    </label>
                    <input
                        type="text"
                        id="search"
                        placeholder="Search by post and tag..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-1 rounded border border-gray-800 w-full sm:w-[250px]"
                    />

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="p-1 border rounded text-sm sm:text-base"
                    >
                        <option value="">Sort by</option>
                        <option value="title">Title</option>
                        <option value="body">Body</option>
                        <option value="userId">User ID</option>
                        <option value="views">Views</option>
                    </select>
                    <button
                        className='hidden  sm:inline-flex items-center justify-center border rounded w-[50px] h-[33px] hover:scale-105 hover:cursor-pointer'
                        onClick={() => setIsDialogOpen(true)}
                    >
                        <Plus strokeWidth={1.2} />
                    </button>

                    <AddPostDialog
                        isOpen={isDialogOpen}
                        onClose={() => setIsDialogOpen(false)}
                        onAddPost={handleAddPost}
                    />


                </div>
            </header>

        </>
    )
}

export default Header