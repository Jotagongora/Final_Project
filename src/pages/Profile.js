import React from 'react';
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom';
import './Profile.css';
import Posts from './Posts';
import UserPhotos from './UserPhotos';
import ImageSlider from './ImageSlider';
import EditProfile from './EditProfile';
import Library from './Library';


export default function Profile() {
    return (
        <div>
            <div className="profileContainer">
                <div className="bg-img"> </div>
            </div>
            <div className="profileImg"></div>
                <div>
                    <h1 className="textSize">Juan Alberto</h1>
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
