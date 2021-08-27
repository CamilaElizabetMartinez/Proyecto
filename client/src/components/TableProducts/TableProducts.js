import './listsproducts.css';
import ButtonCreateProduct from "../ButtonCreateProduct/ButtonCreateProduct";
import { useHistory } from "react-router-dom";

function ListsProducts({ products }) {

    const history = useHistory();

    const handleAdd = () => {
        history.push("/producto/crear");
    }

    return (
        <div className="container">
            <div className="containerBlockPanelAdmin buttonCreateproduct">
                <div className="block">
                    <ButtonCreateProduct onClick={handleAdd} />
                </div>
            </div>
            <div className="">
                <h1 className="mt-4">Productos</h1>

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Peso</th>
                            <th scope="col" id="priceHeader">Precio</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody id="tablebody">
                        {products.map((products, index) => {
                            return (
                                <tr key={index}>
                                    <td>{products.name}</td>
                                    <td>{products.category_id}</td>
                                    <td>{products.weight}</td>
                                    <td>{products.price}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
        </div>


    )
};


export default ListsProducts;