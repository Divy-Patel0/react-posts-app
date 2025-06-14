import { useState, useEffect } from 'react'
import Spinner from './components/Spinner';
import PostCard from './components/Postcard';
import logo from './assets/vite.svg'

function App() {
  const [posts, setPosts] = useState(
    // id: 0,
    // title: '',
    // body: '',
    // userId: 0,
    // tags: [],
    // reactions: {},
    []
  )
  const [skip, setSkip] = useState(0);
  const [limit] = useState(10);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);


    const fetchPosts = async () => {
    setLoading(true);
    const res = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);
    const data = await res.json();
    setPosts(prev => [...prev, ...data.posts]);
    setTotal(data.total);
    setLoading(false);
  };

  useEffect(() => {
   fetchPosts();
  }, [skip])

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 50 &&
      !loading &&
      posts.length < total
    ) {
      setSkip(prev => prev + limit);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <header className='flex w-full bg-blue-300 sticky top-0 p-2'>
        <img className='h-12 mr-2' src={logo} alt="posts logo " />
        <h1 className='text-4xl font-semibold'>Posts</h1>
      </header>
      <main className=" min-h-[90vh] flex flex-col items-center bg-blue-200">
        <PostCard posts={posts} />
        {loading && <Spinner />}
      </main>
    </>
  )
}

export default App
