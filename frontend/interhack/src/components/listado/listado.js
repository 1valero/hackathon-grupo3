import React,{Component} from 'react';

class Listado extends Component{
    constructor(props){
        super(props);
        this.state = {
            carrito: []
        }
        this.handleSubmitAgregar = this.handleSubmitAgregar.bind(this);
    }

    /*handleChange(event) {
        this.setState({value: event.target.value});
      }*/

    componentDidMount() {
        var carrito_storage =  localStorage.getItem('carrito');
        if(carrito_storage){
            carrito_storage = JSON.parse(carrito_storage);
            this.setState((prevState) => ({
                carrito: carrito_storage
              }));
        }
    }

    
    handleSubmitAgregar(item) {
        //window.location.href='/detalle'
        var carrito_storage = [];
        this.setState((prevState) => ({
            carrito: [...prevState.carrito, item]
          }));

          carrito_storage = [ ...this.state.carrito, item];
        
        localStorage.setItem("carrito", JSON.stringify(carrito_storage));

    }

    handleSubmitDetalle(item) {
        localStorage.setItem("detalle", JSON.stringify(item));
        window.location.href='/detalle'
    }

    item(data,boolCarrito){
        return(
            data.map(item=>
                <div className="col-3">
                        <div className="ProductCard">
                            <div className="ProductCard-image">
                                <img src={item.image} width="250px" height="250px"/>
                            </div>
                            <div className="detalle">

                                <span class="ProductName">
                                    <span class="ProductName-primary">
                                    {/*item.productId*/}
                                    {'S/ ' + item.price}
                                    </span>
                                    <span class="ProductName-alt">
                                    {item.productName}
                                            <span class="ProductName-separator">•
                                            </span>
                                            
                                    </span>
                                    </span>
                                {
                                    boolCarrito != "true" ? <>
                                        <div className="content-button">
                                            <button className="btn-oe btn-oe-pay" onClick={() => {this.handleSubmitAgregar(item)}}>Agregar</button>
                                            <button className="btn-oe btn-line-link" onClick={() => {this.handleSubmitDetalle(item)}}>Ver detalle</button>

                                        </div> 
                                    </> 
                                    : <></>
                                }
                                
                            </div>
                            
                        </div>
                </div>
                )
        );
    }

    

    render() {
        const {list,boolCarrito} = this.props 
        return (
          <div className="row">
                {this.item(list,boolCarrito)}
          </div>
        );
      }

      /*                   
      <div className="cards">
        <div className="content-card">
            <div className="img">
                <img src={item.image} width="50" height="50"/>
            </div>
    <div className="detalle">
        <p>
            {item.productId} {item.productName} {'S/ ' + item.price}
            </p>*/

}


  
  export default Listado;