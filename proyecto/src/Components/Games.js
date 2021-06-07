import React from 'react';
import {useEffect} from 'react';

export default function Games() {

    const url_games = `https://api.rawg.io/api/games?key=b24718c4e7d741ba95a738653024114d`;

    useEffect(() => {
        fetch(url_games)
        .then(response => response.json())
        .then(data => console.log(data.results))
        }, []);

    return (
        <div>
            
        </div>
    )
}
