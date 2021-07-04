import React, { useState, useEffect } from 'react';

export default function FriendOfFriends() {

    const [friendsOfFriends, setFriendsOfFriends] = useState([]);

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
            fetch("http://localhost:8000/api/17", option)
            .then(response => response.json())
            .then(data => console.log(data.friends))
            }, []);
    return (
        <div>
            {}
            <div className="bg-purple">
            <div className="padding-60">
                <ul className="friendList">
                    <li className="eachFriend">
                        <div className="friendImg"></div>
                        <div className="friendButtons">
                            <h3>Manuel García</h3>
                            <button className="profileButton">Añadir</button>
                        </div>
                    </li>
                    <li className="eachFriend">
                        <div className="friendImg"></div>
                        <div className="friendButtons">
                            <h3>Paula Miranda</h3>
                            <button className="profileButton">Añadir</button>
                        </div>
                    </li>
                    <li className="eachFriend">
                        <div className="friendImg"></div>
                        <div className="friendButtons">
                            <h3>Jesús Fernandez</h3>
                            <button className="profileButton">Añadir</button>
                        </div>
                    </li>
                    <li className="eachFriend">
                        <div className="friendImg"></div>
                        <div className="friendButtons">
                            <h3>Sergio Ramos</h3>
                            <button className="profileButton">Añadir</button>
                        </div>
                    </li>
                    <li className="eachFriend">
                        <div className="friendImg"></div>
                        <div className="friendButtons">
                            <h3>Zinedine Zidane</h3>
                            <button className="profileButton">Añadir</button>
                        </div>
                    </li>
                    <li className="eachFriend">
                        <div className="friendImg"></div>
                        <div className="friendButtons">
                            <h3>Roberto Carlos</h3>
                            <button className="profileButton">Añadir</button>
                        </div>
                    </li>
                    <li className="eachFriend">
                        <div className="friendImg"></div>
                        <div className="friendButtons">
                            <h3>Ron Wesley</h3>
                            <button className="profileButton">Añadir</button>
                        </div>
                    </li>
                    <li className="eachFriend">
                        <div className="friendImg"></div>
                        <div className="friendButtons">
                            <h3>Harry Potter</h3>
                            <button className="profileButton">Añadir</button>
                        </div>
                    </li>
                    <li className="eachFriend">
                        <div className="friendImg"></div>
                        <div className="friendButtons">
                            <h3>Gandalf el blanco</h3>
                            <button className="profileButton">Añadir</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}
