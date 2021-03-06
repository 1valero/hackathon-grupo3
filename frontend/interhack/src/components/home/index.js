import React from 'react';
import { useState } from 'react';
import Head from '../head/head';
import Footer from '../footer/footer';
import Listado from '../listado/listado';

function Index() {
  const [setData] = useState('');
  var data = []
  var resultados =  localStorage.getItem('resultados_busqueda');
  resultados = JSON.parse(resultados);
  const large = '/assets/banner-hombre.png';
  const small = 'https://oechsle.vteximg.com.br/arquivos/slider-landing-lamesanosune-0208-mobile.png';

  if(resultados){
    data = resultados;
  }else{
    data = [
      {
        "ropa": "abrigo",
        "price": 34.95,
        "link": "https://www.oechsle.pe/babycircus-poleron-para-nina-b-1556060/p",
      },
      {
        "ropa": "gorro2",
        "price": 34.95,
        "link": "https://www.oechsle.pe/babycircus-poleron-para-nina-b-1556060/p",
      },
      {
        "ropa": "gorro3",
        "price": 34.95,
        "link": "https://www.oechsle.pe/babycircus-poleron-para-nina-b-1556060/p",
      },
      {
        "ropa": "gorro4",
        "price": 34.95,
        "link": "https://www.oechsle.pe/babycircus-poleron-para-nina-b-1556060/p",
      }
  ]

  }

  
  return (
    <div className="App">
      <Head/>

      <div className="banner"><img className="banner" src="https://oechsle.vteximg.com.br/arquivos/Cintillo_express-desktop-b.png"/></div>

      <div className="banner">
          <img className="banner" src={large} srcSet={`${large} 768w, ${small} 1280w`} sizes="(min-width: 960px) 540px, 100vw"/>
      </div>

      <div className="width-home">
      
        <section className="banner-sec">
          <h2 className="title-category">Colecciones destacadas</h2>
            <div className="listresult">
                <Listado list={data}/>
            </div>
        </section>
      </div>
      

    <div className="width-home">
    <div className="row">
    <section className="banner-sec">
      <h2 className="title-category">Lo más top</h2>
      <img src="https://oechsle.vteximg.com.br/arquivos/slider-regular-SPH-laptop-0308-desktop-e.png"/>
		</section>  
    </div>
    <div className="row">
    <section className="banner-sec">
      <h2 className="title-category">Colecciones destacadas</h2>
      <div className="row">
      <div className="col-3"><img src="https://oechsle.vteximg.com.br/arquivos/03-mosaico-regular-lo+nuevo-2307.png"/></div>
      <div className="col-3"><img src="https://oechsle.vteximg.com.br/arquivos/03-lomastop-regular-2307.png"/></div>
      <div className="col-3"><img src="https://oechsle.vteximg.com.br/arquivos/campan~a-adidas-lomastop-regular.png"/></div>
      <div className="col-3"><img src="https://oechsle.vteximg.com.br/arquivos/04-mosaico-regular-lo+nuevo-2307-b.png"/></div>
      </div>
		</section>  
    </div>
    </div>
      <Footer/>
    </div>
  );
}

export default Index;