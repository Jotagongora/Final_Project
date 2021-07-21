import React from 'react';
import {useForm} from '../hooks/useForm';
import {useAuthContext} from '../contexts/AuthContext';
import {NavLink, useHistory} from 'react-router-dom';
import './Login.css';
import Logo from '../Images/logo_transparent.png';

export default function Login() {

    const {logIn} = useAuthContext();

    const history = useHistory();
    
    const formInitialState = {username: "", password: ""};

    const [form, handleChange] = useForm(formInitialState);

    const handleSubmit = async e => {
        e.preventDefault();
        //TODO: capturar credenciales y hacer POST al server
    
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }
    
        const response = await fetch("http://localhost:8000/api/login_check", options)
        const data = await response.json();
    
        if(response.status === 200) {
            logIn(data.token, data.id);
            history.push("/User");
        } else {
            alert("credenciales incorrectas")
        }
    };

        

    return (
        <div className="login">
            <div className="loginImg"></div>
            <div>
                <img className="logo" src={Logo} alt="Logo" width="50%"/>
                <h2>Iniciar sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="emailInput">Email : </label>
                        <input className="input" name="username" type="email" onChange={handleChange} value={form.email} id="emailInput" placeholder="Introduce tu correo electrónico"/>
                    </div>
                    <div>
                        <label htmlFor="passwordInput">Contraseña : </label>
                        <input className="input" name="password" type="password" onChange={handleChange} value={form.email} id="passwordInput" placeholder="Introduce tu contraseña"/>
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

