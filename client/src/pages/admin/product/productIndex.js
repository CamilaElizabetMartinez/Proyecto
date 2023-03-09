import React from 'react';
import { useState, useEffect } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { useHistory } from 'react-router-dom';
import { API_PRODUCT_ADMIN } from "../../../settings";
import TableProducts from "../../../components/TableProducts/TableProducts"

const ProductIndex = () => {

    const [products, setProducts] = useState([]);
    const { getAuthHeaders, isAuthenticated } = useAuthContext();
    const history = useHistory();

    useEffect(() => {
        const options = { headers: getAuthHeaders() };

        fetch(API_PRODUCT_ADMIN, options)
            .then(response => {
                if (!response.ok) throw new Error(response.statusText)
                return response.json();
            })
            .then(data => setProducts(data))
            .catch(err => {
                return history.push("iniciar-sesion")
            });
    }, [isAuthenticated, getAuthHeaders])

    return (
        <TableProducts products={products} />
    )
}
export default ProductIndex;