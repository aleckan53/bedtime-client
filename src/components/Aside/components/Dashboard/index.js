import React from 'react'
import styles from './styles.module.css'

const Dashboard = props => {

  const mockData = {
    id: 1,
    user_name: 'olegakan123',
    first_name: 'Oleg',
    last_name: 'Kan',
    email: 'email@email.com',
    avatar: 'https://assets1.ignimgs.com/2019/04/01/ironmanvr-blogroll-1554158268175_1280w.jpg'
  }

  

  const bgImage = {
    backgroundImage: `url(${mockData.avatar})`
  }

  return (
    <div className={styles.Dashboard}>
      <div className={styles.image} style={bgImage}></div>
      <div className={styles.info}>
        <h2>Oleg Kan</h2>
        <p>{mockData.user_name}</p>
        <p>{mockData.email}</p>
      </div>
      <div>
        <h3>Bookmarks</h3>
        <ul>
          <li>Lorem Ipsum</li>
          <li>Dolor Ipsum</li>
          <li>Ipsum Ipsum</li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard