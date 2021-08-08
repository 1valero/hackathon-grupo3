import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCamera, faSearch, faShoppingCart, faStore, faUser } from '@fortawesome/free-solid-svg-icons';


import { useHistory } from 'react-router-dom';

library.add(fab, faSearch, faShoppingCart, faCamera, faUser, faStore)

class head extends React.Component{
    constructor(props){
        super(props)
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCarrito = this.handleCarrito.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    handleSubmit(event) {
      window.location.href='/camera'
    }

    handlebuscar(event){
      var txt = this.state.value;
      this.requestBusqueda(txt);
    }

    /*handleKey(event){
      if (event.key === 'Enter') {
        this.handlebuscar(event);
      }
    }*/

    requestBusqueda(txt,boolHome = false){
      console.log(txt);
      fetch('https://ir-hkt-equipo-03.rj.r.appspot.com/product/search/by-text?text='+ txt,{
          crossDomain:true,
          method: 'GET'
      })
        .then((response) => response.json())
          .then((json) => {
              this.setState({loaded : true});
              console.log(json.success.data);
              localStorage.setItem("resultados_busqueda", JSON.stringify(json.success.data));
              if(!boolHome){
                window.location.href='/resultados';
              }
              
          })
        .catch((error) => {
          console.error(error);
        });
    };

    handleCarrito(event) {
      //useHistory.history.push("/camera");
      window.location.href='/carrito';
    }

    componentDidMount(){
        this.requestBusqueda("polera hombre",true);
    }
  

    render() {
        return (
          <div className="head">
                <div className="topnav">
                  <div style={{width: '20%'}}>
                    <a href="/index" title="inicio"><img className="logo-principal" src="/assets/logo.png" /></a>
                  </div>
                  <div style={{width: '60%'}}>
                    <div className="search-container">
                        <input 
                        type="text" 
                        placeholder="Search.."
                        style={{width: '80%'}}
                        onChange={this.handleChange}
                        value={this.state.value}
                        /*onKeyDown={this.handleKey}*/
                        name="search"
                        />
                        
                        <div className="">
                            <button type="button" onClick={()=>this.handlebuscar()}                        >
                              <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>

                        <div className="iconcamara">
                            <button style={{cursor: 'pointer'}} className="camera" type="submit" onClick={ this.handleSubmit}>
                              <FontAwesomeIcon icon={faCamera} />
                            </button>
                        </div>

                    </div>
                  </div>


                  

                  
                  <div className="">
                      <button onClick={this.handleStore} >
                        <FontAwesomeIcon icon={faStore} size="s" />
                      </button>
                  </div>

                  <div className="">
                      <button onClick={this.handleUser} >
                        <FontAwesomeIcon icon={faUser} size="s" />
                      </button>
                  </div>
                  
                  <div className="">
                      <button onClick={this.handleCarrito} >
                        <FontAwesomeIcon icon={faShoppingCart} size="s" />
                      </button>
                  </div>        
                  
                </div>
          </div>
        );
      }

}


  
  export default head;