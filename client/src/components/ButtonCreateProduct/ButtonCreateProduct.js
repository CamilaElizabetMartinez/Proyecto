import './buttoncreateproduct.css';
import { Link } from 'react-router-dom';

export default function createButton() {
    return (
        <div>
            <Link to="/producto/crear" className="btnCreateProduct" type="submit" value="CREAR PRODUCTO">Crear Producto
                <i className="iconFa fa fa-plus"></i></Link>
        </div>
    )
}