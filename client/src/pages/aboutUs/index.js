import AboutUs from '../../components/AboutUs/AboutUs';
import './aboutUs.css'

function aboutUs() {
    return (
        <>
            <div className="banner AboutUsBanner" style={{ backgroundImage: "url(/Images/aboutUs/banner-quienes-somos-pensamos-como-comemos.jpg)" }}>
            <h3 className="AboutUsh3">¿Quienes somos?</h3>
            </div>

            <AboutUs />
        </>



    );
};

export default aboutUs;