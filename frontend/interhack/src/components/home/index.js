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

  if(resultados){
    data = resultados;
  }else{
    data = [
      {
        "ropa": "abrigo"
      },
      {
        "ropa": "gorro2"
      },
      {
        "ropa": "gorro3"
      },
      {
        "ropa": "gorro4"
      }
  ]

  }

  
  return (
    <div className="App">
      <Head/>
      <div className="banner">
        <img className="banner" src="/assets/banner-hombre.png"/>
      </div>
      <Listado list={data}/>


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