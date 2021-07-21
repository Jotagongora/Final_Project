import React, {useEffect, useState} from 'react';
import {useAuthContext} from '../contexts/AuthContext';

export default function FriendLibrary() {

    const {friendUser} = useAuthContext();

    const [library, setLibrary] = useState();

    const token = localStorage.getItem('TOKEN_KEY');

    const AuthStr = 'Bearer '.concat(token);

    const option = 
        { headers: 
            {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': AuthStr,
        }};


        useEffect(() => {
            fetch(`http://localhost:8000/api/Friend/${friendUser}`, option)
            .then(response => response.json())
            .then(data => setLibrary(data.library));
            }, []);
            

    return (
        <div>
            <div className="bg-purple padding-60">
            <div className="gamesContainer">
                {library && library.map((game, index) => {
                    return (
                        <div  className="library" key={index}>
                            <div className="gameLibrary" style={{backgroundImage: `url(${game.image})`}}></div>
                            <div  className="gameDescription">
                                <h3>{game.title}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    )
}
