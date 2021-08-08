import React from 'react';
import { useHistory } from 'react-router-dom';

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
                    <a href="/index" title="inicio"><img src="/assets/logo.png" width="86" height="44"/></a>
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
                        <button type="button" 
                        style={{width: '20%'} }
                        onClick={()=>this.handlebuscar()}
                        ><img src="/assets/lupa.png" width="15" height="15" /></button>
                    </div>
                  </div>
                  <div style={{width: '20%',display: 'flex'}}>
                    <button style={{cursor: 'pointer'}} className="camera" type="submit" 
                        onClick={ this.handleSubmit}>
                      <img src="/assets/icon_camera.png" width="15" height="15" />
                      </button>

                      <button style={{marginLeft:'16px', cursor: 'pointer'}} onClick={this.handleCarrito} >
                        <img src="/assets/icon_car.png" width="15" height="15" />
                      </button>
                  </div>
                  
                </div>
          </div>
        );
      }

}


  
  export default head;