import React, {useContext} from 'react';
import {useEffect} from 'react';
import {GlobalContext} from '../Navbar';
import './Games.css';

export default function Games() {

    const {games} = useContext(GlobalContext);

    const token = localStorage.getItem('TOKEN_KEY');

    const AuthStr = 'Bearer '.concat(token);

    const GameData = new FormData;

    function addGameToLibrary(id) {

        GameData.append("gameId", id);

        const option = {
            method: "POST",
            headers: {'Accept': 'application/json',
            'Authorization': AuthStr,},
            body: GameData 
        }

        fetch('http://localhost:8000/api/addGame', option)
        .then(response => response.json())
        .then(data => data);
    }

    return (
        <div className="bg-purple">
            <div className="searchInput">
                <h1>Juegos</h1>
                <input type="search" placeholder="Buscar juegos..."/>
                <i className="fas fa-search"></i>
            </div>
            <div className="gamesContainer">
                {games.map((game, index) => {
                    return (
                        <div  className="gameContainer">
                            <div className="gameImg" style={{backgroundImage: `url(${game.gameUrl})`}}></div>
                            <div  className="gameDescription">
                                <h3>{game.title}</h3>
                                <ul>
                                    <li><button>Likes</button><button>Publicaciones</button><button onClick={() => addGameToLibrary(game.id)}>Añadir a biblioteca</button></li>
                                    <li><span>Fecha de lanzamiento: </span><span>{game.releaseDate}</span></li>
                                    <li><span>Género: </span><span>{game.genre}</span></li>
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
