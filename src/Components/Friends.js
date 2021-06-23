import React from 'react';
import './Friends.css';
import {UsersData} from '../Data/UsersData';

export default function Friends() {
    return (
        <div className="bg-purple">
            <div className="searchInput">
                <h1>Amigos</h1>
                <input type="search" placeholder="Buscar amigos..."/>
                <i className="fas fa-search"></i>
            </div>
            <div>
                <ul className="friendList">
                    {UsersData.map((user, index)=> {
                        return (
                        <li className="eachFriend">
                            <div className="friendImg" style={{backgroundImage: `url(${user.image})`}}></div>
                            <div className="friendButtons">
                                <h3>{user.username}</h3>
                                <button className="profileButton">Ver perfil</button>
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
