import React from 'react';
import { useState } from 'react';
import Head from '../head/head';
import Footer from '../footer/footer';
import Listado from '../listado/listado';

function CarritoCompras() {
    const [setData] = useState('');
    var data = []
    var carrito_storage =  localStorage.getItem('carrito');
    carrito_storage = JSON.parse(carrito_storage);
  
    if(carrito_storage){
      data = carrito_storage;
    }
  
    return (
      <div className="App">
        <Head/>

        <div className="width-home">
        
          <section className="banner-sec">
            <h2 className="title-category">Tú carrito de compras</h2>
              <div className="listresult">
                  <Listado 
                  boolCarrito="true"
                  list={data}/>
              </div>
          </section>
        </div>
        
        <Footer/>
      </div>
    );
  }
  
  export default CarritoCompras;