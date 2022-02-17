import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='contact-container' id='contact'>
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
          onSubmit='submit'
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
            <input type='email' name='email' placeholder='email' />
          </p>
          <p>
            <textarea name='message' placeholder='message'></textarea>
          </p>
          <button type='submit'>Send</button>
        </form>
        <div className='contact-links'>
          <a href='https://github.com/sevrinn' target='_blank' rel='noreferrer'>
            <FaGithub size={50} />
          </a>
          <a
            href='https://www.linkedin.com/in/sev-welker/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin size={50} />
          </a>
          <a
            href='https://twitter.com/sev_welker'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillTwitterCircle size={50} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
