import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import home from "../pages/home";
import news from "../pages/news";
import makeYourOrder from "../pages/makeYourOrder";
import joinAsAproducer from "../pages/joinAsAproducer";
import aboutUs from "../pages/aboutUs";
import login from "../pages/login";
import passwordReset from "../pages/passwordReset";
import CreateProduct from "../pages/admin/product/createProduct";
import ProductIndex from "../pages/admin/product/productIndex";
import AdminRoute from "../pages/admin/adminRoute";


export default function Router() {
    return (
        <div>
            <AuthContext>
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={home} />
                        <Route path="/noticias" component={news} />
                        <Route path="/haz-tu-pedido" component={makeYourOrder} />
                        <Route path="/unete-como-productor" component={joinAsAproducer} />
                        <Route path="/quienes-somos" component={aboutUs} />
                        <Route path="/iniciar-sesion" component={login} />
                        <Route path="/haz-olvidado-tu-contraseña" component={passwordReset} />
                        
                        <Route path="/producto/index" component={ProductIndex} /> 
                        <Route path="/producto/crear" component={CreateProduct} /> 

                      {/*   <AdminRoute path="/producto/index">
                           <ProductIndex />
                        </AdminRoute>
                        <AdminRoute path="/producto/crear">
                            <CreateProduct />
                        </AdminRoute> */}

                    </Switch>
                </BrowserRouter>
            </AuthContext>
            <Footer />
        </div>
    );
};
