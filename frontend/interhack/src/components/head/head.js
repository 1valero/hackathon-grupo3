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
      //useHistory.history.push("/camera");
      window.location.href='/camera'
    }

    handleCarrito(event) {
      //useHistory.history.push("/camera");
      window.location.href='/carrito'
    }

    render() {
        return (
          <div className="head">
                <div className="topnav">
                  <div style={{width: '20%'}}>
                    <a href="" title="inicio"><img src="/assets/logo.png" width="86" height="44"/></a>
                  </div>
                  <div style={{width: '60%'}}>
                    <div className="search-container">
                        <input 
                        type="text" 
                        placeholder="Search.."
                        style={{width: '80%'}}
                        onChange={this.handleChange}
                        value={this.state.value}
                        name="search"
                        />
                        <button type="button" 
                        style={{width: '20%'}}
                        ><img src="/assets/lupa.png" width="15" height="15" /></button>
                    </div>
                  </div>
                  <div style={{width: '20%',display: 'flex'}}>
                    <button style={{cursor: 'pointer'}} className="camera" type="submit" 
                        onClick={this.handleSubmit}>
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