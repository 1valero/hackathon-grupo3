import React,{Component} from 'react';

class Listado extends Component{
    constructor(props){
        super(props);
        this.state = {
            carrito: [],
            list: [],
            loaded : false
        }
        this.handleSubmitAgregar = this.handleSubmitAgregar.bind(this);
    }

    componentDidMount() {
        var carrito_storage =  localStorage.getItem('carrito');
        if(carrito_storage){
            carrito_storage = JSON.parse(carrito_storage);
            this.setState((prevState) => ({
                carrito: carrito_storage
              }));
        }

        this.requestCross(this.props.id);
    }

    

    requestCross(id){
        
        fetch('https://ir-hkt-equipo-03.rj.r.appspot.com/product/cross-selling/'+ id,{
            crossDomain:true,
            method: 'GET'
            
        })
        .then((response) => response.json())
            .then((json) => {
                localStorage.setItem("resultados_busqueda_cross", JSON.stringify(json.success.data))
                this.setState({list: json.success.data, loaded: true});
            })
        .catch((error) => {
            console.error(error);
        });
    };


    
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

    item(data){
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
                                    <div className="content-button">
                                        <button className="btn-oe btn-oe-pay" onClick={() => {this.handleSubmitAgregar(item)}}>Agregar</button>
                                        <button className="btn-oe btn-line-link" onClick={() => {this.handleSubmitDetalle(item)}}>Ver detalle</button>

                                    </div> 
                                    
                                    
                                }
                                
                            </div>
                            
                        </div>
                </div>
                )
        ); 
    }

    

    render() {
        const {list} = this.state 
        return (
          <div className="row">
              <div style={{width: '100%', margin: '8px'}}>
                  <h3><b>¡Completa tu look! Te damos estas sugerencias</b></h3>
              </div>

                {
                this.state.loaded ?  
                    this.item(list)
                : "Cargando ..."
                }
          </div>
        );
      }

}


  
  export default Listado;