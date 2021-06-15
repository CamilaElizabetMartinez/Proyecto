import Carousel from '../../components/Carousel/Carousel';
import Card from '../../components/Card/Card';
import './home.css';

function Home() {
  return (
    <div>
      <section id="carousel">
        <Carousel />
      </section>

      <section id="featuredProducers">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>PRODUCTORES DESTACADOS</h1>
            </div>
          </div>
          <div className="row">
            <Card />
          </div>
        </div>
      </section>

      <section id="aboutUs">
        <div className="container">
          <div className="row">

            <div className="col-12">
              <h1>NOSOTROS</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src="" alt="" />
            </div>
            <div className="col-md-6">
              <p> </p>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Home;