import React from 'react';
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom';
import './Profile.css';
import FriendPosts from './FriendPosts';
import UserPhotos from './UserPhotos';
import ImageSlider from './ImageSlider';
import FriendOfFriends from './FriendOfFriends';
import FriendLibrary from './FriendLibrary';




export default function FriendProfile() {
    return (
        <div>
            <div className="profileContainer">
                <div className="bg-img"> </div>
            </div>
            <div className="profileImg"></div>
                <div>
                    <h1 className="textSize">Pedro</h1>
                </div>
            <Router>
                <div>
                    <nav className="profileNav">
                        <NavLink className="navlinkProfile" to="/Friends/FriendProfile">Publicaciones</NavLink>
                        <NavLink className="navlinkProfile" to="/User/Friends">Amigos</NavLink>
                        <NavLink className="navlinkProfile" to="/Friend/Library">Biblioteca</NavLink>
                        <NavLink className="navlinkProfile" to="/User/Photos">Fotos</NavLink>
                    </nav>
                </div>
                <Switch>
                    <Route exact path="/Friends/FriendProfile" component={FriendPosts}/>
                    <Route exact path="/User/Photos" component={UserPhotos}/>
                    <Route path="/User/Friends" component={FriendOfFriends}/>
                    <Route path="/Friend/Library" component={FriendLibrary}/>
                    <Route path="/User/Slider" component={ImageSlider}/>
                </Switch>
            </Router>
        </div>
    )
}

