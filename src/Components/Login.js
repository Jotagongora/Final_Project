import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom';
import './Login.css';
import Logo from '../Images/logo_transparent.png';

export default function Login() {

    const [loginUser, setLoginUser] = useState({
        username: "",
        password: ""
    });

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginUser)
     };

     console.log(loginUser);
     
    useEffect(() => {
        fetch("http://localhost:8000/api/login_check", requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
        }, [loginUser]);

    const newLoginUser = {...loginUser};

    const changeHandler = (e) => {
        if (e.target.name === "username") {
        newLoginUser.username = e.target.value;
        } else {
            newLoginUser.password = e.target.value;
        }
    }

    function submitHandler (e) {
        e.preventDefault();
        setLoginUser(newLoginUser);
    }
    


    return (
        <div className="login">
            <div className="loginImg"></div>
            <div>
                <img className="logo" src={Logo} alt="Logo" width="50%"/>
                <h2>Iniciar sesión</h2>
                <form>
                    <div>
                        <label htmlFor="emailInput">Email : </label>
                        <input className="input" name="username" type="text" onChange={changeHandler} id="emailInput" placeholder="Introduce tu correo electrónico"/>
                    </div>
                    <div>
                        <label htmlFor="passwordInput">Contraseña : </label>
                        <input className="input" name="password" type="text" onChange={changeHandler} id="passwordInput" placeholder="Introduce tu contraseña"/>
                    </div>
                    <div className="accountBlock">
                        <NavLink className="link" to="/CreateAccount">Crear cuenta</NavLink>
                        <button onClick={submitHandler} type="submit">Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

