import React from 'react'

function MainHeader({AddPost}) {
    
  return (
    <div>
      MainHeader
      <button onClick={AddPost}> + Add New POST</button>
    </div>
  )
}

export default MainHeader
