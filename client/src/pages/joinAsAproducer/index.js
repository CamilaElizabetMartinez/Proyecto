import React from 'react'
import './joinAsAproducer.css'
import { REGISTER_URL } from '../../settings'
import { useAuthContext } from '../../context/AuthContext'
import { useForm } from '../../hooks/userForm'
import { Link, useHistory } from 'react-router-dom'
import { useEffect } from 'react'

const JoinAsAproducer = () => {

    const history = useHistory();

    const { isAuthenticated, signOut } = useAuthContext();

    useEffect(() => {
        /* nos comprueba si hay un usuario ya logueado y cierra sesion en tal caso, por una experiencia de usuario coherente */
        isAuthenticated && signOut();
        // eslint-disable-next-line
    }, [])


    const formInitialState = { name: "", surname1: "", surname2: "", city: "", address: "", phone: "",  email: "", password: ""};
    const [form, handleChange] = useForm(formInitialState);

    const handleSubmit = async e => {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        }

        const response = await fetch(REGISTER_URL, options);
        // eslint-disable-next-line
        const data = await response.json();

        if (response.status === 201) {
            alert("Cuenta creada con exito!")
            history.push("/login")
        } else if (response.status === 500) {
            alert("El nombre de usuario o el correo electrónico ya existen. Inténtalo de nuevo.")
        }
    };


    return (
        <div className="container">
            <div className="row ">
                <div className="mx-auto col-md-4">
                    <form onSubmit={handleSubmit}>
                        <div className="introductionText">
                            <h4 id="h4IntroductionText">Tienda online, más ventas con mejor visibilidad y reconocimiento de tu marca.
                                <br></br><br></br>
                                Háblanos sobre tu proyecto. En breve nos pondremos en contacto contigo para ayúdarte.
                            </h4>
                        </div>

                        <div className="inputBlock">
                            <input onChange={handleChange} className="form" value={form.name} name="name" type="text" placeholder="Nombre" id="newName" required />
                            <input onChange={handleChange} className="form" value={form.surname1} name="surname1" type="text" placeholder="Primer Apellido" id="surname1" required />
                            <input onChange={handleChange} className="form" value={form.surname2} name="surname2" type="text" placeholder="Segundo Apellido" id="surname2" required />
                            <input onChange={handleChange} className="form" value={form.city} name="city" type="text" placeholder="Ciudad" id="city" required />
                            <input onChange={handleChange} className="form" value={form.address} name="address" type="text" placeholder="Dirección" id="address" required/>
                            <input onChange={handleChange} className="form" value={form.phone} name="phone" type="text" placeholder="Teléfono" id="phone" required/>
                            <input onChange={handleChange} className="form" value={form.email} name="email" type="email" placeholder="Email" id="newEmail" required />
                            <input onChange={handleChange} className="form" value={form.password} name="password" type="password" id="newPassword" required />

                            <div className="inputTermConditions">
                                <Link to="/iniciar-sesion">¿Ya tienes una cuenta con nosotros?</Link>
                            </div>

                            <div className="inputSubmit">
                                {/* <input type="submit" value="Enviar" className="btnSubmit" /> */}
                                <button type="submit">Submit</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )

}
export default JoinAsAproducer;