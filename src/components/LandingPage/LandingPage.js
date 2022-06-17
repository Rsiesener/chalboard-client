import React, { useState } from 'react'
import styles from '../styles/LandingPage.module.css'
import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'
import { Navigate } from 'react-router-dom'

const LandingPage = ({ msgAlert, setUser, user }) => {
  const [toggleSignIn, setToggleSignIn] = useState(false)
  const [toggleSignUp, setToggleSignUp] = useState(false)

  if (user) {
    return <Navigate to='/home' />
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.welcome}>Welcome To Chalkboard</div>
        <div className={styles.content}>
          <div className={styles.signIn}>
            {toggleSignIn ? (<SignIn msgAlert={msgAlert} setUser={setUser} />) : null}
          </div>
          <div className={styles.buttons}>
            <button className={styles.signInBtn} onClick={() => setToggleSignIn(!toggleSignIn)}>Sign In</button>
            <button className={styles.signUpBtn} onClick={() => setToggleSignUp(!toggleSignUp)}>Sign Up</button>
          </div>
          <div className={styles.signUp}>
            {toggleSignUp ? (<SignUp msgAlert={msgAlert} setUser={setUser} />) : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
