import { useState,useEffect } from 'react'

function App() {
  const [posts, setPosts] = useState({
    id: 0,
    title: '',
    body: '',
    userId: 0,
    tags: [],
    reactions: 0,
  })

  useEffect(() => {

    return () => {
      fetch('https://dummyjson.com/posts/1')
        .then(res => res.json())
        .then(data=> setPosts(data));
    }
  }, [])

  return (
    <>
      <p>{posts.id}</p>
      <p>{posts.body}</p>
      {/* <p>{posts.reactions}</p> */}
  
    </>
  )
}

export default App
