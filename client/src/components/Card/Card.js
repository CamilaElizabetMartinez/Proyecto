import "./card.css"


export default function Cards() {
    return (
        <div className="row">
            <div className="card-group">

                <div className="col-xl-4">
                    <div className="card" id="cards">
                        <img src="/Images/cards/lorena.jpeg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title cardsTitle">Enrique</h5>
                            <p className="card-text cardsP">GUTENBEER</p>
                            <p className="card-text cardsP"><small className="text-muted"> Cervezas artesanales, todo tipo de variedad</small></p>
                            <div className="row">
                            <div className="col-xl-6 col-xs-12 text-align-center">
                                    <a className="cardLink" href="https://developer.mozilla.org/">Ver perfil</a>
                                </div>
                                <div className="col-xl-6 col-xs-12 text-align-center">
                                    <a className="cardLink" href="https://developer.mozilla.org/">Comprar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4">
                    <div className="card" id="cards">
                        <img src="/Images/cards/julio.jpeg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title cardsTitle">Julio</h5>
                            <p className="card-text cardsP">La quinta de Julio</p>
                            <p className="card-text cardsP"><small className="text-muted">Frutas y verduras ORGANICAS</small></p>
                            <div className="row">
                            <div className="col-xl-6 col-xs-12 text-align-center">
                                    <a className="cardLink" href="https://developer.mozilla.org/">Ver perfil</a>
                                </div>
                                <div className="col-xl-6 col-xs-12 text-align-center">
                                    <a className="cardLink" href="https://developer.mozilla.org/">Comprar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4">
                    <div className="card" id="cards">
                        <img src="/Images/cards/lorena.jpeg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title cardsTitle">Lorena</h5>
                            <p className="card-text cardsP">Milks veget</p>
                            <p className="card-text cardsP"><small className="text-muted">Todo tipo de variedad de leches de semillas </small></p>
                            <div className="row">
                            <div className="col-xl-6 col-xs-12 text-align-center">
                                    <a className="cardLink" href="https://developer.mozilla.org/">Ver perfil</a>
                                </div>
                                <div className="col-xl-6 col-xs-12 text-align-center">
                                    <a className="cardLink" href="https://developer.mozilla.org/">Comprar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};