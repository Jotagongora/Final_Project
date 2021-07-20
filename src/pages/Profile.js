import React from 'react';
import {useEffect, useState} from 'react';
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom';
import './Profile.css';
import Posts from './Posts';
import UserPhotos from './UserPhotos';
import ImageSlider from './ImageSlider';
import EditProfile from './EditProfile';
import Library from './Library';
import {useAuthContext} from '../contexts/AuthContext';


export default function Profile() {

    const [actualUser, setActualUser] = useState({});

    const token = localStorage.getItem('TOKEN_KEY');

    const AuthStr = 'Bearer '.concat(token);

    const {LoggedInUser, chargeFetch} = useAuthContext();

    const option2 = {
        method: "GET",
        headers: {'Accept': 'application/json',
        'Authorization': AuthStr,}
    }

    useEffect(() => {
        fetch(`http://localhost:8000/api/${LoggedInUser}`, option2)
        .then(response => response.json())
        .then(data => setActualUser(data));
        }, [chargeFetch]);
    

    return (
        <div>
            <div className="profileContainer">
                <div className="bg-img" style={{backgroundImage: `url(${actualUser.bg_image})`}}></div>
            </div>
            <div className="profileImg" style={{backgroundImage: `url(${actualUser.avatar})`}}></div>
                <div>
                    <h1 className="textSize">{actualUser.username}</h1>
                </div>
            <Router>
                <div>
                    <nav className="profileNav">
                        <NavLink className="navlinkProfile" to="/User">Publicaciones</NavLink>
                        <NavLink className="navlinkProfile" to="/User/EditProfile">Editar Perfil</NavLink>
                        <NavLink className="navlinkProfile" to="/User/Library">Biblioteca</NavLink>
                        <NavLink className="navlinkProfile" to="/User/Photos">Fotos</NavLink>
                    </nav>
                </div>
                <Switch>
                    <Route exact path="/User" component={Posts}/>
                    <Route exact path="/User/Photos" component={UserPhotos}/>
                    <Route exact path="/User/EditProfile" component={EditProfile}/>
                    <Route exact path="/User/Library" component={Library}/>
                    <Route exact path="/User/Slider" component={ImageSlider}/>
                </Switch>
            </Router>
        </div>
    )
}
