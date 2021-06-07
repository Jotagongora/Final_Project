import React from 'react';
import './Friends.css';

export default function Friends() {
    return (
        <div>
            <div className="searchInput">
                <h1>Amigos</h1>
                <input type="search" placeholder="Buscar amigos..."/>
                <i className="fas fa-search"></i>
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
                    <li className="eachFriend">
                        <div className="friendImg"></div>
                        <div className="friendButtons">
                            <h3>Paula Miranda</h3>
                            <button className="profileButton">Ver perfil</button>
                            <button className="removeButton">Eliminar</button>
                        </div>
                    </li>
                    <li className="eachFriend">
                        <div className="friendImg"></div>
                        <div className="friendButtons">
                            <h3>Jesús Fernandez</h3>
                            <button className="profileButton">Ver perfil</button>
                            <button className="removeButton">Eliminar</button>
                        </div>
                    </li>
                    <li className="eachFriend">
                        <div className="friendImg"></div>
                        <div className="friendButtons">
                            <h3>Sergio Ramos</h3>
                            <button className="profileButton">Ver perfil</button>
                            <button className="removeButton">Eliminar</button>
                        </div>
                    </li>
                    <li className="eachFriend">
                        <div className="friendImg"></div>
                        <div className="friendButtons">
                            <h3>Zinedine Zidane</h3>
                            <button className="profileButton">Ver perfil</button>
                            <button className="removeButton">Eliminar</button>
                        </div>
                    </li>
                    <li className="eachFriend">
                        <div className="friendImg"></div>
                        <div className="friendButtons">
                            <h3>Roberto Carlos</h3>
                            <button className="profileButton">Ver perfil</button>
                            <button className="removeButton">Eliminar</button>
                        </div>
                    </li>
                    <li className="eachFriend">
                        <div className="friendImg"></div>
                        <div className="friendButtons">
                            <h3>Ron Wesley</h3>
                            <button className="profileButton">Ver perfil</button>
                            <button className="removeButton">Eliminar</button>
                        </div>
                    </li>
                    <li className="eachFriend">
                        <div className="friendImg"></div>
                        <div className="friendButtons">
                            <h3>Harry Potter</h3>
                            <button className="profileButton">Ver perfil</button>
                            <button className="removeButton">Eliminar</button>
                        </div>
                    </li>
                    <li className="eachFriend">
                        <div className="friendImg"></div>
                        <div className="friendButtons">
                            <h3>Gandalf el blanco</h3>
                            <button className="profileButton">Ver perfil</button>
                            <button className="removeButton">Eliminar</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
