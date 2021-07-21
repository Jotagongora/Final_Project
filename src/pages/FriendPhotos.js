import React, {useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import {GlobalContext} from '../Navbar';
import {useAuthContext} from '../contexts/AuthContext';

export default function UserPhotos() {

    const {friendUser, setPhotos, photos} = useAuthContext();

    const token = localStorage.getItem('TOKEN_KEY');

    const AuthStr = 'Bearer '.concat(token);

    const {setCurrent} = useContext(GlobalContext);

    let history = useHistory();

    function handleClick(index) {
        return () => {
            history.push(`/User/Slider`);
            setCurrent(index)
        }   
    }


    const option = 
        { headers: 
            {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': AuthStr,
        }};

    useEffect(() => {
        fetch(`http://localhost:8000/api/${friendUser}`, option)
        .then(response => response.json())
        .then(data => setPhotos(data.photos))
        }, []);

    return (
        <div>
            <div className="bgPostColor">
                <div className="navContainer">
                    <div>
                       <div className="gridPhotosContainer">
                       {photos.map((slide, index) => { 
                        return (
                            <div onClick={handleClick(index)} className="photos" style={{backgroundImage: `url(${slide.image})`}}></div>
                            )
                        })}
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
