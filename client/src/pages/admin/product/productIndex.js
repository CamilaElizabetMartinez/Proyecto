import React from 'react';
import { useState, useEffect } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { useHistory } from 'react-router-dom';
import { PRODUCT_INDEX_URL } from "../../../settings";
import TableProducts from "../../../components/TableProducts/TableProducts"


function ProductIndex() {

    const [products, setProducts] = useState([]);
    const { getAuthHeaders, isAuthenticated } = useAuthContext();
    const history = useHistory();

    useEffect(() => {
        const options = { headers: getAuthHeaders() };

        fetch(PRODUCT_INDEX_URL, options)
            .then(response => {
                if (!response.ok) throw new Error(response.statusText)
                return response.json();
            })
            .then(data => setProducts(data))
            .catch(err => {
                return history.push("iniciar-sesion")
            });
    }, [isAuthenticated, getAuthHeaders])

    console.log('valor products:',products)
    return (
        <div>
            <TableProducts products={products} />
        </div>
    )
}
export default ProductIndex;