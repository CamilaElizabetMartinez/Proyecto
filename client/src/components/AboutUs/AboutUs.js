import './aboutus.css';
function Aboutus() {
    return (
        <div className="AboutUs">

            <div className="container">
                <div className="row">
                    <div className="col-12 AboutUsh1">
                        <h1 className="AboutUsTitle">Sobre nosotros</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src="/Images/aboutUs/UVAS.jpg" alt="" ></img>
                    </div>
                    <div className="col-md-6">
                        <p className="AboutUsparagraph">Nuestra página web se trata de unir productores locales que puedan difundir su marca y vender de manera online
                            sus productos.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Aboutus;