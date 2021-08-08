import logo from './logo.svg';
import './App.css';
import './style/productdetail.css';
import './style/grid.css';
import './style/footer.css';
import './style/listado.css';
import './style/thankyou.css';
import './style/index.scss';
import './style/checkout.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/index';
import Detalle from './components/detalle';
import Camera from './components/webCam/index';
import Checkout from './components/checkout/checkout';
import ListadoProducto from './components/listadoProductos/listadoProductos';
import Carrito from './components/carritoCompras/carritoCompras';
import Thankyou from './components/thankyou/thankyou';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Switch>
          <Route path="/detalle">
            <Detalle />
          </Route>
          <Route path="/camera">
            <Camera />
          </Route>
          <Route path="/resultados">
            <ListadoProducto/>
          </Route>
          <Route path="/carrito">
            <Carrito/>
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>

          <Route path="/thankyou">
            <Thankyou/>
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
