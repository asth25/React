import React from 'react'
import Contact from './Contact'
import Something, { two, one } from './test'

const App = () => {
  two();
  one()

  return (
    <div>
      <h1>hey im dev</h1>
      <Contact/>
    </div>
  )
}

export default App
