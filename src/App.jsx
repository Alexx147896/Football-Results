import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router'
import styles from '../styles/App.module.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
import LiveGames from './components/LiveGames'
import Standings from './components/Standings'
import SerieA_Table from './components/Standings/SerieA_Table'
import PremierLeague_Table from './components/Standings/PremierLeague_Table'
import LaLiga_Table from './components/Standings/LaLiga_Table'
import Bundesliga_Table from './components/Standings/Bundesliga_Table'
import Ligue1_Table from './components/Standings/Ligue1_Table'
import Eredivisie_Table from './components/Standings/Eredivisie_Table'
import Portugal_Table from './components/Standings/Portugal_Table'
import Mexico_Table from './components/Standings/Mexico_Table'
import Turkey_Table from './components/Standings/Turkey_Table'
import Belgium_Table from './components/Standings/Belgium_Table'
import Poland_Table from './components/Standings/Poland_Table'
import Switzerland_Table from './components/Standings/Switzerland_Table'




function App() {


  return (
    <>


      <Header />
      <Navbar />

      <Routes>

        <Route path="/" element={<>

          <LiveGames />
          <Footer />
        </>} />
 

        <Route path='/standings' element={<>
          <Standings /> 
          <Footer />
        </>} />


        <Route path='/standings/serie-a' element={<>
            <SerieA_Table />
            <Footer />
          </>} />

          <Route path='/standings/premier-league' element={<>
            <PremierLeague_Table />
            <Footer />
          </>} />

          <Route path='/standings/la-liga' element={<>
            <LaLiga_Table />
            <Footer />
          </>} />

          <Route path='/standings/ligue1' element={<>
            <Ligue1_Table />
            <Footer />
          </>} />

          <Route path='/standings/bundesliga' element={<>
            <Bundesliga_Table />
            <Footer />
          </>} />

          <Route path='/standings/eredivisie' element={<>
            <Eredivisie_Table />
            <Footer />
          </>} />

          <Route path='/standings/liga-nos' element={<>
            <Portugal_Table />
            <Footer />
          </>} />

          <Route path='/standings/turkey' element={<>
            <Turkey_Table />
            <Footer />
          </>} />

          <Route path='/standings/belgium' element={<>
            <Belgium_Table />
            <Footer />
          </>} />

          <Route path='/standings/poland' element={<>
            <Poland_Table />
            <Footer />
          </>} />

          
          <Route path='/standings/switzerland' element={<>
            <Switzerland_Table />
            <Footer />
          </>} />

          <Route path='/standings/mexico' element={<>
            <Mexico_Table />
            <Footer />
          </>} />

          <Route path='/terms' element={<>
            <Terms />
            <Footer />
          </>} />

          <Route path='/privacy' element={<>
            <Privacy />
            <Footer />
          </>} />


      </Routes>

    </>
  )
}

export default App
