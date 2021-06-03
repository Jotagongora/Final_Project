import React from 'react'
import './Profile.css';
import Avatar from '../Images/avatar_prueba.jpg';
import PostImg from '../Images/wildrift.jpg';
import Like from '../Icons/me-gusta.png';

export default function Profile() {
    return (
        <div>
            <div className="cover">
                <div className="profileCover">
                    <img width="145px" height="145px" src={Avatar} alt=""/>
                    <h1 className="profileName">Juan Alberto</h1>
                    <div>
                        <div>
                            <h2 className="lvlExp">5</h2>
                        </div>
                        <progress max="100" value="70"></progress>
                    </div>
                </div>
                <div className="profileCover">
                <img width="600px" height="394px" src={PostImg} alt=""/>
                <nav className="profileNav">
                    <a href="">Publicaciones</a>
                    <a href="">Fotos</a>
                    <a href="">Amigos</a>
                    <a href="">Misiones</a>
                </nav>
                </div>
                <div></div>
            </div>
            <div className="postArea">
                <div className="bg-gray"></div>
                <div className="bg-gray">
                    <div className="post">
                        <h3>Titulo post</h3>
                        <p>02/06/2021</p>
                    </div>
                    <div>
                        <textarea name="post" id="post" cols="57" rows="10"></textarea>
                    </div>
                </div>
                <div className="bg-gray"></div>
            </div>
        </div>
    )
}
