import React from 'react'
import { useEffect, useState } from 'react'
import './standing.css'


const Standing = () => {
    const [standingData, setStandingData] = useState([])

    useEffect(() => {
        
        fetch('https://api.football-data.org/v2/competitions/CL/standings', {
            headers: {
                'X-Auth-Token': '1c58ed9452aa4776a74fcee52e7c6e90',
                'Accept-Encoding': ''
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setStandingData(data.standings[3].table)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            
            <table>
            
                <thead>
                    <tr>
                    
                        <th>Position</th>
                        <th>Team</th>
                        <th>Played</th>
                        <th>Won</th>
                        <th>Draw</th>
                        <th>Lost</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {standingData.map((standing, index) => (
                        <tr key={index}>
                            
                            <td>{standing.position}</td>
                            <td className='team'><img className='logo_club' src={standing.team.crestUrl} alt={standing.team.name} />{standing.team.name}</td>
                            <td>{standing.playedGames}</td>
                            <td>{standing.won}</td>
                            <td>{standing.draw}</td>
                            <td>{standing.lost}</td>
                            <td>{standing.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

   
    



            

    

}

export default Standing
