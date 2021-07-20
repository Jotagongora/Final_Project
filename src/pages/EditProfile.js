import React from 'react';
import './EditProfile.css';
import {useAuthContext} from '../contexts/AuthContext';

export default function EditProfile() {

    const {setChargeFetch, chargeFetch} = useAuthContext();

    const token = localStorage.getItem('TOKEN_KEY');

    const AuthStr = 'Bearer '.concat(token);

    const EditData = new FormData;


    function handleChangeBg() {
        let docName = document.getElementById('file-upload').files[0].name;
        document.getElementById('info').innerHTML = docName;
    }

    function handleChangeAvatar() {
        let docName = document.getElementById('file-avatar').files[0].name;
        document.getElementById('avatar').innerHTML = docName;
    }

    const edit = e => {
        e.preventDefault();

        if (e.target.value === "1") {

            const usernameInput = document.querySelector('#username');

            EditData.append("username", usernameInput.value);

            usernameInput.value = "";

            setChargeFetch(!chargeFetch);
        }

        if (e.target.value === "2") {

            const bgImageInput = document.querySelector('#file-upload');

            EditData.append("file-upload", bgImageInput.files[0]);

            document.getElementById('info').innerHTML = "";

            setChargeFetch(!chargeFetch);
        }

        if (e.target.value === "3") {

            const avatarInput = document.querySelector('#file-avatar');

            EditData.append("file-avatar", avatarInput.files[0]);

            document.getElementById('avatar').innerHTML = "";

            setChargeFetch(!chargeFetch);
          
        }
        
    
        const option = {
            method: "POST",
            headers: {'Accept': 'application/json',
            'Authorization': AuthStr,},
            body: EditData 
        }

        fetch('http://localhost:8000/api/edit', option)
        .then(response => response.json())
        .then(data => data);

    }

    return (
        <div className="bgPostColor">
            <div className="letters">
                <p>Cambiar nombre de usuario</p>
                <form action="">
                    <input type="text" id="username" name="username" placeholder="Introduce el nuevo nombre..."/>
                    <button value="1" onClick={edit}>Enviar</button>
                </form >
                <p>Cambiar imagen de fondo</p>
                <form action="" className="upload-image">
                    <label for="file-upload" className="subir">
                        <i className="fas fa-cloud-upload-alt"></i> Subir archivo
                    </label>
                    <input id="file-upload" name="file-upload" onChange={handleChangeBg} type="file" style={{display: "none"}}/>
                    <p className="upload-name" id="info"></p>
                    <button value="2" onClick={edit}>Enviar</button>
                </form>
                <p>Cambiar avatar</p>
                <form action="" className="upload-image">
                    <label for="file-avatar" className="subir">
                        <i className="fas fa-cloud-upload-alt"></i> Subir archivo
                    </label>
                    <input id="file-avatar" name="file-avatar" onChange={handleChangeAvatar} type="file" style={{display: "none"}}/>
                    <p className="upload-name" id="avatar"></p>
                    <button value="3" onClick={edit}>Enviar</button>
                </form>
            </div>
        </div>
    )
}
