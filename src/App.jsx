import axios from 'axios'
import { useState } from 'react'
import './App.css'

const App = () => {
  const PN_CODE = import.meta.env.VITE_PUSH_NOTIFICATION_CODE
  const BE_URL = 'https://uwo-sr-app-server.herokuapp.com/api/exponotification'

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (code === PN_CODE) {
      const submitFields = {
        sound: notificationSound,
        title: title,
        body: body,
      }

      await axios.put(BE_URL, submitFields)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      alert(JSON.stringify(submitFields))
    }
    else {
      alert('The code you entered is incorrect')
    }
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
            <input name='code' className='text-input' type='password' value={code} onChange={handleCodeChange} />
          </div>
          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  )
}

export default App
