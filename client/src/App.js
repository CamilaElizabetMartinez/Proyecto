import Footer from "./components/Footer/Footer";
import Router from './routers/Router';

function App() {
  return (
    <div className="d-flex flex-column vh-100">     
      <Router />
      <Footer />
    </div>
  );
};

export default App;