import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/LiveGames.module.css";
import { LIVE_GAMES } from "../../utils/apis";

export default function LiveGames() {
    const [liveGames, setLiveGames] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        axios.get(LIVE_GAMES)
            .then((response) => {
                const { data } = response;
                if (data.events && data.events.length > 0) {
                    const allGames = data.events.slice(0, 10);
                    setLiveGames(allGames);
                } else {
                    console.error('No Fixtures Found');
                }
                setLoading(false); // Set loading to false when data is fetched
            })
            .catch((error) => {
                console.error('Error fetching fixtures', error);
                setLoading(false); // Set loading to false in case of an error
            });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.liveContainer}>
                <h2 className={styles.title}>LIVE GAMES</h2>
                <div className={styles.blinkingDot}></div>
            </div>

            {loading ? (
                <p className={styles.loader}></p>
            ) : liveGames.length === 0 ? (
                <p className={styles.noGames}>No games are being played right now! Please check back later.</p>
            ) : (
                liveGames.map((game) => (
                    <div key={game.idEvent}>
                        <div className={styles.matchesTable}>
                            <div className={styles.matchCard}>
                                <div className={styles.league}>
                                    {game.strLeague ? <p>{game.strLeague}</p> : null}
                                </div>
                                <div className={styles.matches}>
                        
                                    {game.strProgress ? <p className={styles.minutes}>{game.strProgress + "'"}</p> : null}  
                                    {game.strHomeTeam ? <p className={styles.team}>{game.strHomeTeam}</p> : null}
                                    {game.strHomeTeamBadge ? (
                                        <img className={styles.logos} src={game.strHomeTeamBadge + '/tiny'} alt="Home Team Badge" />
                                    ) : null}
                                    {game.intHomeScore ? <p className={styles.results}>{game.intHomeScore}</p> : null}
                                    {game.intHomeScore ? <p className={styles.results}>-</p> : null}
                                    {game.intAwayScore ? <p className={styles.results}>{game.intAwayScore}</p> : null}
                                    {game.strAwayTeamBadge ? (
                                        <img className={styles.logos} src={game.strAwayTeamBadge + '/tiny'} alt="Away Team Badge" />
                                    ) : null}
                                    {game.strAwayTeam ? <p>{game.strAwayTeam}</p> : null}
                                   


                    



                                </div>

                                {game.strProgress ? <p className={styles.minutes_small}>{game.strProgress + "'"}</p> : null}  

                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
