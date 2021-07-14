import React, { useEffect, useState } from 'react';
import { useHistory, NavLink, BrowserRouter as Route } from 'react-router-dom';
import './Friends.css';
import {useAuthContext} from '../contexts/AuthContext';





export default function Friends() {

    const {LoggedInUser, setFriendUser} = useAuthContext();

    const token = localStorage.getItem('TOKEN_KEY');

    const AuthStr = 'Bearer '.concat(token);

    const history = useHistory();

    const [friend, setFriend] =  useState([]);

    



    const option = 
        { headers: 
            {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': AuthStr,
            
            }};

    useEffect(() => {
        fetch(`http://localhost:8000/api/${LoggedInUser}`, option)
        .then(response => response.json())
        .then(data => setFriend(data.friends))
        }, []);

    

    function goProfile(id) {
        setFriendUser(id);
        history.push("/Friends/FriendProfile");
      
    }
        

    return (
        <div className="bg-purple">
            <div className="searchInput">
                <h1>Amigos</h1>
                <input type="search" placeholder="Buscar amigos..."/>
                <i className="fas fa-search"></i>
            </div>
            <div>
                <ul className="friendList">
                    {friend.map((friend, index)=> {
                        return (
                        <li className="eachFriend">
                            <div className="friendImg" style={{backgroundImage: `url(${friend.avatar})`}}></div>
                            <div className="friendButtons">
                                <h3>{friend.username}</h3>
                                <button onClick={() => goProfile(friend.id)} className="profileButton">Ver perfil</button>
                                <button className="removeButton">Eliminar</button>
                            </div>
                        </li>
                        )
                     })}
                </ul>
            </div>
        </div>
    )
}
