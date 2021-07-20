import React, { useEffect, useState } from 'react';
import { useHistory, NavLink, BrowserRouter as Route } from 'react-router-dom';
import './Friends.css';
import {useAuthContext} from '../contexts/AuthContext';





export default function Friends() {

    const [input, setInput] = useState("");

    const token = localStorage.getItem('TOKEN_KEY');

    const AuthStr = 'Bearer '.concat(token);

    const history = useHistory();

    const [people, setPeople] =  useState([]);

    const handleSearch = e => setInput(e.target.value);

    const favoriteData = new FormData;

    function addFavorite(id) {
        
        favoriteData.append("favoriteId", id);
        
        const option = {
            method: "POST",
            headers: {'Accept': 'application/json',
            'Authorization': AuthStr,},
            body: favoriteData 
        }

        fetch('http://localhost:8000/api/addFavorite', option)
        .then(response => response)
        .then(data =>data);

        // setChargeFetch(!chargeFetch);
    }

    

  
    const option = 
        { headers: 
            {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': AuthStr,
            
            }};

    useEffect(() => {
        fetch(`http://localhost:8000/api/?search=` + input, option)
        .then(response => response.json())
        .then(data => setPeople(data))
        }, [input]);

        console.log(people);

        

    return (
        <div className="bg-purple">
            <div className="searchInput">
                <h1>Gente</h1>
                <input onChange={handleSearch} value={input} type="search" placeholder="Buscar personas..."/>
                <i className="fas fa-search"></i>
            </div>
            <div>
                <ul className="friendList">
                    {people.map((person, index)=> {
                        return (
                        <li className="eachFriend">
                            <div className="friendImg" style={{backgroundImage: `url(${person.avatar})`}}></div>
                            <div className="friendButtons">
                                <h3>{person.username}</h3>
                                <button onClick={() => addFavorite(person.id)} className="profileButton">Añadir a favoritos</button>
                                <button style={{visibility: "hidden"}}></button>
                            </div>
                        </li>
                        )
                     })}
                </ul>
            </div>
        </div>
    )
}
