import React, { useState } from 'react'
import birthdayData from '../birthdayData'
import BirthdayList from './BirthdayList'

const BirthdayReminder = () => {
  const [people, setPeople] = useState(birthdayData)
  console.log(people)
  return (
    <section className='birthday-container'>
      <h3>{people.length} birthdays today</h3>
      <BirthdayList people={people} />
      <button onClick={() => setPeople([])}>Clear All</button>
    </section>
  )
}

export default BirthdayReminder
