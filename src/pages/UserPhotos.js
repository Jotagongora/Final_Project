import React, {useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import {GlobalContext} from '../Navbar';
import {useAuthContext} from '../contexts/AuthContext';

export default function UserPhotos() {

    const {LoggedInUser, setPhotos, photos} = useAuthContext();

    const token = localStorage.getItem('TOKEN_KEY');

    const AuthStr = 'Bearer '.concat(token);

    const EditData = new FormData();

    const {setCurrent} = useContext(GlobalContext);

    let history = useHistory();

    function handleChange() {
        let docName = document.getElementById('file-upload').files[0].name;
        document.getElementById('info').innerHTML = docName;
    }

    function handleClick(index) {
        return () => {
            history.push(`/User/Slider`);
            setCurrent(index)
        }   
    }

    const send = e => {
        e.preventDefault();

        if (true) {

            const fileInput = document.querySelector('#file-upload');

            EditData.append("file-upload", fileInput.files[0]);

            document.getElementById('info').innerHTML = "";
        }
    
        const option2 = {
            method: "POST",
            headers: {'Accept': 'application/json',
            'Authorization': AuthStr,},
            body: EditData 
        }

        fetch('http://localhost:8000/api/photos', option2)
        .then(response => response.json())
        .then(data => data);

    }

    const option = 
        { headers: 
            {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': AuthStr,
        }};


    useEffect(() => {
        fetch(`http://localhost:8000/api/${LoggedInUser}`, option)
        .then(response => response.json())
        .then(data => setPhotos(data.photos))
        }, []);

    return (
        <div>
            <div className="bgPostColor">
                <form action="" className="upload-image">
                    <label htmlFor="file-upload" className="subir">
                        <i className="fas fa-cloud-upload-alt"></i> Subir archivo
                    </label>
                    <input id="file-upload" onChange={handleChange} name="file-upload" type="file" style={{display: "none"}}/>
                    <p className="upload-name" id="info"></p>
                    <button onClick={send}>Enviar</button>
                </form>
                <div className="navContainer">
                    <div>
                       <div className="gridPhotosContainer">
                       {photos.map((slide, index) => { 
                        return (
                            <div key={index} onClick={handleClick(index)} className="photos" style={{backgroundImage: `url(${slide.image})`}}></div>
                            )
                        })}
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
