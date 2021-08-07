import React from 'react';
import { useState } from 'react';


import Head from '../head/head';
import Footer from '../footer/footer';
import Listado from '../listado/listado';

function Index() {
  const [setData] = useState('');

  const data = [
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

  return (
    <div className="App">
      <Head/>
      <div className="banner">
        <img className="banner" src="/assets/banner-hombre.png"/>
      </div>
      <Listado list={data}/>
      <Footer/>
    </div>
  );
}

export default Index;