import React from 'react';
import { useState, useEffect } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { PRODUCT_INDEX_URL } from "../../../settings";
import TableProducts from "../../../components/TableProducts/TableProducts"


function ProductIndex() {

    const [products, setProducts] = useState([]);

    const { getAuthHeaders, isAuthenticated } = useAuthContext();

    /* const {getAuthHeaders, isAuthenticated } = useAuthContext();
    const [products, setProducts] = useState("");
 */
    useEffect(() => {

        const options = {
            headers: getAuthHeaders({
                "Content-type": "application/json",
                "Accept": 'application/json'
            })
        };

        fetch(PRODUCT_INDEX_URL, options)
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    /*   useEffect(() => {
          const options = {headers: getAuthHeaders()};
  
          fetch(PRODUCT_INDEX_URL, options)
          .then(response => {
              if(!response.ok) throw new Error(response.statusText)
              return response.json();
          })
          .then(data => setProducts(data.message))
          .catch(err => {
              console.log(err, "You are not authorized to see this.");
              return <Redirect to="/inisiar-sesion" />;
          });
      }, [ isAuthenticated, getAuthHeaders]) */

    return (
        <div>
            <TableProducts products={products} />
        </div>
    )
}
export default ProductIndex;