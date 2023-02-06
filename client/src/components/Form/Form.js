import { useState, useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "../../hooks/userForm";

export default function NewProductForm({ setProducts }) {

    const initialProductsState = {
        name: "",
        category_id: "",
        weight: "",
        price: "",
        imageProduct: "",
        img_principal: "",

    }

    const [form, setForm] = useState(initialProductsState);
    function handleInput(e) {
        const inputName = e.target.id;
        const newValue = e.target.value;

        setForm({...form, ...{[inputName]: newValue}})
    } 

    function submit(e) {
        e.preventDefault();

        const newProduct = {
            name: form.name,
            category_id: form.category_id,
            weight: form.weight,
            price: form.price,
            imageProduct: form.imageProduct,
            img_principal: form.img_principal,

        };
        //setProducts([...contacts, newProduct]) //Necesitaria recibir "contacts"
        setProducts(currentProducts => [...currentProducts, newProduct]);
        //e.target.reset(); 
        setForm(initialProductsState);//reiniciamos el formulario
    }

    return (
        <form className="form" onSubmit={submit}>

            <input className="form-control mb-3" type="text" id="name" value={form.name} onChange={handleInput} placeholder="Producto" />
            <input className="form-control mb-3" type="text" id="category_id" value={form.category_id} onChange={handleInput} placeholder="Categoria" />
            <input className="form-control mb-3" type="text" id="weight" value={form.weight} onChange={handleInput} placeholder="Peso" />
            <input className="form-control mb-3" type="text" id="price" value={form.price} onChange={handleInput} placeholder="Precio" />
            <label>Imagen del producto</label>
            <input className="form-control mb-3" type="file" id="imageProduct" accept="png jpg jpeg" value={form.imageProduct} onChange={handleInput} />
            <label>Imagen principal</label>
            <input className="form-control mb-3" type="file" id="img_principal" accept="png jpg jpeg" value={form.img_principal} onChange={handleInput} />
            <input type="submit" className="btnSubmit" value="Enviar" />
        </form>
    )
}