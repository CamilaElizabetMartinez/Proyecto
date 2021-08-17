import React from 'react';
import "./login.css";
import { Link, useHistory } from 'react-router-dom';
import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "../../hooks/userForm";
import { LOGIN_URL } from "../../settings";
import jwt_decode from "jwt-decode";

function Login() {

    const formInitialState = { username: "", password: "" };
    const [form, handleChange] = useForm(formInitialState);
    const { isAuthenticated, signIn } = useAuthContext();
    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(form)
        }

        const response = await fetch(LOGIN_URL, options);
        const data = await response.json();


        if (response.status >= 200 && response.status < 300) {
            const token = data.token;
            const user = jwt_decode(token);

            signIn(token, user);

            if (user.roles.includes("ROLE_ADMIN")) {
                history.push("/producto/index")
            } else {
                history.push("/")
            }

        } else {
            alert("Acceso incorrecto, verifique el email y la contraseña");
        }
    };

    return (
        <div className="container">
            <div className="row ">
                <div className="mx-auto col-md-4">
                    <form onSubmit={handleSubmit}>
                        <div className="inputBlockLogin">
                            <h4 id="login">Iniciar sesión</h4>
                        </div>

                        <div className="inputBlock">

                            <label>Correo electrónico</label>
                            <input onChange={handleChange} value={form.email} name="username" id="emailLogin" className="form" type="email" placeholder="tuemail@tuemail.com" required />

                            <label>Contraseña</label>
                            <input onChange={handleChange} value={form.password} name="password" id="passwordLogin" className="form" type="password" placeholder="*******" required />

                            <div className="inputTermConditions">
                                <input className="btnSubmit" type="submit" value="Acceder" />
                            </div>

                            <div className="inputTermConditions">
                                <Link to="/passwordReset">¿Has olvidado tu contraseña?</Link>
                            </div>
                            <div className="inputTermConditions">
                                <Link to="/unete-como-productor">¿Quieres ser productor?</Link>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};
export default Login;

//agregar fichero CSS y modificar las clases si hace falta.
//me quede en la modificacion de login.
