import React, {useContext} from 'react';
import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {GlobalContext} from '../Navbar';
import './Games.css';
import {useAuthContext} from '../contexts/AuthContext';

export default function Games() {

    const history = useHistory();

    const {games, setGames} = useContext(GlobalContext);

    const {setGameId} = useAuthContext();

    const token = localStorage.getItem('TOKEN_KEY');

    const url_games = `http://localhost:8000/api/games?search=`;

    const AuthStr = 'Bearer '.concat(token);

    const GameData = new FormData;

    const [input, setInput] = useState("");

    const handleSearch = e => setInput(e.target.value);

    function goPosts(id) {

        setGameId(id);

        history.push("/Games/Posts");
    }

    const option = {
        method: "GET",
        headers: {'Accept': 'application/json',
        'Authorization': AuthStr,}, 
    }

    useEffect(() => {
        fetch(url_games + input, option)
        .then(response => response.json())
        .then(data => setGames(data))
        }, [input])

    function addGameToLibrary(id) {

        GameData.append("gameId", id);

        const option2 = {
            method: "POST",
            headers: {'Accept': 'application/json',
            'Authorization': AuthStr,},
            body: GameData 
        }

        fetch('http://localhost:8000/api/addGame', option2)
        .then(response => response)
        .then(data => data);
    }

    return (
        <div className="bg-purple">
            <div className="searchInput">
                <h1>Juegos</h1>
                <input onChange={handleSearch} value={input} type="search" placeholder="Buscar juegos..."/>
                <i className="fas fa-search"></i>
            </div>
            <div className="gamesContainer">
                {games.map((game, index) => {
                    return (
                        <div  className="gameContainer">
                            <div className="gameImg" style={{backgroundImage: `url(${game.gameImg})`}}></div>
                            <div  className="gameDescription">
                                <h3>{game.title}</h3>
                                <ul>
                                    <li><button onClick={() => goPosts(game.id)}>Publicaciones</button><button onClick={() => addGameToLibrary(game.id)}>Añadir</button></li>
                                    <li><span>Fecha: </span><span>{game.releaseDate}</span></li>
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
