import React from 'react'

export default function InputField() {
  return (
  <form>
    <input type='text' placeholder='enter a task' className='input_box'/>
    <button type='submit' className='input_submit'>
        GO
    </button>
  </form>
  )
}
