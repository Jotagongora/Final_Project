import React, { useEffect, useState } from 'react';
import './Friends.css';


export default function People() {

    const [input, setInput] = useState("");

    const token = localStorage.getItem('TOKEN_KEY');

    const AuthStr = 'Bearer '.concat(token);

    const [people, setPeople] =  useState([]);

    const handleSearch = e => setInput(e.target.value);

    const favoriteData = new FormData();

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
                        <li className="eachFriend" key={index}>
                            <div className="friendImg" style={{backgroundImage: `url(${person.avatar})`}}></div>
                            <div className="friendButtons">
                                <h3>{person.username}</h3>
                                <button onClick={() => addFavorite(person.id)} className="profileButton">A??adir a favoritos</button>
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
