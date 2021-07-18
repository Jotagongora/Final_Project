import React from 'react';
import {useEffect, useState} from 'react';
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom';
import './Profile.css';
import FriendPosts from './FriendPosts';
import FriendPhotos from './FriendPhotos';
import ImageSlider from './ImageSlider';
import FriendOfFriends from './FriendOfFriends';
import FriendLibrary from './FriendLibrary';
import {useAuthContext} from '../contexts/AuthContext';


export default function FriendProfile() {

    const [actualUser, setActualUser] = useState({});

    const token = localStorage.getItem('TOKEN_KEY');

    const AuthStr = 'Bearer '.concat(token);

    const {friendUser} = useAuthContext();

    const option2 = {
        method: "GET",
        headers: {'Accept': 'application/json',
        'Authorization': AuthStr,}
    }

    useEffect(() => {
        fetch(`http://localhost:8000/api/${friendUser}`, option2)
        .then(response => response.json())
        .then(data => setActualUser(data));
        }, []);

    return (
        <div>
            <div className="profileContainer">
                <div className="bg-img" style={{backgroundImage: `url(${actualUser.bg_image})`}}> </div>
            </div>
            <div className="profileImg" style={{backgroundImage: `url(${actualUser.avatar})`}}></div>
                <div>
                    <h1 className="textSize">{actualUser.username}</h1>
                </div>
            <Router>
                <div>
                    <nav className="profileNav">
                        <NavLink className="navlinkProfile" to="/Friends/FriendProfile">Publicaciones</NavLink>
                        <NavLink className="navlinkProfile" to="/Friend/Friends">Amigos</NavLink>
                        <NavLink className="navlinkProfile" to="/Friend/Library">Biblioteca</NavLink>
                        <NavLink className="navlinkProfile" to="/Friend/Photos">Fotos</NavLink>
                    </nav>
                </div>
                <Switch>
                    <Route exact path="/Friends/FriendProfile" component={FriendPosts}/>
                    <Route exact path="/Friend/Photos" component={FriendPhotos}/>
                    <Route path="/Friend/Friends" component={FriendOfFriends}/>
                    <Route path="/Friend/Library" component={FriendLibrary}/>
                    <Route path="/User/Slider" component={ImageSlider}/>
                </Switch>
            </Router>
        </div>
    )
}

