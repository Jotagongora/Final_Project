import React from 'react';
import {useAuthContext} from '../contexts/AuthContext';

export default function Library() {

    const {user} = useAuthContext();

    return (
        <div>
            <div className="bg-purple padding-60">
            <div className="gamesContainer">
                {user.map((game, index) => {
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
