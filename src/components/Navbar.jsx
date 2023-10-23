import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Navbar.module.css';

export default function Navbar() {
  

  return (
  
      <div className={styles.container}>

        <div className={styles.logo}>
          <Link to='/'><h1>FOOTBALL RESULTS</h1></Link> 
        </div>



        <div className={styles.nav_links}>
          <Link to="/" className={styles.active}>LIVESCORES</Link>
          <Link to="/standings" className={styles.active}>STANDINGS</Link>
        </div>





          </div>
       

  );
}
