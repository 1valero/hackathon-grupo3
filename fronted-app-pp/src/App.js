import React from 'react';
import './App.css';
import './style/productdetail.css';
import './style/grid.css';
import Colors from './components/Colors'
import DetailsThumb from './components/DetailsThumb';


class App extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "Zapatillas Hombre Puma 372602 03 X-Ray Blanco",
        "src": [
            "https://oechsle.vteximg.com.br/arquivos/ids/1791679-1500-1500/1660605.jpg",
            "https://oechsle.vteximg.com.br/arquivos/ids/1791680-1500-1500/1660605_1.jpg",
            "https://oechsle.vteximg.com.br/arquivos/ids/1791681-1500-1500/1660605_2.jpg",
            "https://oechsle.vteximg.com.br/arquivos/ids/1791683-1000-1000/1660605_4.jpg"
          ],
        "description": "Presentamos X-Ray, una carta de amor al estilo retro equipada con la mejor tecnología atlética que Puma tiene para ofrecer. Esta zapatilla presenta elementos gruesos y gráficamente de gran tamaño para satisfacer al entusiasta vintage que todos llevamos dentro, y se combina con una entresuela de EVA moldeada por inyección para que sigas caminando a la altura de la comodidad.",
        "content": "Cierre de cordones completo, Parte superior de malla, ante y piel sintética, Franja característica de Puma en contraste en el lateral, Suela de goma para tracción y agarre, SoftFoam + la plantilla de Puma para un paso instantáneo y una comodidad duradera que proporciona una amortiguación suave en cada paso del día, IMEVA entresuela de Puma para una sensación liviana y cómoda, Logo Puma en la lengüeta, Logo Puma en la parte posterior del talón.",
        "price": 279.00,
        "talla": [9],
        'gender':["hombre"],
        'brand':["puma"],
        "colors":["red"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className=" pdp-images" key={item._id}>

              
              <div className="row">
              <div className="col-7">
              <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>
              </div>          

              
              <div className="col-5">
              <div className="box">

              <div className="row topic">
                <div className="col-6"><span className="space-color-pd">{item.brand}</span></div>
                <div className="col-6"><span className="space-color-pd">{item.gender}</span></div>
              </div>

                <div className="row">
                  <h2>{item.title}</h2>
                </div>

                <div className="row">
                <div className="fw-bold col-6"><span>Online:</span></div>
                <div className="fw-bold col-6"><span>s/{item.price}</span></div>
                </div>

                <ul className="topic">
                <li className="space-color-pd">Color: </li>
                <Colors colors={item.colors} />
                </ul>
                
                <ul className="topic">
                <li className="space-color-pd">Talla: </li>
                <li className="space-color-pd">{item.talla}</li>
                </ul>



                <div class="mt-15 pdp-sizeguide-moda">
                  <img src="https://oechsle.vteximg.com.br/arquivos/icon-size.svg" alt="Ícono talla"/>Encuentra tu talla
                </div>               
                
                
                <button className="btn-oe btn-oe-addtocart">Add to cart</button>

              </div>

              </div></div>

              <div className="row infp-product text-prod">
              <h3 className="title center">Completa tu look</h3><p>{item.description}</p>
              
            </div>


            <div className="row infp-product text-prod">
              <h3 className="title center">DETALLE DEL PRODUCTO</h3><p>{item.description}</p>
              <h4 className="title center">TÉCNOLOGÍA</h4><p>{item.content}</p>
            </div>
            
            
            </div>
            
          ))
        }
      </div>
    );
  };
}

export default App;
