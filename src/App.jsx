import { useState } from 'react'
import './App.css'

const App = () => {
  const notificationSound = 'default'
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [code, setCode] = useState('')

  const handleTitleChange = (e) => {
    console.log(e.target.value)
    setTitle(e.target.value)
  }
  const handleBodyChange = (e) => {
    console.log(e.target.value)
    setBody(e.target.value)
  }

  const handleCodeChange = (e) => {
    console.log(e.target.value)
    setCode(e.target.value)
  }

  const handleSubmit = (e) => {
    const submitFields = {
      sound: notificationSound,
      title: title,
      body: body,
    }

    alert(JSON.stringify(submitFields))
    e.preventDefault()
  }

  return (
    <div className='app'>
      <div className='container'>
        <h3>SR Push Notification Service</h3>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-input'>
            <label htmlFor='title'>
              Title:
            </label>
            <input name='title' className='text-input' type='title' value={title} onChange={handleTitleChange} />
          </div>
          <div className='form-input'>
            <label htmlFor='body'>
              Body:
            </label>
            <input name='body' className='text-input' type='text' value={body} onChange={handleBodyChange} />
          </div>
          <div className='form-input'>
            <label htmlFor='code'>
              Code:
            </label>
            <input name='code' className='text-input' type='text' value={code} onChange={handleCodeChange} />
          </div>
          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  )
}

export default App
