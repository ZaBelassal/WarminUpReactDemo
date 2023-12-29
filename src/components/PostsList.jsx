import React , {useState} from 'react'
import NewPost from './NewPost'

function PostsList({showPanel}) {

  const [posts , setPost] = useState([]);
  const AddPost = (postData) => {
    setPost((existingPosts)=>[postData,...existingPosts])
  }

  return (
    <> 
        <button style={{backgroundColor:'red'}}>Toggle</button>
        {showPanel && <NewPost posts={posts} onChangePosts={AddPost}/>}
        {posts.length === 0 && <p>No post yet</p>}
    
    </>
  );
}

export default PostsList
