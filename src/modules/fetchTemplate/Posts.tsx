import { useState } from 'react'

export const testPosts = [
  {
    id: 1,
    title: 'Test Title',
    publishedAt: '2020-06-04',
    content: 'Test Content'
  }
]

const Posts = () => {
  const [activePostId, setActivePostId] = useState(-1)

  const onSubmit = values => console.log(values)

  return <section>
    <h3>Posts</h3>
    <div>
      {testPosts.map(post => (
        <div key={post.id}>
          <a href='#' onClick={() => setActivePostId(post.id)}>
            {post.title}
          </a>
        </div>
      ))}
    </div>

  </section>

}

export default Posts