import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom';
import './Login.css';
import Logo from '../Images/logo_transparent.png';

export default function Login() {

    const [loginUser, setLoginUser] = useState({
        email: "",
        password: ""
    });

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
     };

     let sendInfo = false;

     const sendFunction = (e) => {
         sendInfo = !sendInfo;
     }
     
    useEffect(() => {
        fetch("http://localhost:8000/api/login_check", requestOptions)
        .then(response => response.json())
        .then(data => data)
        }, [sendInfo]);
    

    const changeHandler = (e) => {
        setLoginUser({[e.target.name]: e.target.value,});
        console.log(loginUser);
    }

    


    return (
        <div className="login">
            <div className="loginImg"></div>
            <div>
                <img className="logo" src={Logo} alt="Logo" width="50%"/>
                <h2>Iniciar sesión</h2>
                <form onSubmit={sendFunction}>
                    <div>
                        <label htmlFor="emailInput">Email : </label>
                        <input className="input" name="email" type="text" onChange={changeHandler} id="emailInput" placeholder="Introduce tu correo electrónico"/>
                    </div>
                    <div>
                        <label htmlFor="passwordInput">Contraseña : </label>
                        <input className="input" name="password" type="text" onChange={changeHandler} id="passwordInput" placeholder="Introduce tu contraseña"/>
                    </div>
                    <div className="accountBlock">
                        <NavLink className="link" to="/CreateAccount">Crear cuenta</NavLink>
                        <button type="submit">Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

