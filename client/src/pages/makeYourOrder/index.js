import { useState, useEffect,useRef  } from 'react'
import Card1 from '../../components/Card/Card1';
import { INDEX_PRODUCT_PUBLIC, API_CATEGORY } from '../../settings'
import './makeYourOrder.css';

const MakeYourOrder = () => {

    //Se declara el estado de productos
    const [products, setProducts] = useState([]);

    let  inputText=useRef(null);

    //Se realiza la consulta a la API
    useEffect(() => {
        fetch(INDEX_PRODUCT_PUBLIC)
            .then(response => response.json())
            //Se recupera las entidades de productos
            .then(data => setProducts(data.productEntities))
    }, []);

    const handleSearch = async event => {
        event.preventDefault();
        const filterName = inputText.current.value;
        const URL = INDEX_PRODUCT_PUBLIC + "?filterName=" + filterName;

        fetch(URL)
            .then(response => response.json())
            .then(data => setProducts(data.productEntities));
        ;
    }
    

    const handleClickCategory = async event => {
        event.preventDefault();

        const categoryId = event.target.getAttribute("data-target-category-id");
        const URL = INDEX_PRODUCT_PUBLIC + "?filterCategory=" + categoryId;

        fetch(URL)
            .then(response => response.json())
            .then(data => setProducts(data.productEntities));
        ;
    }

    const mapCategory = () => {
        return (
            categories.map(theCategory => (
                <li data-target-category-id={theCategory.categoryId} onClick={handleClickCategory}
                    key={theCategory.categoryId}>{theCategory.categoryName}
                </li>
            ))
        )
    }

    //Se declara el estado de categorias
    const [categories, setCategories] = useState([]);
    //Se realiza la consulta a la API
    useEffect(() => {
        fetch(API_CATEGORY)
            .then(response => response.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div>
            <div className="bannerIndexMakeYourOrder banner" style={{ backgroundImage: "url(/Images/makeYourOrder/productoresbanner.jpg)" }}>
                <div className="bannerTitle">
                    <h1 id="h1MakeYourOrder">PRODUCTORES</h1>
                </div>
            </div>

            <div>
                <input type="text" ref={inputText}/>
                <button type="button" onClick={handleSearch}>Buscar</button>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="categoryList">

                            <div className="categorys">
                                <h4 className="categorysTitle">CATEGORÍAS</h4>
                            </div>
                            <div className="ulLi">
                                <ul>
                                    {categories && mapCategory()}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-8">
                        {products.map(product => (
                            <div key={product.id}>
                                <Card1 products={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MakeYourOrder;