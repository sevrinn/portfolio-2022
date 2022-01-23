import React from 'react'

const Contact = () => {
  return (
    <div className='contact-container'>
      <h1 className='contact-title'>contact</h1>
      <div className='contact-form-container'>
        <p>
          Want to hire me? Have a question? Leave a message here and I'll get
          back to you in a timely manner:)
        </p>
        <form
          name='contact'
          method='POST'
          data-netlify='true'
          className='contact-form'
        >
          <p>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='name'
              pattern='[A-z\sa-z]{3,20}'
            />
          </p>
          <p>
            <input
              type='email'
              name='email'
              placeholder='email'
              pattern='[A-z\sa-z]{3,20}'
            />
          </p>
          <p>
            <textarea name='message' placeholder='message'></textarea>
          </p>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
