import React from 'react'

const BirthdayList = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person
        return (
          <article key={id} className='project'>
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
