import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Standings.module.css';

export default function Standings() {
  // Sample data for the images and titles
  const gridItems = [
    {
      image: 'img/serie_a.jpg', 
      title: 'SERIE A',
      link: 'serie-a',
      titleImg: 'Serie A (Italy)'
    },

    {
      image: 'img/premier_league.jpg', 
      title: 'PREMIER LEAGUE',
      link: 'premier-league',
      titleImg: 'Premier League (England)'

    },

    {
      image: 'img/la_liga.jpg',
      title: 'LA LIGA',
      link: 'la-liga',
      titleImg: 'La Liga (Spain)'
    },

    {
      image: 'img/Ligue1.png',
      title: 'LIGUE 1',
      link: 'ligue1',
      titleImg: 'Ligue 1 (France)'
    },

    {
      image: 'img/bundesliga.png',
      title: 'BUNDESLIGA',
      link: 'bundesliga',
      titleImg: 'Bundesliga (Germany)'
    },

    {
      image: 'img/eredivisie_2.jpg',
      title: 'EREDIVISIE',
      link: 'eredivisie',
      titleImg: 'Eredivisie (The Netherlands)'
    },

    {
      image: 'img/portugal.png',
      title: 'LIGA NOS',
      link: 'liga-nos',
      titleImg: 'Liga NOS (Portugal)'
    },

    {
      image: 'img/belgium.jpg',
      title: 'Jupiter Pro League',
      link: 'belgium',
      titleImg: 'Jupiler Pro League (Belgium)'
    },

    {
      image: 'img/poland.jpg',
      title: 'Ekstraklasa',
      link: 'poland',
      titleImg: 'Ekstraklasa (Poland)'
    },

    {
      image: 'img/switzerland.png',
      title: 'Swiss Super League',
      link: 'switzerland',
      titleImg: 'Swiss Super League (Switzerland)'
    },

    {
      image: 'img/turkey.png',
      title: 'Turkish Super Lig',
      link: 'turkey',
      titleImg: 'Turkish Super Lig (Turkey)'
    },

    {
      image: 'img/mexico.png',
      title: 'MEXICAN LEAGUE',
      link: 'mexico',
      titleImg: 'Primera División (Mexico)'
    },


  ];




  return (
    
    <div className={styles.gridContainer}>
      {gridItems.map((item, index) => (
        <div key={index} className={styles.gridItem}>
          <Link to={item.link}><img className={styles.logos} src={item.image} alt={item.title} title={item.titleImg} /></Link>
        </div>
      ))}
    </div>
  );
}

