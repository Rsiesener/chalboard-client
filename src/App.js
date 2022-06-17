/* eslint-disable no-tabs */
import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import styles from './components/styles/app.module.css'
import Home from './components/Home/Home'
import LandingPage from './components/LandingPage/LandingPage'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  // const [updateReceived, setUpdateReceived] = useState(0)

  useEffect(() => {
    // const userFromStorage = localStorage.getItem('chalkBoardUser')
    // if (userFromStorage) {
    //   setUser(JSON.parse(userFromStorage))
    // }
  }, [])

  const clearUser = () => {
    setUser(null)
    localStorage.removeItem('chalkBoardUser')
  }
  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(msgAlerts => ([...msgAlerts, { heading, message, variant, id }]))
  }

  // const updateReceivedCounter = () => {
  //   setUpdateReceived(updateReceived + 1)
  // }

  return (
    <div className={styles.container}>
      <Header user={user} />
      <div className={styles.body} style={{ backgroundImage: 'url(\'https://wallpaperaccess.com/full/1390896.jpg\')' }}>
        {msgAlerts.map((msgAlert) => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
          />
        ))}
        <main className={styles.content}>
          <Routes>
            <Route path='/' element={<LandingPage msgAlert={msgAlert} setUser={setUser} user={user} />} />
            <Route path='/home' element={<Home user={user} />} />
            <Route path='/sign-up' element={<SignUp msgAlert={msgAlert} setUser={setUser} />} />
            <Route path='/sign-in' element={<SignIn msgAlert={msgAlert} setUser={setUser} />} />
            <Route path='/sign-out' element={<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />} />
            <Route path='/change-password' element={<ChangePassword msgAlert={msgAlert} user={user} />} />
            {/* <Route path='/folders/:id/' element={<Folder msgAlert={msgAlert} user={user} updateReceivedCounter={updateReceivedCounter} />} />
            <Route path='/folders/:id/edit/' element={<UpdateFolder msgAlert={msgAlert} user={user} updateReceivedCounter={updateReceivedCounter} />} /> */}
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
