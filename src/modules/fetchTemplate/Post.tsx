import { useState } from 'react'
import { testPosts } from './Posts'

const Post = ({ activePostId, setActivePostId }) => {

  const post = testPosts.find(d => d.id === activePostId)

  return <div>

    <div onClick={() => setActivePostId(-1)}>
      <a href='#'>{'<'} Back</a>
    </div>
    <h3>{post.title}</h3>
    <div>
      <p>{post.content}</p>
    </div>

  </div>

}

export default Post