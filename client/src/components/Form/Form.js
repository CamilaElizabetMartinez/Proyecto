import { useState, useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "../../hooks/userForm";
import { API_CATEGORY, API_PRODUCT_ADMIN } from "../../settings";
import { useHistory } from "react-router-dom";

const NewProductForm = () => {

    const initialFormState = {
        name: "",
        weight: "",
        price: "",
        // img_principal: "",
        category_id: ""
    }

    const [form, handleInputChange] = useForm(initialFormState)

    const { getAuthHeaders } = useAuthContext();

    const headers = getAuthHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
    })

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(form)
        }

        const response = await fetch(API_PRODUCT_ADMIN, options);

        if (response.status >= 200 && response.status < 300) {
            history.push("/producto/index")

        } else {
            alert("No se pudo añadir");
        }
        const data = await response.json();
    }

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(API_CATEGORY)
            .then(response => response.json())
            .then(data => setCategories(data));
    }, []);


    const mapOptionCategories = () => {
        return (
            categories.map(theCategory => <option value={theCategory.categoryId} key={theCategory.categoryId}>{theCategory.categoryName}</option>)
        )
    }

    return (
        <form className="form" onSubmit={handleSubmit} >
            <input onChange={handleInputChange} className="form-control mb-3" value={form.name} name="name" type="text" id="name" placeholder="Producto" />

            <div className="form-control mb-3">
                <label className="form-control mb-3" htmlFor="category_id">Categorias</label>
                <select required onChange={handleInputChange} name="category_id">
                    <option>Selecciona una categoria</option>
                    {categories && mapOptionCategories()}
                </select>
            </div>
            <input onChange={handleInputChange} className="form-control mb-3" value={form.weight} name="weight" type="text" id="weight" placeholder="Peso" />
            <input onChange={handleInputChange} className="form-control mb-3" value={form.price} name="price" type="text" id="price" placeholder="Precio" />

            {/* <div className="form-control mb-3">
                <label className="form-control mb-3">Imagen principal</label>
                <input onChange={handleInputChange} value={form.img_principal} type="file" id="img_principal" accept="png jpg jpeg" />
            </div>  */}

            <input type="submit" className="btnSubmit" value="Enviar" />
        </form>
    )
}
export default NewProductForm;