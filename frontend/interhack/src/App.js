import logo from './logo.svg';
import './App.css';
import './style/productdetail.css';
import './style/grid.css';
import './style/index.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/index';
import Detalle from './components/detalle';
import Camera from './components/webCam/index';

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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;