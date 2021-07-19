import React, { useState, useEffect } from 'react';
import {useAuthContext} from '../contexts/AuthContext';

export default function FriendOfFriends() {

    const [friendOfFriends, setFriendOfFriends] = useState();

    const {friendUser} = useAuthContext();

    const token = localStorage.getItem('TOKEN_KEY');

    const AuthStr = 'Bearer '.concat(token);
    
    
    const option = 
        { headers: 
            {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': AuthStr,
            
            }};

        useEffect(() => {
            fetch(`http://localhost:8000/api/${friendUser}`, option)
            .then(response => response.json())
            .then(data => setFriendOfFriends(data.friends))
            }, []);
    return (                 
            <div>    
                <div className="bg-purple">
                    <div className="padding-60">
                        <ul className="friendList">
                        {friendOfFriends && friendOfFriends.map((friend, index) => {
                            return (
                            <li className="eachFriend">
                                <div className="friendImg" style={{backgroundImage: `url(${friend.avatar})`}}></div>
                                <div className="friendButtons">
                                    <h3>{friend.username}</h3>
                                    <button className="profileButton friendProfile">Añadir</button>
                                    <button style={{visibility:"hidden"}}></button>
                                </div>
                            </li>
                            )
                        })}
                        </ul>
                    </div>
                </div>
            </div>
    )
}
