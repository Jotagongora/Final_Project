import React, {useContext} from 'react';
import {useEffect} from 'react';
import {GlobalContext} from '../Navbar';
import './Games.css';

export default function Games() {

    const {games} = useContext(GlobalContext);

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
                            <div className="gameImg" style={{backgroundImage: `url(${game.background_image})`}}></div>
                            <div  className="gameDescription">
                                <h3>{game.name}</h3>
                                <ul>
                                    <li><button>Likes</button><button>Publicaciones</button><button>Añadir a biblioteca</button></li>
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
