import React from 'react';
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom';
import './Login.css';
import Logo from '../Images/logo_transparent.png';

export default function Login() {
    return (
        <div className="login">
            <div className="loginImg"></div>
            <div>
                <img className="logo" src={Logo} alt="Logo" width="50%"/>
                <h2>Iniciar sesión</h2>
                <form action="http://localhost:8000/login" method="POST">
                    <div>
                        <label htmlFor="emailInput">Email : </label>
                        <input className="input" type="text" id="emailInput" placeholder="Introduce tu correo electrónico"/>
                    </div>
                    <div>
                        <label htmlFor="passwordInput">Contraseña : </label>
                        <input className="input" type="text" id="passwordInput" placeholder="Introduce tu contraseña"/>
                    </div>
                    <div className="accountBlock">
                        <NavLink className="link" to="/CreateAccount">Crear cuenta</NavLink>
                        <button>Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

