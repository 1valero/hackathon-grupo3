import React from 'react';
import { useState } from 'react';

import Head from '../head/head';
import Footer from '../footer/footer';
import Listado from '../listado/listado';
import CrossLook from '../crossLook/crossLook';

function ListadoProductos() {
  const [setData] = useState('');

  var resultados =  localStorage.getItem('resultados_busqueda');
  resultados = JSON.parse(resultados);

  return (
    <div className="App">
      <Head/>
      <Listado list={resultados}/>
      <CrossLook id={resultados[0].productId}/>
      <Footer/>
    </div>
  );
}

export default ListadoProductos;