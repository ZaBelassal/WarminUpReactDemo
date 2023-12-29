import React from 'react'
import Post from './Post'
import NewPost from './NewPost'

function PostsList({postCount,showPanel}) {


    const renderPosts = () => {
        const posts = [];
        for (let i = 0; i < postCount; i++) {
          posts.push(<NewPost key={i} />);
        }
        return posts;
      };
    
  return (
    <> 
        <button style={{backgroundColor:'red'}}>Toggle</button>
        {showPanel && renderPosts()}
    
      <Post author="Zakaria" body="hello world!"/>
      <Post author="El mahdi" body="Test"/>
    
    </>
  )
}

export default PostsList
