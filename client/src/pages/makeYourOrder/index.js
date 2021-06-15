import Cards from '../../components/Cards/Cards';

function MakeYourOrder() {
    return (
        <div className="container ">
            <div className="categoryTexProducts">
                <h2 className="categoryTitleProducts"> Productos</h2>
            </div>

            <div className="listWrapper">

                <div className="categorys">
                    <h4 className="categorysTitle">CATEGORÍAS</h4>
                </div>
                <ul>
                    <div className="categoryBeerHandcrafted">
                        <img src="/Images/makeYourOrder/cervezas.jpg" alt="" className="imageBeer"></img>
                        <a href="https://developer.mozilla.org/">
                            <div>Cervezas artesanales</div>
                        </a>
                    </div>
                    <div>
                        <img src="https://uploads-ssl.webflow.com/5fb28ade1a3059e30fd7f814/608adb393aee1ad3dd4daf4f_conservas.svg" alt="" className="imagePreserves"></img>
                        <a href="https://developer.mozilla.org/">
                            <div>Conservas</div>
                        </a>
                    </div>
                    <div>
                        <img src="#" alt="" className="imageFruitVeget"></img>
                        <a href="https://developer.mozilla.org/">
                            <div>Frutas y verduras</div>
                        </a>
                    </div>
                    <div>
                        <img src="" alt="" className="imageHony"></img>
                        <a href="https://developer.mozilla.org/">
                            <div>Mieles</div>
                        </a>
                    </div>
                    <div>
                        <img src="#" alt="" className="imageCheesesDairy"></img>
                        <a href="https://developer.mozilla.org/">
                            <div>Quesos y lácteos</div>
                        </a>
                    </div>
                    <div>
                        <img src="" alt="" className="imageBeer"></img>
                        <a href="https://developer.mozilla.org/">
                            <div>
                                Vino y bebidas detiladas
                            </div>
                        </a>
                    </div>
                </ul>
            </div>
            <div>
                <Cards/> 
            </div>
        </div>
    );
};
export default MakeYourOrder;

//Modificar menú