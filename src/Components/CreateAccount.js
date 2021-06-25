import React from 'react';
import './Login.css';
import Logo from '../Images/logo_transparent.png';

export default function CreateAccount() {
    return (
        <div className="login">
            <div className="loginImg"></div>
            <div>
                <h2>Crear cuenta</h2>
                <form action="http://localhost:8000/api" method="POST">
                    <div>
                        <label htmlFor="username">Nombre : </label>
                        <input className="input" type="text" id="name" name="name" placeholder="Introduce tu nombre"/>
                    </div>
                    <div>
                        <label htmlFor="lastname">Apellido : </label>
                        <input className="input" type="text" id="lastname" name="lastname" placeholder="Introduce tu nombre de usuario"/>
                    </div>
                    <div>
                        <label htmlFor="username">Nombre de usuario : </label>
                        <input className="input" type="text" id="username" name="username" placeholder="Introduce tu nombre de usuario"/>
                    </div>
                    <div>
                        <label htmlFor="emailInput">Email : </label>
                        <input className="input" type="text" id="emailInput" name="email" placeholder="Introduce tu correo electrónico"/>
                    </div>
                    <div>
                        <label htmlFor="passwordInput">Contraseña : </label>
                        <input className="input" type="text" id="passwordInput" name="password" placeholder="Introduce tu contraseña"/>
                    </div>
                    <div className="accountBlock">
                        <button>Crear cuenta</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
