import React from 'react';
import './Friends.css';

export default function Friends() {
    return (
        <div>
            <div>
                <h1>Amigos</h1>
            </div>
            <div>
                <ul className="friendList">
                    <li className="eachFriend">
                        <div className="friendImg"></div>
                        <div className="friendButtons">
                            <h3>Manuel García</h3>
                            <button className="profileButton">Ver perfil</button>
                            <button className="removeButton">Eliminar</button>
                        </div>
                    </li>
                    <li>
                        <h1>Pedro García</h1>
                    </li>
                    <li>
                        <h1>Jhony Maison</h1>
                    </li>
                </ul>
            </div>
        </div>
    )
}
