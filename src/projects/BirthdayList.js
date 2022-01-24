import React from 'react'
import './Birthday.css'

const BirthdayList = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person
        return (
          <article key={id} className='birthday-person'>
            <img src={image} alt={name} />

            <div>
              <h1>{name}</h1>
              <p>{age} years old</p>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default BirthdayList
