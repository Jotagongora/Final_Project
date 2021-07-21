import React, {useEffect} from 'react';
import {useAuthContext} from '../contexts/AuthContext';

export default function Library() {

    const deleteData = new FormData();

    const {LoggedInUser, user, chargeFetch, setChargeFetch, setUser } = useAuthContext();

    const token = localStorage.getItem('TOKEN_KEY');

    const AuthStr = 'Bearer '.concat(token);

    const option = {
        method: "POST",
        headers: {'Accept': 'application/json',
        'Authorization': AuthStr,},
        body: deleteData 
    }

    const option2 = {
        headers: {'Accept': 'application/json',
        'Authorization': AuthStr,},
    }

    useEffect(() => {
        fetch(`http://localhost:8000/api/${LoggedInUser}`, option2)
        .then(response => response.json())
        .then(data => setUser(data.library))
        }, [chargeFetch]);

    function deletePost(id) {
        
        deleteData.append("gameId", id);

        fetch('http://localhost:8000/api/removeGame', option)
        .then(response => response)
        .then(data =>data);

        setChargeFetch(!chargeFetch);
    }

    return (
        <div>
            <div className="bg-purple padding-60">
            <div className="gamesContainer">
                {user.map((game, index) => {
                    return (
                        <div  className="library" key={index}>
                            <div className="closeIconDiv closeIconDiv2"><i onClick={() => deletePost(game.added_id)} id="deletePost" className="closeIcon fas fa-times"></i></div>
                            <div className="gameLibrary" style={{backgroundImage: `url(${game.image})`}}></div>
                            <div  className="gameDescription">
                                <h3>{game.title}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    )
}
