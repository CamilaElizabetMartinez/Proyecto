import React from 'react';
import "./joinAsAproducer.css";
import { useForm } from "../../hooks/userForm";
import {Link} from "react-router-dom";


function JoinAsAproducer() {

    const formInitialState = { name: "", surname: "", city: "", phone: "", email: "" };
    const [form, handleChange] = useForm(formInitialState);

    const handleSubmit = async e => {
        e.preventDefault();
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
                            <input onChange={handleChange} className="form" value={form.name} name="name" type="text" placeholder="Nombre" />
                            <input onChange={handleChange} className="form" value={form.surname} name="surname" type="text" placeholder="Apellido" />
                            <input onChange={handleChange} className="form" value={form.country} name="city" type="text" placeholder="Ciudad" />
                            <input onChange={handleChange} className="form" value={form.address} name="address" type="text" placeholder="Dirección" />
                            <input onChange={handleChange} className="form" value={form.phone} name="phone" type="text" placeholder="Teléfono" />
                            <input onChange={handleChange} className="form" value={form.email} name="email" type="email" placeholder="Email" />

                            <div className="inputTermConditions">
                                <input type="checkbox" id="termConditions" name="termConditions" value="conditions" />
                                <label for="termConditions"><a href="https://www.youtube.com/watch?v=FDMq9ie0ih0">He leído y acepto la Política de Privacidad.</a></label>
                            </div>

                            <div className="inputTermConditions">
                                <Link to="/iniciar-sesion">¿Ya tienes una cuenta con nosotros?</Link>
                            </div>

                            <div className="inputSubmit">
                                <input type="submit" value="Enviar" className="btnSubmit" />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};
export default JoinAsAproducer;

//agregar fichero CSS y modificar las clases si hace falta.
//me quede en la modificacion de login.