import React from 'react';
import { useState } from 'react';

import Head from '../head/head';
import Footer from '../footer/footer';
import Listado from '../listado/listado';

function ListadoProductos() {
  const [setData] = useState('');

  var resultados =  localStorage.getItem('resultados_busqueda');
  resultados = JSON.parse(resultados);

  requestCross(resultados[0].productId);

  function requestCross(id){
    
    fetch('https://ir-hkt-equipo-03.rj.r.appspot.com/product/cross-selling/'+ id,{
        crossDomain:true,
        method: 'GET'
        
    })
      .then((response) => response.json())
        .then((json) => {
            console.log(json.success.data);
            localStorage.setItem("resultados_busqueda_cross", JSON.stringify(json.success.data))

        })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <Head/>
      <Listado list={resultados}/>
      <Footer/>
    </div>
  );
}

export default ListadoProductos;