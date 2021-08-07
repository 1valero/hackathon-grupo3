import React, { Component } from 'react';
import './App.css';
import './style/productdetail.css';
import './style/grid.css';


class App extends React.Component{

    state = {
      products: [
        {
          "_id": "1744570",
          "title": "Pantalón Hombre Deportivo Puma Sweat Negro",
          "src":"https://oechsle.vteximg.com.br/arquivos/ids/2250668-1500-1500/1744569.jpg",
          "price": 199.00,
          "brand":"puma",
          "url":"https://www.oechsle.pe/puma-pantalon-deportivo-puma-sweat-negro-1744569/p?color=Negro",
          "count": 1
        },

        {
            "_id": "1827927",
            "title": "Medias Deportivas Puma 906807 01 Uni Sneaker Pla Blanco 43/46 Negro",
            "src": "https://oechsle.vteximg.com.br/arquivos/ids/3227031-1500-1500/1827927.jpg",
            "price": 19.90,
            "brand":"puma",
            "url":"https://www.oechsle.pe/medias-deportivas-puma-906807-01-uni-sneaker-pla-blanco-43-46-negro/p",
            "count": 1
        },


          {
            "_id": "1899972",
            "title": "Polera Puma Hombre 587156 06 Puma Block Crew Azul/rojo",
            "src": "https://oechsle.vteximg.com.br/arquivos/ids/4229957-1500-1500/1899971.jpg?v=637620206106130000",
            "price": 129.00,
            "brand":"puma",
            "url":"https://www.oechsle.pe/polera-puma-hombre-587156-06-puma-block-crew-azul-rojo-1899971/p",
            "count": 1
          },

          {
            "_id": "4",
            "title": "Polo Ferrari Race Big Shield Tee+ Gris",
            "src":"https://oechsle.vteximg.com.br/arquivos/ids/3691779-1500-1500/1874108.jpg",
            "price": 99.00,
            "brand":"puma",
            "url":"https://www.oechsle.pe/puma-polo-ferrari-race-big-shield-tee--gris-1874107/p",
            "count": 1
          }
      ],
      index: 0
    };
  
    myRef = React.createRef();

  }
  
