import React, { useState } from 'react'
import birthdayData from '../birthdayData'
import BirthdayList from './BirthdayList'
import './Birthday.css'

const BirthdayReminder = () => {
  const [people, setPeople] = useState(birthdayData)
  console.log(people)
  return (
    <section className='birthday-page'>
      <div className='birthday-container'>
        <h3 className='birthday-header'>{people.length} birthdays today</h3>
        <BirthdayList people={people} />
        <button className='btn' onClick={() => setPeople([])}>
          Clear All
        </button>
      </div>
    </section>
  )
}

export default BirthdayReminder
