import { useState } from 'react'

const defaultFormValues = () => ({
  title: '',
  publishedAt: new Date().toISOString().split('T')[0],
  content: ''
})

const CreatePostForm = ({ onSubmit, initialValues = defaultFormValues }) => {

  const [values, setValues] = useState(initialValues)

  const setValue = (field, value) =>
    setValues(old => ({ ...old, [field]: value }))

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(values)
    setValues(defaultFormValues)
  }
  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor='title'>Title</label>
      <input
        type='text'
        name='title'
        value={values.title}
        onChange={(e => setValue('title', e.target.value))}
        required
      />
    </div>

    <div>
      <label htmlFor='content'>Publish Date</label>
      <input
        type='date'
        name='publishedAt'
        value={values.publishedAt}
        onChange={e =>
          setValue('publishedAt', new Date(e.target.value).toISOString())
        }
        required
      />
    </div>

    <div>
      <label htmlFor='content'>Content</label>
      <textarea
        name='content'
        value={values.content}
        onChange={e => setValue('content', e.target.value)}
        required
      />
    </div>

    <button type='submit'>Submit</button>

  </form>

}

export default CreatePostForm