import axios from 'axios'
import { useState } from 'react'
import './App.css'
import notificationImg from './notificationEx.png'
const App = () => {
  const PN_CODE = import.meta.env.VITE_PUSH_NOTIFICATION_CODE
  const BE_URL = 'https://western-sciren-server.vercel.app'

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
      alert("Your notification has been sent :)")
    }
    else {
      alert('The code you entered is incorrect, please contact Emma, Phillip, or Abdulaziz regarding the code')
    }
  }

  return (
    <div className='app'>
      <div className='container'>
        <h3 className='title'>SR Push Notification Service</h3>
        <p className='subtitle'>Use the form to send a notification to all phones with WesternUSciRenApp downloaded</p>
        <h4>Example Notification:</h4>
        <img className='notification-img' src={notificationImg} alt="Image of an example notification" />
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-input'>
            <label htmlFor='title' className='input-label'>
              Title:
            </label>
            <input name='title' className='text-input' type='title' value={title} onChange={handleTitleChange} />
          </div>
          <div className='form-input'>
            <label htmlFor='body' className='input-label'>
              Body:
            </label>
            <input name='body' className='text-input' type='text' value={body} onChange={handleBodyChange} />
          </div>
          <div className='form-input'>
            <label htmlFor='code' className='input-label'>
              Code:
            </label>
            <input name='code' className='text-input' type='password' value={code} onChange={handleCodeChange} />
          </div>
          <div className='submit-button-container'>
            <input className='submit-button' type='submit' value='Send' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
