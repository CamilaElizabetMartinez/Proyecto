import { NavLink } from "react-router-dom";
import './navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light Navbar">
            <div className="mx-auto">

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
        </nav>
    );
};
