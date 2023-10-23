import { useState, useEffect } from 'react'
import styles from '../../../styles/Tables.module.css'
import axios from 'axios'
import { BUNDESLIGA_STANDINGS } from '../../../utils/apis'

export default function Bundesliga_Table() {
  
    const [allTeams, setAllTeams] = useState([])
    const [loading, setLoading] = useState(true); 
    const league = 4331

    useEffect(() => {
      const ApiUrl= BUNDESLIGA_STANDINGS

      axios.get(ApiUrl)
      .then((response) => {
        const {data} = response;
        if(data.table && data.table.length > 0) {
            const teamList = data.table
            console.log("Filtered Teams:", teamList);
            setAllTeams(teamList)
        } else {
            console.error("No teams found")
        }
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching team data:", error)
        setLoading(false); // Set loading to false in case of an error
      })
    }, [league])
    
  
    return (
        <div>


        <h2>BUNDESLIGA</h2>

        <div className={styles.headers}>

          <p className={styles.noDisplay}>Position</p>
          <p className={styles.noDisplay}></p>
          <p className={styles.noDisplay}>Team</p>
          <p className={styles.noDisplay}>Points</p>
          <p className={styles.noDisplay}>Played</p>
          <p className={styles.noDisplay}>Win</p>
          <p className={styles.noDisplay}>Draw</p>
          <p className={styles.noDisplay}>Loss</p>
          <p className={styles.noDisplay}>Goal Difference</p>
          <p className={styles.noDisplay}>Form</p>
      
        </div>


        {loading ? (
                
                <p className={styles.loader}></p>
            ) : allTeams.length === 0 ? (
                
                <p className={styles.noGames}>This competition hasn't started yet. Check back in a few days.</p>
            ) : (
        
        
        allTeams.map((team) => (
            
            <div  key={team.idTeam}>

                <div className={styles.standings}>
                
                  {team.intRank ? <p>{team.intRank}</p> : null}
                  {team.strTeamBadge ? <img src={team.strTeamBadge}></img> : null}
                  {team.strTeam ? <p className={styles.clubs}>{team.strTeam}</p> : null}
                  {team.intPoints ? <p className={styles.noDisplay}>{team.intPoints}</p> : null}
                  {team.intPlayed ? <p className={styles.noDisplay}>{team.intPlayed}</p> : null}
                  {team.intWin ? <p className={styles.noDisplay}>{team.intWin}</p> : null}
                  {team.intDraw ? <p className={styles.noDisplay}>{team.intDraw}</p> : null}
                  {team.intLoss? <p className={styles.noDisplay}>{team.intLoss}</p> : null}
                  {team.intGoalDifference? <p className={styles.noDisplay}>{team.intGoalDifference}</p> : null}
                  {team.strForm? <p className={styles.noDisplay}>{team.strForm}</p> : null}

                </div>

            </div>
        )))}
    </div>
  )
}
