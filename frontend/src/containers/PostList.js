import React, { useEffect, useState} from 'react'
import {Header} from 'semantic-ui-react'
const PostList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('http://127.0.0.1:8000/api/posts/')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch(err => {
          setError(err.message);
          setLoading(false);
      })
  }, [])

  return (
    <div>
      <Header>PostList</Header> 
      {error && (
        <h4 style={{ color: "red"}}>An error occured failed to fetch</h4>
      )}
      {loading ? <div>Loading...</div>: (
        <div>
            {data && data.map(post => {
              return(
                  <div>
                    <h3>{post.title}</h3>
                    <h3>{post.content}</h3>
                    <img  src={post.thumbnail} alt=""/>
                  </div>
              )
            }
            )}
        </div>
      )}
    
    </div>
  )
}
export default PostList