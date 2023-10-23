import React from 'react'
import styles from '../../styles/Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (

    


<div className={styles.container}>



    <div className={styles.linkContainer}>
        <Link to='/' >
            HOME
        </Link>

        <p className={styles.dot}>|</p>

        <Link to='/privacy' >
            PRIVACY POLICY
        </Link>

        <p className={styles.dot}>|</p>

        <Link to='/terms' >
            TERMS & CONDITIONS
        </Link>

        <p className={styles.dot}>|</p>


    </div>

    <div className={styles.copyright}>
        <p> Website made by <a href='https://www.alexhernan.com' target="_blank" rel="noopener noreferrer"><span>Alex Hernán</span> </a>  {new Date().getFullYear()} © </p>
    </div>

</div>


    
    

  )
}
