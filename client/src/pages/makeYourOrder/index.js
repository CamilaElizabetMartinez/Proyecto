import Cards from '../../components/Cards/Cards';
import './makeYourOrder.css';

function MakeYourOrder() {
    return (
        <div>
            <div className="bannerIndexMakeYourOrder banner" style={{ backgroundImage: "url(/Images/makeYourOrder/productoresbanner.jpg)" }}>
                <div className="bannerTitle">
                    <h1 id="h1MakeYourOrder">PRODUCTORES</h1>
                </div>
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
                                    <li><a href="https://developer.mozilla.org/">CERVEZA ARTESANAL</a></li>

                                    <li><a href="https://developer.mozilla.org/">CONSERVA</a></li>
                                    <li><a href="https://developer.mozilla.org/">FRUTA Y VERDURA</a></li>
                                    <li><a href="https://developer.mozilla.org/">LECHE Y LACTEO</a></li>
                                    <li><a href="https://developer.mozilla.org/">MIEL</a></li>
                                    <li><a href="https://developer.mozilla.org/">VINO</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-8">
                        <Cards />
                    </div>
                </div>
            </div>

        </div>
    );
};
export default MakeYourOrder;