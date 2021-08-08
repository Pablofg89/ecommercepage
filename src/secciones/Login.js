import React from "react";
import './Login.scss';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="container" id="container">

            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    {/* <div className="social-container">
                        <a href="./home" className="social"></a>
                        <a href="#" className="social"></a>
                        <a href="#" className="social"></a>
                    </div>
                    <span>O con tu cuenta</span> */}
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <Link className="link" to="carrito">Restableser contraseña.</Link>
                    <button>Ingresar</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>Ingrese sus datos personales y comience su viaje con nosotros</p>
                        <button className="ghost" id="signIn">Ingresar</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                         <h1>HOLA!</h1>
                        <p>Ingrese sus datos personales y comience su viaje con nosotros</p>
                        <button className="ghost" id="signIn">Ingresar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login
