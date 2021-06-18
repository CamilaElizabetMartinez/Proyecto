import React from 'react';
import "./joinAsAproducer.css";

function JoinAsAproducer() {
    return (
        <div className="container">
            <div className="row ">
                <div className="mx-auto col-md-4">
                    <form>
                        <div className="introductionText">
                            <h4 id="h4IntroductionText">Tienda online, más ventas con mejor visibilidad y reconocimiento de tu marca.
                                <br></br><br></br>
                                Háblanos sobre tu proyecto. En breve nos pondremos en contacto contigo para ayúdarte.
                            </h4>
                        </div>

                        <div className="inputBlock">
                            <input className="form" name="name"    type="text"   placeholder="Nombre" /> 
                            <input className="form" name="surName" type="text"   placeholder="Apellido" />
                            <input className="form" name="country" type="text"   placeholder="País" />
                            <input className="form" name="phone"   type="text"   placeholder="Teléfono" />
                            <input className="form" name="email"   type="email"  placeholder="Email" />
                
                            <div className="inputTermConditions">
                                <input type="checkbox" id="termConditions" name="termConditions" value="conditions" />
                                <label for="termConditions"><a href="https://www.youtube.com/watch?v=FDMq9ie0ih0">He leído y acepto la Política de Privacidad.</a></label>
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