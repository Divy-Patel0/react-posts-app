import { useState, useEffect } from 'react'
import Spinner from './components/Spinner';
import PostCard from './components/Postcard';
import Header from './components/Header';

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
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setdebouncedSearchTerm] = useState("")
  const [searchLoading, setSearchLoading] = useState(false)

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

  useEffect(() => {
    // setSearchLoading(true)
    const timer = setTimeout(() => {
      setdebouncedSearchTerm(searchTerm)
    }, 5000);
    
    return () => clearTimeout(timer)
  }, [searchTerm])
  
  useEffect(() => {
    if (debouncedSearchTerm.trim() === '') {
      setFilteredPosts(posts); 
      // setSearchLoading(false)
    } else {
      const filtered = posts.filter(post =>
        post.tags.some(tag =>
          tag.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        )
      );
      setFilteredPosts(filtered);
    }
    // setSearchLoading(false)
  }, [debouncedSearchTerm, posts])

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
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className=" min-h-[90vh] flex flex-col items-center bg-blue-200">
        <PostCard posts={filteredPosts} />
        {!searchLoading && (searchTerm ? filteredPosts : posts).length === 0 && !loading && (
          <p className="text-center text-lg text-gray-600 my-4">No posts found.</p>
        )}
        {/* {searchTerm && searchLoading && <Spinner/>} */}
        {loading && <Spinner />}
      </main>
    </>
  )
}

export default App
