import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Friends.css';
import {useAuthContext} from '../contexts/AuthContext';





export default function Friends() {

    const [input, setInput] = useState("");

    const {LoggedInUser, setFriendUser, setChargeFetch, chargeFetch} = useAuthContext();

    const token = localStorage.getItem('TOKEN_KEY');

    const AuthStr = 'Bearer '.concat(token);

    const history = useHistory();

    const [friend, setFriend] =  useState([]);

    const favoriteData = new FormData();

    
    function deleteFavorite(id) {
        
        favoriteData.append("favoriteId", id);
        
        const option = {
            method: "POST",
            headers: {'Accept': 'application/json',
            'Authorization': AuthStr,},
            body: favoriteData 
        }

        fetch('http://localhost:8000/api/removeFavorite', option)
        .then(response => response)
        .then(data =>data);

        setChargeFetch(!chargeFetch);
    }

  
    const option = 
        { headers: 
            {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': AuthStr,
            
            }};

    useEffect(() => {
        fetch(`http://localhost:8000/api/friends/${LoggedInUser}`, option)
        .then(response => response.json())
        .then(data => setFriend(data))
        }, [chargeFetch]);


    function goProfile(id) {
        setFriendUser(id);
        history.push("/Friends/FriendProfile");
      
    }

    const handleSearch = e => {
        setInput(e.target.value);
    }

        

    return (
        <div className="bg-purple">
            <div className="searchInput">
                <h1>Favoritos</h1>
                <input type="search" onChange={handleSearch} value={input} placeholder="Buscar amigos..."/>
                <i className="fas fa-search"></i>
            </div>
            <div>
                <ul className="friendList">
                    {friend.map((friend, index)=> {
                        return (
                        <li className="eachFriend" key={index}>
                            <div className="friendImg" style={{backgroundImage: `url(${friend.avatar})`}}></div>
                            <div className="friendButtons">
                                <h3>{friend.username}</h3>
                                <button onClick={() => goProfile(friend.id)} className="profileButton">Ver perfil</button>
                                <button onClick={() => deleteFavorite(friend.id)} className="removeButton">Eliminar</button>
                            </div>
                        </li>
                        )
                     })}
                </ul>
            </div>
        </div>
    )
}
