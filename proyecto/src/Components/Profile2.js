import React from 'react';
import './Profile2.css';
import Avatar from '../Images/avatar_prueba.jpg';
import BgImg from '../Images/crop.php.jpeg';

export default function Profile2() {
    return (
        <div>
            <div className="profileHeader">
                <div>

                </div>
                <div className="bg-img">
                    <img src={BgImg} alt="bg-img" width="100%" height="200px"/>
                    <img src={Avatar} alt="avatar" width="25%"/>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
