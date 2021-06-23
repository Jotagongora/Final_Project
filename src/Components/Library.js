import React, {useContext} from 'react'
import {GlobalContext} from '../Navbar';

export default function Library() {

    const {games, setGames} = useContext(GlobalContext);

    return (
        <div>
            <div className="bg-purple padding-60">
            <div className="gamesContainer">
                {games.map((game, index) => {
                    return (
                        <div  className="library">
                            <div className="gameLibrary" style={{backgroundImage: `url(${game.background_image})`}}></div>
                            <div  className="gameDescription">
                                <h3>{game.name}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    )
}
