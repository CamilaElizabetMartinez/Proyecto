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
              <h1 className="h1AboutUs">NOSOTROS</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src="/Images/home/UVAS.jpg" alt="" />
            </div>
            <div className="col-md-6">
              <p className="pAboutUs">
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to. This is a wider card with supporting text below as a natural lead-in to additional content.
                This card has even longer content than the first to.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Home;