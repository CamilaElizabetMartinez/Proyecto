import { NavLink } from "react-router-dom";
import './navbar.css';

export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light Navbar" role="navigation">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="mx-auto">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item link ">
                            <NavLink exact to="/" className="nav-link" activeClassName="active">Inicio</NavLink>
                        </li>
                        <li className="nav-item link">
                            <NavLink to="/noticias" className="nav-link" activeClassName="active">Noticias</NavLink>
                        </li>
                        <li className="nav-item link">
                            <NavLink to="/haz-tu-pedido/" className="nav-link" activeClassName="active">Haz tu pedido</NavLink>
                        </li>
                        <li className="nav-item link">
                            <NavLink to="/unete-como-productor/" className="nav-link" activeClassName="active">Únete como productor</NavLink>
                        </li>
                        <li className="nav-item link">
                            <NavLink to="/quienes-somos/" className="nav-link" activeClassName="active">¿Quiénes somos?</NavLink>
                        </li>
                        <li className="nav-item link">
                            <NavLink to="/iniciar-sesion/" className="nav-link" activeClassName="active">Iniciar sesión</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};
