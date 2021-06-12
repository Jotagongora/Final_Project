import React, {useContext} from 'react';
import {useEffect} from 'react';
import {GlobalContext} from '../Navbar';
import './Games.css';

export default function Games() {

    const {games, setGames} = useContext(GlobalContext);

    const url_games = `https://api.rawg.io/api/games?key=b24718c4e7d741ba95a738653024114d`;

    useEffect(() => {
        fetch(url_games)
        .then(response => response.json())
        .then(data => setGames(data.results))
        }, []);

    

    return (
        <div className="allGamesBlock">
            <div className="searchInput">
                <h1>Juegos</h1>
                <input type="search" placeholder="Buscar juegos..."/>
                <i className="fas fa-search"></i>
            </div>
            <div className="gamesContainer">
                {games.map((game, index) => {
                    return (
                        <div  className="gameContainer">
                            <div className="gameImg" style={{backgroundImage: `url(${game.background_image})`}}></div>
                            <div  className="gameDescription">
                                <h3>{game.name}</h3>
                                <ul>
                                    <li><button>Likes</button><button>Publicaciones</button></li>
                                    <li><span>Fecha de lanzamiento: </span><span>{game.released}</span></li>
                                    <li><span>Género: </span><span>{game.genres.map((genre, index)=> {
                                        return (
                                            <span>{genre.name} </span>
                                        )
                                    })}</span></li>
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
