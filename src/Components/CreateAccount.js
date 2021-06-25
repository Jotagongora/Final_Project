import React from 'react';
import './Login.css';
import Logo from '../Images/logo_transparent.png';

export default function CreateAccount() {
    return (
        <div className="login">
            <div className="loginImg"></div>
            <div>
                <img className="logo" src={Logo} alt="Logo" width="50%"/>
                <h2>Crear cuenta</h2>
                <form action="POST">
                    <div>
                        <label htmlFor="username">Nombre de usuario : </label>
                        <input className="input" type="text" id="username" placeholder="Introduce tu nombre de usuario"/>
                    </div>
                    <div>
                        <label htmlFor="emailInput">Email : </label>
                        <input className="input" type="text" id="emailInput" placeholder="Introduce tu correo electrónico"/>
                    </div>
                    <div>
                        <label htmlFor="passwordInput">Contraseña : </label>
                        <input className="input" type="text" id="passwordInput" placeholder="Introduce tu contraseña"/>
                    </div>
                    <div className="accountBlock">
                        <a href="" className="link">Crear cuenta</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
