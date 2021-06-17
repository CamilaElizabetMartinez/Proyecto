import "./card.css"


export default function Cards() {
    return (
        <div className="row">
            <div class="card-group">

                <div className="col-xl-4">
                    <div class="card" id="cards">
                        <img src="/Images/cards/lorena.jpeg" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title cardsTitle">Enrique</h5>
                            <p class="card-text cardsP">GUTENBEER</p>
                            <p class="card-text cardsP"><small class="text-muted"> Cervezas artesanales, todo tipo de variedad</small></p>
                            <div className="row">
                                <div className="col-xl-6">
                                    <a className="cardLink" href="https://developer.mozilla.org/">Ver perfil</a>
                                    <a className="cardLink" href="https://developer.mozilla.org/">Comprar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4">
                    <div class="card" id="cards">
                        <img src="/Images/cards/julio.jpeg" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title cardsTitle">Julio</h5>
                            <p class="card-text cardsP">La quinta de Julio</p>
                            <p class="card-text cardsP"><small class="text-muted">Frutas y verduras ORGANICAS</small></p>
                            <div className="row">
                                <div className="col-xl-6">
                                    <a className="cardLink" href="https://developer.mozilla.org/">Ver perfil</a>
                                    <a className="cardLink" href="https://developer.mozilla.org/">Comprar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4">
                    <div class="card" id="cards">
                        <img src="/Images/cards/lorena.jpeg" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title cardsTitle">Lorena</h5>
                            <p class="card-text cardsP">Milks veget</p>
                            <p class="card-text cardsP"><small class="text-muted">Todo tipo de variedad de leches de semillas </small></p>
                            <div className="row">
                                <div className="col-xl-6">
                                    <a className="cardLink" href="https://developer.mozilla.org/">Ver perfil</a>
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