import React from 'react';
import './Profile2.css';
import Avatar from '../Images/avatar_prueba.jpg';
import BgImg from '../Images/imagenfondo.jpg';

export default function Profile2() {
    return (
        <div className="profileContainer">
            <div className="profileHeader">
                <div className="box1">

                </div>
                <div className="box2">
                    
                </div>
                <div className="box3">

                </div>
            </div>
            <div className="profileImg"></div> {/*TODO: Arreglar margenes de foto perfil} */}
            <div>
                <h1 className="textSize">Juan Alberto</h1>
            </div>
        </div>
    )
}
