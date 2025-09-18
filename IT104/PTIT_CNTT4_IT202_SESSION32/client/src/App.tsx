import React from 'react'
import Counter from './pages/Counter'
import Student from './pages/Student'
import Profile from './pages/Profile'
import Random from './pages/Random'
import ChangeState from './pages/ChangeState'
import Dark from './pages/Dark'
import Register from './pages/Register'
import Login from './pages/Login'

export default function App() {
  return (
    <div>
      <p>Bai 1</p>
      <Profile></Profile>
      <p>Bai 2</p>
      <Student></Student>
      <p>Bai 3</p>
      <Counter></Counter>
      <p>Bai 4</p>
      <Random></Random>
      <p>Bai 5</p>
      <ChangeState></ChangeState>
      <p>Bai 6</p>
      <Dark></Dark>
      <p>Bai 7</p>
      <Register></Register>
      <p>Bai 8</p>
      <Login></Login>
    </div>
  )
}
