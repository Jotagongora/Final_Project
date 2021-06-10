import React, {useContext} from 'react';
import {useEffect} from 'react';
import {GlobalContext} from '../Navbar';
import './Game.css';

export default function Games() {

    const {games, setGames} = useContext(GlobalContext);

    const url_games = `https://api.rawg.io/api/games?key=b24718c4e7d741ba95a738653024114d`;

    useEffect(() => {
        fetch(url_games)
        .then(response => response.json())
        .then(data => setGames(data.results))
        }, []);

    

    return (
        <div>
            {games.map((game, index) => {
                return (
                    <div className="gameImg" style={{backgroundImage: `url(${game.background_image})`}}></div>
                )
            })}
        </div>
    )
}
