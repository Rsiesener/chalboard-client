import React from 'react'
import styles from '../styles/HomePageBody.module.css'
import { Navigate } from 'react-router-dom'
// import Folder from '../Folder-Components/ShowFolder'

const Home = ({ user }) => {
  if (!user) {
    return <Navigate to='/' />
  }
  return (
    <>
      <div className={styles.content}>
        {/* <Folder /> */}
      </div>
      <div className={styles.media}>
        <div className={styles.video}>
        video
        </div>
        <div className={styles.picture}>
        picture
        </div>
      </div>
    </>
  )
}

export default Home
